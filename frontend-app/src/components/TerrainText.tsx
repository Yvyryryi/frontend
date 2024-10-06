import { motion } from "framer-motion";
import Image from "next/image"

export default function TerrainText({children,}: Readonly<{children: React.ReactNode;}>){
    return(
        <section className="">
            <motion.div initial={{opacity: 0, y:"50%"}} viewport={{ once: true }} transition={{duration: 0.7, delay:0.2}} whileInView={{ opacity: 1,y:"0%"}} className="w-full">
                <div className="h-full -top-10 w-full right-0">
                    <h4>{children}</h4>
                </div>
                <div className="relative">
                    <Image
                        src={"/terrain.png"}
                        width={2160}
                        height={415}
                        alt="terrain"
                        className="top-0 right-0 w-full shadow-inner z-30 rounded-2xl"
                    />
                </div>
            </motion.div>
        </section>
    )
}