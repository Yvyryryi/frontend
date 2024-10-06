import { motion } from "framer-motion"
import Image from "next/image"

export default function Rover(){
    return(
        <section className="">
            <motion.div initial={{opacity: 0, y:"50%"}} viewport={{ once: true }} transition={{duration: 1.2}} whileInView={{ opacity: 1,y:"0%"}} className="flex flex-col md:flex-row gap-2">
                <Image
                    src={"/rover.png"}
                    width={1367}
                    height={1367}
                    alt="rover"
                    className="md:w-6/12"
                />
                <div className="flex justify-center items-center p-4 md:w-6/12">
                    <h3>A rover can do it!</h3>
                </div>
            </motion.div>
        </section>
    )
}