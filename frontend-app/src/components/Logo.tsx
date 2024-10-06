import Link from "next/link";

export default function Logo(){
    return(

            <Link href="/" className="inline-flex justify-center items-center gap-2">
                <div className="h-10 flex justify-center items-center w-10 rounded-full bg-gradient-to-b from-orange-500 via-yellow-600 to-orange-950">

                </div>
            </Link>
    )
}