import { BsArrowRight } from "react-icons/bs";
import ChartExample from "./ChartExample";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SoundForm(){
    return(
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex flex-col items-center p-5 gap-5 mt-20">
            <Link className="text-icon link"href={"/project"}>
                How does it work? <BsArrowRight/>
            </Link>
            <ChartExample></ChartExample>
        </motion.div>
    )
}