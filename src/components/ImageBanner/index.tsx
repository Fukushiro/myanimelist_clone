import Image from "next/image";
import { ImageContainer } from "./styles";

export function ImageBanner() {
  return (
    <ImageContainer>
      <Image
        src={
          "https://cdn.myanimelist.net/images/event/BR_20220830_PDA/PDA_PC_top.jpg"
        }
        layout="fill"
        objectFit="contain"
        alt="Anime logo"
      />
    </ImageContainer>
  );
}
