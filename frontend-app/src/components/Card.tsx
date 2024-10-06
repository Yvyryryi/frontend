import Image from "next/image"
import Link from "next/link"
import { BsLinkedin } from "react-icons/bs"
import { FaInstagram } from "react-icons/fa6"

interface CardProps {
    name:string,
    occupation:string,
    src:string,
    linkedin?:string,
    instagram?:string,
}

export default function Card({
    name,
    occupation,
    src,
    linkedin,
    instagram
}:CardProps){
    return(
        <div className="flex flex-col gap-4 p-5 rounded-md border border-neutral-700 bg min-h-32 w-full">
            <Image
                src={src}
                width={450}
                height={300}
                alt="dante"
                className="rounded-md border border-neutral-700 aspect-square bg-cover"
            />
            <div className="flex flex-col gap-3 text-center">
                <div className="inline-flex justify-between items-center">
                    <p className="flag">{occupation}</p>
                    <div className="inline-flex gap-2 justify-center items-center">
                        <Link href={linkedin ? linkedin : ""} className={linkedin ? "":"hidden"}>
                            <BsLinkedin className="w-5 h-5 text-neutral-300"></BsLinkedin>
                        </Link>
                        <Link href={instagram ? instagram : ""} className={instagram ? "":"hidden"}>
                            <FaInstagram className="w-5 h-5 text-neutral-300"/>
                        </Link>
                    </div>
                </div>
                <h5>{name}</h5>
            </div>
        </div>
    )
}