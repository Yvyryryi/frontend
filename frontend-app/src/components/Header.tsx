"use client"

import Link from "next/link";
import Logo from "./Logo";
import { CgMenu } from "react-icons/cg";
import { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { CgClose } from "react-icons/cg";

export default function Header(){
    const [isOpen, setOpen] = useState(false)

    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "100%" },
    }

    return(
        <header className="fixed top-0 backdrop-blur-md z-50 w-screen">
            <div className="container">
                <div className="flex justify-between py-4 items-center">
                    <Logo></Logo>
                    <ul className="hidden md:flex flex-row gap-10 text-neutral-400">
                        <li>
                            <Link href={"/about"}>About</Link>
                        </li>
                        <li>
                        <Link href={"/project"}>Project</Link>
                        </li>
                    </ul>
                    <button className="md:hidden rounded" onClick={()=>setOpen(!isOpen)}><CgMenu className="w-9 h-9"></CgMenu></button>
                </div>
            </div>
            <motion.nav animate={isOpen ? "open":"closed"} initial="closed" variants={variants} transition={{x: { bounce: 0 }, opacity: { duration: 0.2 }}} className={"fixed top-0 right-0 w-screen h-screen md:hidden bg-orange-500"}>
                <div className="container">
                    <div className="flex justify-between py-4 items-center">
                        <div>
                            <Logo></Logo>
                        </div>
                        <button className="md:hidden p-1 bg-orange-500 rounded" onClick={()=>setOpen(!isOpen)}><CgClose className="w-8 h-8"/></button>
                    </div>
                    <div className="flex flex-col gap-3 text-neutral-white justify-center items-center">
                    <Link href={"/"} onClick={() => setOpen(!isOpen)} className="inline-flex items-center justify-between font-bold text-xl border-white border bg-white/15 rounded w-full p-2">Home<BsArrowRight/></Link>
                        <Link href={"/about"} onClick={() => setOpen(!isOpen)} className="inline-flex items-center justify-between font-bold text-xl border-white border bg-white/15 rounded w-full p-2">Project<BsArrowRight/></Link>
                        <Link href={"/project"} onClick={() => setOpen(!isOpen)} className="inline-flex items-center justify-between font-bold text-xl border-white border bg-white/15 rounded w-full p-2">About<BsArrowRight/></Link>
                        <Link href={"/"} onClick={() => setOpen(!isOpen)} className="inline-flex items-center justify-between font-bold text-xl border-white border bg-white/15 rounded w-full p-2">Contact<BsArrowRight/></Link>
                        <a className="text-icon link2" target="_blank" href={"https://www.spaceappschallenge.org/nasa-space-apps-2024/find-a-team/yvyryryi/"}>
                            Made by Yvyryrýi <BsArrowRight/>
                        </a>
                    </div>
                </div>
            </motion.nav>
        </header>
    )
}