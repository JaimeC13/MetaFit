import type { Metadata } from "next";
import "./globals.css";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "MetaFit",
  description: "Optimiza tu biomecánica y nutrición con el poder de la IA.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es"> 
      <body className={rubik.className}>
        {children}
      </body>
    </html>
  );
}
