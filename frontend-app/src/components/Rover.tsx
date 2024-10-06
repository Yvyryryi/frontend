import Image from "next/image"

export default function Rover(){
    return(
        <section className="">
            <div className="flex flex-col md:flex-row gap-2">
                <Image
                    src={"/rover.png"}
                    width={1367}
                    height={1367}
                    alt="rover"
                    className="w-6/12"
                />
                <div className="flex justify-center items-center p-4 w-6/12">
                    <h3>Hearing from the rover</h3>
                </div>
            </div>
        </section>
    )
}