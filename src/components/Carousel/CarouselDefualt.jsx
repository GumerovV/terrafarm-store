import React from "react";
import { Carousel } from 'flowbite-react';

function CarouselDefualt({images = []}) {
    return (
      <Carousel slide={false}>
        {
          images.map((image, index) => (
            <img
            alt=""
            src={image}
            key={index}
          />
          ))
        }
    </Carousel>
    );
}

export default CarouselDefualt;