import { ReactNode } from "react";
import './globals.css';
import Image from "next/image";

export default function Layout({children}: {children: ReactNode}) {
  return (
    <html lang="ko">
      <body className="min-h-screen">
        <div className="fixed top-0 inset-0 -z-10">
          <Image
            src="/background.png"
            alt="배경"
            fill
            className="object-cover max-w-full"
            priority
          />
        </div>
        <main className="mx-auto py-10 p-6 max-w-3xl h-svh">
          {children}
        </main>
      </body>
    </html>
  )
}