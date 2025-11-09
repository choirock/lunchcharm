import Linker from "./components/Linker"
import Card from "./components/Card"
import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faThreads } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col min-h-full">
      <div className="grow">
        <div className="text-lime-600 text-center text-3xl font-bold">ChoiRock.</div>
        <Card>
          <Image src="/card.png" width={150} height={150} alt="메인 카드"/>
        </Card>
        <div className="flex justify-center **:w-10 **:text-green-600 gap-3">
          <Link href="https://www.instagram.com/cho1_r0ck?igsh=Y2Zjb3c0NHVzZWZ3">
            <FontAwesomeIcon icon={faInstagram}/>
          </Link>
          <Link href="https://www.threads.com/@cho1_r0ck" className="items-center flex">
            <FontAwesomeIcon icon={faThreads} />
          </Link>
          <Link href="mailto:eric9800@naver.com" className="items-center flex">
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
        </div>
        <div className="text-green-600 text-center text-2xl mt-17 font-semibold">멀티아티스트</div>
        <div className="text-green-600 text-center text-2xl mt-3 font-semibold">만화 에니메이션 작가</div>
      </div>
      <div className="grid gap-2">
        <Linker href="https://comic.naver.com/challenge/list?titleId=844706">
          Works.
        </Linker>
        <Linker href="/gallery">
          Gallery.
        </Linker>
      </div>
    </div>
  )
}