import "@/app/ui/global.css";
import { ReactNode } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-slate-800 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
