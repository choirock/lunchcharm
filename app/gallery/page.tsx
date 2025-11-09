import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

export default function Page() {
  return (
    <div className="w-full min-h-full">
      <Link href="/">
        <FontAwesomeIcon className="text-white absolute w-8 top-3 left-4" icon={faXmark} />
      </Link>
      <div className="mb-6"/>
      <div className="w-full"> 
        <Image width={2480} height={1730} className="w-full h-auto object-contain" src="/image1.png" alt="테스트 이미지"/>
      </div>
      <div className="w-full"> 
        <Image width={440} height={623} className="w-full h-auto object-contain" src="/image2.png" alt="테스트 이미지"/>
      </div>
    </div>
  )
}