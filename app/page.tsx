import Linker from "./components/Linker"
import Card from "./components/Card"
import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col min-h-full">
      <div className="grow">
        <Card>
          <Image src="/card.png" width={150} height={150} alt="메인 카드"/>
        </Card>
        <div className="flex justify-center **:w-10 **:text-green-600">
          <Link href="https://www.instagram.com/cho1_r0ck?igsh=Y2Zjb3c0NHVzZWZ3">
            <FontAwesomeIcon icon={faInstagram}/>
          </Link>
        </div>
      </div>
      <div className="grid gap-2">
        <Linker href="https://m.blog.naver.com/eric9800/224067171845">
          졸업작품1
        </Linker>
        <Linker href="https://m.blog.naver.com/eric9800/224067171845">
          졸업작품2
        </Linker>
        <Linker href="https://m.blog.naver.com/eric9800/224067171845">
          졸업작품3
        </Linker>
        <Linker href="https://m.blog.naver.com/eric9800/224067171845">
          졸업작품4
        </Linker>
      </div>
    </div>
  )
}