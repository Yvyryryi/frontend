"use client"

import { useState } from "react";
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

export default function ChartExample(){
    const [data, setData] = useState(
        [
            {x: 'Tiempo A', y: Math.floor(Math.random()*1000)},
            {x: 'Tiempo B', y: Math.floor(Math.random()*1000)},
            {x: 'Tiempo C', y: Math.floor(Math.random()*1000)},
            {x: 'Tiempo D', y: Math.floor(Math.random()*1000)},
            {x: 'Tiempo E', y: Math.floor(Math.random()*1000)},
        ]
    )

    return(
        <div className="flex flex-col gap-3 items-center justify-center">
            <LineChart width={800} height={300} data={data}>
                <Line type="monotone" dataKey="y" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="x" />
                <Tooltip />
                <YAxis />
            </LineChart>
            <button className="btn-primary" onClick={()=> setData([
                {x: 'Tiempo A', y: Math.floor(Math.random()*1000)},
                {x: 'Tiempo B', y: Math.floor(Math.random()*1000)},
                {x: 'Tiempo C', y: Math.floor(Math.random()*1000)},
                {x: 'Tiempo D', y: Math.floor(Math.random()*1000)},
                {x: 'Tiempo E', y: Math.floor(Math.random()*1000)},
            ])}>Generar</button>
        </div>
    )
}