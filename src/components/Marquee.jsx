import React from "react";
import Marquee from "react-fast-marquee";

export default function Marqueeribbons() {


  return (
   
      <Marquee  speed={200} autoFill={true}
        direction="right"
        className="text-[20rem] md:text-[30rem] absolute font-misc -z-0  font-bold p-12"
      >
        YASSER DALALI &nbsp;
      </Marquee>
     
  );
}
