import React from "react";
import Marquee from "react-fast-marquee";

export default function Marqueeribbons() {


  return (
   
      <Marquee  speed={200} autoFill={true}
        direction="right"
        className="text-[30rem] absolute -z-0 font-major font-bold p-12"
      >
        &nbsp;YASSER DALALI&nbsp;
      </Marquee>
     
  );
}
