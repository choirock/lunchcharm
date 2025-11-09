import Link from "next/link";
import { ReactNode } from "react";

export default function Linker({href, children, className}: {href: string, children: ReactNode, className?: string}) {
  return (
    <div className="max-w-3xl hover:bg-white/50 bg-white/40 rounded-md px-4 py-3 text-center text-xl text-green-500">
      <Link href={href} className={className}>
        {children}
      </Link>
    </div>
  )
}