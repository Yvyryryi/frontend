"use client"

import Rover from "@/components/Rover";
import TerrainText from "@/components/TerrainText";
import { motion } from "framer-motion";


export default function Page(){
    return(
        <div className="my-20 relative text-justify">
            <motion.div initial={{opacity: 0 }} viewport={{ once: true }} transition={{duration:1}} whileInView={{ opacity: 1,y:"0%"}} className="py-14 px-5"><h3>Project details</h3></motion.div>
            <div className="container">
                <div className="flex flex-col md:gap-20 gap-10">
                    <motion.div initial={{opacity: 0, y:"50%"}} viewport={{ once: true }} transition={{duration: 0.7}} whileInView={{ opacity: 1,y:"0%"}} className="flex flex-col gap-3 md:text-xl">
                        <h1>Moonquakes and Marsquakes! </h1>
                        <p>
                            Our mission was to develop an algorithm that filters raw data from seismometers <strong>on Moon and Mars</strong>, distinguishing real seismic 
                            activity from background noise and transmitting only the essential data back to Earth. <strong>Why is this important?</strong> Because more data 
                            means higher power demands, and in the harsh environment of space, power efficiency is critical! 
                        </p>
                    </motion.div>
                    <TerrainText>Hearing mars is kinda difficult...</TerrainText>
                    <motion.div initial={{opacity: 0, y:"50%"}} viewport={{ once: true }} transition={{duration: 0.7}} whileInView={{ opacity: 1,y:"0%"}} className="flex flex-col gap-3 md:text-xl">
                        <p>
                            There’s a trade-off between making the algorithm more robust, handling complex calculations (which may require more power) and keeping 
                            it energy-efficient. <strong>We are not talking only about the energy used to send the data to Earth, but also the energy required to process the 
                            raw data on these interplanetary seismometers.</strong> There was a big challenge to keep a balance in having an algorithm that is capable enough, 
                            but doesn’t require too much processing power (and thus energy), all while considering the inherent limitations of operating in space. 
                        </p>
                    </motion.div>
                    <Rover></Rover>
                    <motion.div initial={{opacity: 0, y:"50%"}} viewport={{ once: true }} transition={{duration: 0.7}} whileInView={{ opacity: 1,y:"0%"}} className="flex flex-col gap-3 md:text-xl">
                        <h1>
                            the algorithm is
                        </h1>
                        <ul className="flex flex-col gap-2 py-2">
                            <li>
                                <strong>Powerful enough:</strong> to effectively filter the raw data from the seismometer, distinguishing between noise and seismic activity, while also compressing the data to minimize the energy used during transmission to Earth.
                            </li>
                            <li>
                                <strong>Simple enough:</strong> to operate within the limited energy and processing power available on Mars. 
                            </li>
                        </ul>
                        <h1 className="md:text-start text-center">
                            Our signal-processing algorithms search for specific patterns in seismic activities, such as:
                        </h1>
                        <ul className="flex flex-col gap-2 py-2">
                            <li>
                                <strong>Finding peak values: </strong>The highest points in the raw data, which can indicate seismic events.
                            </li>
                            <li className="">
                                <strong>How much the data varies over time:</strong><span className="text-neutral-400"> To see if there are big changes in the waves detected or just small fluctuations, helping us identify possible seismic activity.</span> 
                            </li>
                            <li>
                                <strong>How quickly the peaks drop back down:</strong> to differentiate between real seismic events and just random noise.
                            </li>
                            <li>
                                <strong>Among others...</strong>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}