import Link from "next/link";
import { ReactNode } from "react";

export default function Linker({href, children}: {href: string, children: ReactNode}) {
  return (
    <div className="max-w-3xl bg-white/40 rounded-md px-4 py-3 text-center text-xl text-green-500">
      <Link href={href}>
        {children}
      </Link>
    </div>
  )
}