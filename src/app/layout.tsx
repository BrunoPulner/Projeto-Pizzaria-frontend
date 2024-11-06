import type { Metadata } from "next";
import "./global.scss";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Projeto pizzaria",
  description: "Projeto pizzaria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              backgroundColor: "#f1f1f1",
              color: "#131313",
              borderColor: "rgba(255,255,255, 0.5)",
            },
          }}
        />
        {children}
      </body>
    </html>
  );
}
