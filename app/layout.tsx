import "./globals.css";

export const metadata = {
  title: "Central de Direito",
  description: "Centralize com clareza as informações do 1º semestre de Direito."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
