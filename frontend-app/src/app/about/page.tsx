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
                            <Card name="Dante Rivarola" src="/dante.jpg" occupation="Front end - Web design" linkedin="https://www.linkedin.com/in/dante-rivarola-dinatale-264a82289/" instagram="https://www.instagram.com/_drd_04/"/>
                            <Card name="Jorge Enciso" src="/jorge.jpg" occupation="Algorithm - Back end" linkedin="https://www.linkedin.com/in/jorge-david-enciso-mart%C3%ADnez-149977265/"/>
                            <Card name="Angelo Segrado" src="/segrado.jpeg" occupation="Data Analysis" linkedin="https://www.linkedin.com/in/angelo-segrado-07689227a/"/>
                            <Card name="Harumi Encina" src="/harumi.jpg" occupation="Design - Promotion" linkedin="https://www.linkedin.com/in/harumi-encina-21765a331/" instagram="https://www.instagram.com/rlyharu/"/>
                            <Card name="Luciano Santiviago" src="/luciano.png" occupation="Design - Promotion" instagram="https://www.instagram.com/luciano_santze/" linkedin="https://www.linkedin.com/in/lucianosantiviago/"/>
                            <Card name="Angelo Serafini" src="/serafini.jpg" occupation="Back end" linkedin="https://www.linkedin.com/in/angelo-serafini-4a6443135/"/>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h1>Our story</h1>
                            <p>Yvyryrýi (Earthquake in Guarani language) reflects the heritage of the developers behind this project. 
                            Born from a shared passion for science, programming, design, and open data, this solution was ignited from a diverse team united by dreams and friendship. 
                            Together, we set out to revolutionize how we find a needle in a haystack—or, in this case, detect a Marsquake in a vast sea of data!
                            Our innovation is an example of the power of collaboration and creativity in tackling the challenges of space exploration and the way we share our discoveries with our community.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}