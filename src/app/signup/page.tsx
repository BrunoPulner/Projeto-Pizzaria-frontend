import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.scss";
import { api } from "@/services/api";
import { redirect } from "next/navigation";

export default function Signup() {
  async function handleRegister(formData: FormData) {
    "use server";

    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    if (name === "" || email === "" || password == "") {
      console.log("Preencha todos os campos!");
      return;
    }

    try {
      await api.post("/users", {
        name,
        email,
        password,
      });
    } catch (err) {
      console.log("error");
      console.log(err);
    }

    redirect("/");
  }

  return (
    <>
      <main>
        <div className={styles.containerCenter}>
          <Image src="/pizza-shop.svg" alt="Logo" width={200} height={200} />

          <section className={styles.login}>
            <h1>Crie sua conta</h1>
            <form action={handleRegister}>
              <input
                type="text"
                required
                name="name"
                placeholder="digite seu nome"
                className={styles.input}
              />

              <input
                type="email"
                required
                name="email"
                placeholder="digite seu email"
                className={styles.input}
              />

              <input
                type="password"
                required
                name="password"
                placeholder="********"
                className={styles.input}
              />

              <button type="submit">Cadastrar</button>
            </form>

            <Link href="/" className={styles.text}>
              Já possui uma conta? Faça o login
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
