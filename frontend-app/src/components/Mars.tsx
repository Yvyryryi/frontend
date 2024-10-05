import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { BsArrowRight } from "react-icons/bs"

export default function Mars(){
    return(
        <section className="pt-10">
            <motion.div className="w-full relative pt-4">
                <Image
                    width={2260}
                    height={1080}
                    src={"/marscrop.png"}
                    alt="mars"
                    className="w-full brightness-125 md:flex hidden"
                ></Image>
                <Image
                    width={2260}
                    height={1080}
                    src={"/mars2.png"}
                    alt="mars"
                    className="absolute left-0 -top-52 brightness-125 md:hidden"
                ></Image>
                <div className="md:absolute flex flex-col justify-center items-center gap-16 w-full h-full top-0 right-0 bg-gradient-to-b from-transparent via-black/75 to-black md:backdrop-blur-sm">
                    <motion.div initial={{opacity: 0 }} transition={{delay:0.2}} whileInView={{ opacity: 1, y:"-30%",}} className="md:py-2 py-4">
                        <h3>More things to come</h3>
                    </motion.div>
                    <motion.div initial={{opacity: 0 }} transition={{delay:0.3}} whileInView={{ opacity: 1,y:"-30%", }} className="flex flex-col gap-7 md:w-4/12 w-11/12 md:text-xl md:tracking-wider text-center text-neutral-300 italic">
                        &quot;The inverse-square law states that the intensity of something, like radio signals, decreases proportionally to the square of the distance from its source. 
                        This means that as signals travel farther—like, from Mars to Earth—their strength decreases significantly, requiring careful consideration of power usage, 
                        which we all know is a concern in space.&quot;
                        <Link href="/project" className="p-3 inline-flex not-italic justify-center items-center gap-3 text-white font-bold rounded border hover:animate-pulse hover:bg-white hover:text-black duration-200">
                            Check out how this project was made <BsArrowRight/>
                        </Link>
                    </motion.div>
                    
                </div>
            </motion.div>
        </section>
    )
}