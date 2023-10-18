import React from "react";
import img from '../../assets/station-eywa.jpg';
import { Carousel } from 'flowbite-react';

function CarouselDefualt() {
    return (
      <Carousel slide={false}>
      <img
        alt="..."
        src={img}
      />
      <img
        alt="..."
        src={img}
      />
      <img
        alt="..."
        src={img}
      />
      <img
        alt="..."
        src={img}
      />
      <img
        alt="..."
        src={img}
      />
    </Carousel>
    );
}

export default CarouselDefualt;