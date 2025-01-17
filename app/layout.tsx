import "@/app/ui/global.css";
import { ReactNode } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased overflow-y-hidden bg-zinc-950 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
