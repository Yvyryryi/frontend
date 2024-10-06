import Link from 'next/link'
import { BsArrowRight } from 'react-icons/bs'

export default function NotFound() {
    return (
        <div className='flex flex-col justify-center items-center h-[630px] gap-2'>
            <h3>404</h3>
            <p>Could not find requested resource</p>
            <Link href="/" className='link text-icon'>Return Home <BsArrowRight/></Link>
        </div>
    )
}