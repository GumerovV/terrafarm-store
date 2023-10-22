import React from "react";
import EivaS1 from '../../assets/EivaS1.jpg';
import EivaS2 from '../../assets/EivaS2.jpg';
import EivaS3 from '../../assets/EivaS3.jpg';
import S2 from '../../assets/S2.JPG';
import S3 from '../../assets/S3.JPG';
import { Carousel } from 'flowbite-react';

function CarouselDefualt() {
    return (
      <Carousel slide={false}>
      <img
        alt="..."
        src={EivaS1}
      />
      <img
        alt="..."
        src={EivaS2}
      />
      <img
        alt="..."
        src={EivaS3}
      />
      <img
        alt="..."
        src={S2}
      />
      <img
        alt="..."
        src={S3}
      />
    </Carousel>
    );
}

export default CarouselDefualt;