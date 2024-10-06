"use client"

import Card from "@/components/Card";
import { motion } from "framer-motion";

export default function Page(){
    return(
        <div className="my-20 relative">
            <motion.div initial={{opacity: 0 }} transition={{delay:0.2,y:"-30%"}} whileInView={{ opacity: 1,y:"0%"}} className="py-10 px-5"><h3>More about us</h3></motion.div>
            <div className="container">
                <div className="flex flex-col md:gap-10 gap-10">
                    <div className="flex flex-col gap-10">
                        <h1>People involved</h1>
                        <div className="grid md:grid-cols-3 grid-cols-1 flex-col gap-3">
                            <Card name="Dante Rivarola" src="/dante.jpg" occupation="Front end" linkedin="https://www.linkedin.com/in/dante-rivarola-dinatale-264a82289/" instagram="https://www.instagram.com/_drd_04/"/>
                            <Card name="Jorge Enciso" src="/jorge.jpg" occupation="Algorithm - Back end"/>
                            <Card name="Angelo Segrado" src="/segrado.jpeg" occupation="Data Analysis" linkedin="https://www.linkedin.com/in/angelo-segrado-07689227a/"/>
                            <Card name="Harumi Encina" src="/harumi.jpg" occupation="Design - Marketing"/>
                            <Card name="Luciano Santiviago" src="/luciano.png" occupation="Design - Marketing" instagram="https://www.instagram.com/luciano_santze/" linkedin="https://www.linkedin.com/in/lucianosantiviago/"/>
                            <Card name="Angelo Serafini" src="/serafini.jpg" occupation="Back end"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}