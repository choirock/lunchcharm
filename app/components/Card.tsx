import { ReactNode } from "react";

export default function Card({children}: {children: ReactNode}) {
  return (
    <div className="bpx-5 py-4 rounded-xl text-center flex justify-center">
      {children}
    </div>
  )
}