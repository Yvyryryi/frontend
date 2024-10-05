import Image from "next/image";

export default function Hero(){
    return(
        <section>
            <div className="flex flex-row">
                <div>
                    <Image
                        width={1080}
                        height={1080}
                        src={"/mars.png"}
                        alt="mars"
                    ></Image>
                </div>
            </div>
        </section>
    )
}