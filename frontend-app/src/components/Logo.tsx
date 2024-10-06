import Link from "next/link";
import Image from "next/image";

export default function Logo(){
    return(
            <Link href="/" className="inline-flex justify-center items-center gap-2">
                <Image
                    src={"/logo_white.png"}
                    width={1702}
                    height={657}
                    alt="logo_white"
                    className="w-40"
                />
            </Link>
    )
}