import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { BsArrowRight } from "react-icons/bs"
import { FaArrowUp } from "react-icons/fa6"

export default function Mars(){
    return(
        <section className="pt-10 md:pt-0">
            <motion.div className="w-full relative pt-4">
                <Image
                    width={2260}
                    height={1080}
                    src={"/marscrop.png"}
                    alt="mars"
                    className="w-full brightness-125 md:flex hidden img-shadow"
                ></Image>
                <Image
                    width={2260}
                    height={1080}
                    src={"/mars2.png"}
                    alt="mars"
                    className="absolute left-0 -top-52 brightness-125 md:hidden"
                ></Image>
                <div className="md:absolute flex flex-col justify-center items-center gap-14 w-full h-full top-0 right-0 bg-gradient-to-b from-transparent via-black/75 to-black md:backdrop-blur-sm">
                    <motion.div initial={{opacity: 0 }} viewport={{ once: true }} transition={{delay:0.2}} whileInView={{ opacity: 1, y:"-30%",}} className="md:py-2 py-4">
                        <h3>Want to learn more?</h3>
                    </motion.div>
                    <motion.div initial={{opacity: 0 }} viewport={{ once: true }} transition={{delay:0.3}} whileInView={{ opacity: 1,y:"-30%", }} className="flex flex-col gap-9 md:w-4/12 w-11/12 md:text-xl md:tracking-wider text-center text-neutral-300 italic">
                        &quot;Our team has developed an innovative filter for seismic data captured on Mars and the Moon, effectively distinguishing seismic events from background noise, while reducing processing power requirements and energy
                        consumption during data transmission to Earth.&quot;
                        <Link href="/project" className="p-3 inline-flex not-italic justify-center items-center gap-3 text-white font-bold rounded border hover:animate-pulse hover:bg-white hover:text-black duration-200">
                            About the project <BsArrowRight/>
                        </Link>
                        <div className="flex justify-center items-center">
                            <FaArrowUp className="w-10 h-10 animate-bounce"/>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}