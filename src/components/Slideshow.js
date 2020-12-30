import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import img1 from '../img/slide/img1.jpg'
import img2 from '../img/slide/img2.jpg'

const slideImages = [
  img1,
  img2
];

const Slideshow = () => {
    return (
      <div className="slide-content">
        <Slide easing="ease">
          <div className="slide-1">
            <div className="slide-tittle-1">
              <h1>PROTECCIÓN CATÓDICA</h1>
              <p>Expertos en control de corrosión</p>
            </div>
            <img src={slideImages[0]} alt="Imagen 1" className="slideimg"/>
          </div>
          <div className="slide-2">
            <div className="slide-tittle-2">
              <h1>PERFORACIÓ HORIZONTAL DIRIGIDA</h1>
              <p>Herramientas con tecnología de punta</p>
            </div>
            <img src={slideImages[1]} alt="Imagen 2" className="slideimg"/>
          </div>
        </Slide>
      </div>
    )
};

export default Slideshow;