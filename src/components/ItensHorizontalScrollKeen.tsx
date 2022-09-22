import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { useState } from "react";
import Image from "next/image";

export interface ScroolItens {}

interface ItensHorizontalScrollKeenProps {}

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
  const [itens, setIten] = useState<{ imageUrl: string }[]>([]);
  return (
    <div className="w-full">
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide w-40 h-56 bg-red-500">
          <Image
            src={
              "https://cdn.myanimelist.net/r/160x220/images/anime/1502/124354.webp?s=c10a8acbd5a0f67e106d36fc766464a5"
            }
            width={160}
            height={224}
          />
        </div>
        <div className="keen-slider__slide">
          <Image
            src={
              "https://cdn.myanimelist.net/r/160x220/images/anime/1530/120110.webp?s=4aaac682a2a4727af927349fa2eb9260"
            }
            width={160}
            height={220}
          />
        </div>
        <div className="keen-slider__slide">
          <Image
            src={
              "https://cdn.myanimelist.net/r/160x220/images/anime/1045/123711.webp?s=b80cf606d52693fadd8a13b0b05eaf49"
            }
            width={160}
            height={220}
          />
        </div>
        <div className="keen-slider__slide">
          {" "}
          <Image
            src={
              "https://cdn.myanimelist.net/r/160x220/images/anime/1530/120110.webp?s=4aaac682a2a4727af927349fa2eb9260"
            }
            width={160}
            height={220}
          />
        </div>
        <div className="keen-slider__slide">
          <Image
            src={
              "https://cdn.myanimelist.net/r/160x220/images/anime/1530/120110.webp?s=4aaac682a2a4727af927349fa2eb9260"
            }
            width={160}
            height={220}
          />
        </div>
        <div className="keen-slider__slide">
          <Image
            src={
              "https://cdn.myanimelist.net/r/160x220/images/anime/1530/120110.webp?s=4aaac682a2a4727af927349fa2eb9260"
            }
            width={160}
            height={220}
          />
        </div>
      </div>
    </div>
  );
}
