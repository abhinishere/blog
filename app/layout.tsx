import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abhin Mahipal | Personal Blog",
  description:
    "Hey, I'm Abhin. Freelance developer and writer. I'm passionate about building web experiences that solve real problems and improve lives.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#F5F3F7] text-[#4A4A4A] relative h-[5000px]`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}