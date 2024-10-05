import ChartExample from "@/components/ChartExample";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center p-5 gap-5">
        <h1 className="">Mars Seismic Detection</h1>
        <a className="text-icon" target="_blank" href={"https://www.spaceappschallenge.org/nasa-space-apps-2024/find-a-team/yvyryryi/"}>
          Project by Yvyryrýi <BsArrowRight/>
        </a>
        <ChartExample></ChartExample>
      </div>
    </>
  );
}
