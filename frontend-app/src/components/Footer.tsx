import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";

export default function Footer(){
    return(
        <footer className="border-neutral-800">
            <div className="container">
                <div className="flex w-full items-center justify-between py-5 pb-10">
                    <div className="flex flex-row gap-2">
                        <a target="_blank" href="https://www.spaceappschallenge.org/nasa-space-apps-2024/find-a-team/yvyryryi/">
                            <Image
                                src={"/nsa.png"}
                                width={192}
                                height={192}
                                alt="flag"
                                className="w-6"
                            ></Image>
                        </a>
                        <a href="/">
                            <FaInstagram className="w-6 h-6"/>
                        </a>
                        <a href="/">
                            <FaLinkedin className="w-6 h-6"/>
                        </a>
                    </div>
                    <div className="inline-flex gap-2 justify-center items-center text-neutral-400">
                        Made in Paraguay
                        <Image
                            src={"/py.png"}
                            width={512}
                            height={512}
                            alt="flag"
                            className="w-7"
                        ></Image>
                    </div>
                </div>
            </div>
        </footer>
    )
}