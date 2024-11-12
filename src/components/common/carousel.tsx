import React from "react";
import { type EmblaOptionsType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import "./css/embla.css";

type PropType = {
  slides: any[];
  options?: EmblaOptionsType;
};

const Carousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({
      delay: 2500,
      jump: false,
    }),
  ]);

  return (
    <section className='embla py-2'>
      <div className='embla__viewport' ref={emblaRef}>
        <div className='embla__container'>
          {slides.map((index) => (
            <div
              className='embla__slide flex items-center justify-center'
              key={index}
            >
              <div className='embla__slide__number text-center'>{index}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;
