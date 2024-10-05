"use client"

import { ChangeEvent, FormEvent, useState } from "react";
import { Area, AreaChart } from "recharts";
import { CgArrowRight } from "react-icons/cg";
import { CiWarning } from "react-icons/ci";
import { motion } from "framer-motion";

export default function ChartExample(){
    const [error, setError] = useState("")
    const [formData, setFormData] = useState({
        diasini: 0,
        diasfin: 0,
    })

    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, y: "40%" },
    }

    const [data, setData] = useState<{x:string, y:number}[]>([])

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setData([])
        setError("")
        if(formData.diasfin - formData.diasini > 0){
            setData(() => {
                const nuevaLista = [];
                for (let i = 0; i < formData.diasfin - formData.diasini; i++) {
                    const num = Math.floor(Math.random() * 1000)
                    const nuevo = { x: `Day ${i}`, y: num, y2: -num };
                    nuevaLista.push(nuevo);
                }
                return nuevaLista;
            });
        } else {
            setError("Invalid range")
        }
    }

    return(
        <motion.div className="flex flex-col gap-6 items-center justify-center">
            <div>
                <h1>Recolect data from mars</h1>
            </div>
            <form className="flex md:flex-row md:w-fit w-full flex-col justify-center items-center gap-3" onSubmit={handleSubmit}>
                <input type="text" value={formData.diasini} className="p-2 md:w-fit w-full outline-neutral-500 border rounded placeholder-neutral-500" placeholder="From" name="diasini" onChange={handleChange}/>
                <h1><CgArrowRight className="md:rotate-0 rotate-90"></CgArrowRight></h1>
                <input type="text" value={formData.diasfin} className="p-2 md:w-fit w-full outline-neutral-500 border rounded placeholder-neutral-500" placeholder="To" name="diasfin" onChange={handleChange}/>
                <button type="submit" className="btn-primary md:mt-0 mt-6">Generate</button>
            </form>
            <motion.div animate={error ? "open":"closed"} variants={variants} className={error.length > 2 ? "error":"invisible"}>
                {error}<CiWarning className="w-6 h-6"/>
            </motion.div>
            <motion.div animate={data.length != 0 ? "open":"closed"} variants={variants} className={data.length != 0 ? "md:hidden w-screen md:w-full overflow-x-auto" : "w-20 overflow-hidden md:hidden"}>
                <AreaChart width={1000} height={300} data={data} className="rounded">
                    <Area dataKey="y" stroke="#f97316" fill="#f97316" fillOpacity={1}/>
                    <Area dataKey="y2" stroke="#f97316" fill="#f97316" fillOpacity={1}/>
                </AreaChart>
            </motion.div>
            <motion.div animate={data.length != 0 ? "open":"closed"} variants={variants} className="hidden p-2 rounded bg-neutral-950 md:flex w-full overflow-x-auto">
                <AreaChart width={1300} height={300} data={data} className="rounded">
                    <Area dataKey="y" stroke="#f97316" fill="#f97316" fillOpacity={1}/>
                    <Area dataKey="y2" stroke="#f97316" fill="#f97316" fillOpacity={1}/>
                </AreaChart>
            </motion.div>
        </motion.div>
    )
}