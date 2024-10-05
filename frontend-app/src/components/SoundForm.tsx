import { BsArrowRight } from "react-icons/bs";
import ChartExample from "./ChartExample";
import { motion } from "framer-motion";

export default function SoundForm(){
    return(
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex flex-col items-center p-5 gap-5 mt-20">
            <a className="text-icon link" target="_blank" href={"https://www.spaceappschallenge.org/nasa-space-apps-2024/find-a-team/yvyryryi/"}>
                Project by Yvyryrýi <BsArrowRight/>
            </a>
            <ChartExample></ChartExample>
            <div className="absolute -bottom-96 -left-96 p-4 w-6/12">
            
            </div>
        </motion.div>
    )
}