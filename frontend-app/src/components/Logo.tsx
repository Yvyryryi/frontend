import Link from "next/link";
import Image from "next/image";

export default function Logo(){
    return(

            <Link href="/" className="inline-flex justify-center items-center gap-2">
                <Image
                    src={"/logo3.png"}
                    width={2981}
                    height={3000}
                    alt="logo"
                    className="w-10 hidden"
                ></Image>
                <div className="h-10 flex justify-center items-center w-10 rounded-full bg-gradient-to-b from-orange-500 via-yellow-600 to-orange-950">

                </div>
            </Link>
    )
}