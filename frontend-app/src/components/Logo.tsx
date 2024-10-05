import Link from "next/link";

export default function Logo(){
    return(
        <div className="inline-flex justify-center items-center gap-2">
            <Link href="/"><h1>Yvyryrýi</h1></Link>
        </div>
    )
}