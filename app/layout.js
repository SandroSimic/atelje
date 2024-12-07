import { Cardo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar";

const cardo = Cardo({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Mladen Mićić | Umjetnik - Slikarstvo i Crtanje",
  },
  authors: [
    { name: 'Sandro Simic', url: 'https://github.com/SandroSimic' }
  ],
  description:
    "Dobrodošli na zvaničnu stranicu Mladena Mićića, umjetnika specijalizovanog za slikarstvo i crtanje. Pogledajte galeriju, izložbe i umjetničke tehnike.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${cardo.className}`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
