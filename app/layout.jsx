import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hackathon del Dev - Rediseño",
  description: "Hackathon del Dev - Rediseño",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-h-blue-1`}>{children}</body>
    </html>
  );
}
