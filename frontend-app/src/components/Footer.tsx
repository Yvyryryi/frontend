import Link from "next/link";
import Logo from "./Logo";

export default function Footer(){
    return(
        <footer className="border-t border-neutral-800">
            <div className="container">
                <div className="flex flex-col justify-between items-center pb-10 gap-5">
                    <div className="flex flex-row w-full justify-center border-b border-neutral-800 py-5 ">
                        <div className="flex flex-col items-center grow">
                            <Link href={"/about"}>About</Link>
                        </div>
                        <div className="flex flex-col items-center grow">
                            <Link href={"/project"}>Project</Link>
                        </div>
                        <div className="flex flex-col items-center grow">
                            <Link href={"/project"}>Project</Link>
                        </div>
                        <div className="flex flex-col items-center grow">
                            <Link href={"/project"}>Project</Link>
                        </div>
                    </div>
                    <div className="w-full md:text-start text-center">
                        <Logo></Logo>
                    </div>
                </div>
            </div>
        </footer>
    )
}