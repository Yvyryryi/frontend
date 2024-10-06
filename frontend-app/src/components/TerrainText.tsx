import Image from "next/image"

export default function TerrainText({children,}: Readonly<{children: React.ReactNode;}>){
    return(
        <section className="">
            <div className="w-full">
                <div className="h-full -top-10 w-full right-0">
                    <h3>{children}</h3>
                </div>
                <div className="relative">
                    <Image
                        src={"/terrain.png"}
                        width={2160}
                        height={415}
                        alt="terrain"
                        className="top-0 right-0 w-full shadow-inner z-30 rounded-2xl"
                    />
                </div>
            </div>
        </section>
    )
}