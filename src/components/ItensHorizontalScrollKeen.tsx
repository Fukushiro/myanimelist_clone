import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { useState } from "react";
import Image from "next/image";

interface scrollIten {
  imageUrl: string;
}

interface ItensHorizontalScrollKeenProps {
  itens: scrollIten[];
}

export function ItensHorizontalScrollKeen(
  props: ItensHorizontalScrollKeenProps
) {
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      slideChanged: () => {},
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    []
  );

  return (
    <div className="w-full">
      <div ref={sliderRef} className="keen-slider">
        {props.itens.length > 0
          ? props.itens.map((item, index) => (
              <div className="keen-slider__slide w-40 h-56" key={index}>
                <Image
                  src={item.imageUrl}
                  width={160}
                  height={224}
                  alt="imagem anime"
                />
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
