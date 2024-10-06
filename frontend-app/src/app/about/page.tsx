"use client"

import Card from "@/components/Card";
import { motion } from "framer-motion";

export default function Page(){
    return(
        <div className="my-20 relative">
            <motion.div initial={{opacity: 0 }} transition={{delay:0.2,y:"-30%"}} whileInView={{ opacity: 1,y:"0%"}} className="py-10 px-5"><h3>More about us</h3></motion.div>
            <div className="container">
                <div className="flex flex-col md:gap-10 gap-10">
                    <div className="flex flex-col gap-3">
                        <h1>People involved</h1>
                        <div className="grid md:grid-cols-3 grid-cols-1 flex-col gap-3">
                            <Card name="Dante Rivarola Dinatale" src="/dante.jpg" occupation="Front end" linkedin="https://www.linkedin.com/in/dante-rivarola-dinatale-264a82289/" instagram="https://www.instagram.com/_drd_04/"/>
                            <Card name="Jorge Enciso" src="/placeholder.jpeg" occupation="Algorithm - Back end"/>
                            <Card name="Angelo Segrado" src="/placeholder.jpeg" occupation="Data Analysis"/>
                            <Card name="Harumi" src="/placeholder.jpeg" occupation="Design"/>
                            <Card name="Luciano" src="/placeholder.jpeg" occupation="Design"/>
                            <Card name="Angelo Serafini" src="/placeholder.jpeg" occupation="Back end"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}