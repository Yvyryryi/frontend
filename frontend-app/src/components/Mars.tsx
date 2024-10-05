import { motion } from "framer-motion"
import Image from "next/image"

export default function Mars(){
    return(
        <section className="pt-10">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="w-full relative">
                <Image
                    width={2260}
                    height={1080}
                    src={"/marscrop.png"}
                    alt="mars"
                    className="w-full img"
                ></Image>
                
                <div className="absolute w-full h-full top-0 right-0 bg-gradient-to-b from-transparent to-black">

                </div>
            </motion.div>
        </section>
    )
}