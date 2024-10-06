import Link from "next/link";
import Image from "next/image";

export default function Logo(){
    return(
            <Link href="/" className="inline-flex justify-center items-center gap-2">
                <Image
                    src={"/logo_white.png"}
                    width={486}
                    height={486}
                    alt="logo_white"
                    className="w-40"
                />
                {/* <h1 className="pt-1 tracking-wider">YVYRYRYI</h1> */}
            </Link>
    )
}