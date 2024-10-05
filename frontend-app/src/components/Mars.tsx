import { motion } from "framer-motion"
import Image from "next/image"

export default function Mars(){
    return(
        <section className="pt-10">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="w-full relative pt-4">
                <Image
                    width={2260}
                    height={1080}
                    src={"/marscrop.png"}
                    alt="mars"
                    className="w-full"
                ></Image>
                
                <div className="absolute flex flex-col justify-center items-center gap-16 w-full h-full top-0 right-0 bg-gradient-to-b from-transparent via-black/75 to-black backdrop-blur-sm">
                    <motion.div initial={{y:"-30%", opacity: 0 }} transition={{delay:0.2}} whileInView={{ opacity: 1 }} className="py-2">
                        <h3>More things to come</h3>
                    </motion.div>
                    <motion.div initial={{y:"-30%", opacity: 0 }} transition={{delay:0.3}} whileInView={{ opacity: 1 }} className="md:w-4/12 w-11/12 md:text-xl md:tracking-wide text-center md:text-start">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt tempore sint, dolores, iure nisi consequatur dolorum ex 
                        in deserunt dignissimos voluptatum cum animi magni hic molestias laudantium necessitatibus nemo? Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. Odio recusandae, provident minus officiis eius soluta amet facilis maiores. Blanditiis placeat 
                        ipsum dignissimos qui amet, nobis dicta ipsa ratione ut fugit?
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}