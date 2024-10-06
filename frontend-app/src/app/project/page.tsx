"use client"

import Rover from "@/components/Rover";
import TerrainText from "@/components/TerrainText";
import { motion } from "framer-motion";

export default function Page(){
    return(
        <div className="my-10 relative">
            <motion.div initial={{opacity: 0 }} transition={{delay:0.2,y:"-30%"}} whileInView={{ opacity: 1,y:"0%"}} className="py-10 px-5"><h3>More about this project</h3></motion.div>
            <div className="container">
                <div className="flex flex-col md:gap-20 gap-10">
                    <div className="flex flex-col gap-3">
                        <h1>People involved</h1>
                        <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing 
                        elit. Nulla expedita architecto dolores culpa eum doloremque 
                        voluptate nobis laboriosam suscipit officiis aut, nam ut! 
                        Sapiente quaerat facere aliquam nisi velit quos?
                        </p>
                    </div>
                    <TerrainText>Hearing from mars</TerrainText>
                    <div className="flex flex-col gap-3">
                        <h1>People involved</h1>
                        <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing 
                        elit. Nulla expedita architecto dolores culpa eum doloremque 
                        voluptate nobis laboriosam suscipit officiis aut, nam ut! 
                        Sapiente quaerat facere aliquam nisi velit quos?
                        </p>
                    </div>
                    <Rover></Rover>
                </div>
            </div>
        </div>
    )
}