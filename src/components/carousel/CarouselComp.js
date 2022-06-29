import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import PropTypes from 'prop-types';
import { responsive } from './carousel_config';

export default function CarouselComp({ children }) {
  return (
    <Carousel
      ssr
      partialVisibile
      itemClass="image-item"
      responsive={ responsive }
    >
      {children}
    </Carousel>
  );
}

CarouselComp.propTypes = {
  children: PropTypes.node,
}.isRequired;
