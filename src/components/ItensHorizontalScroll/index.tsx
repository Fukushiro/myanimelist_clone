import Image from "next/image";
import { MutableRefObject, useRef } from "react";
import { Clickable } from "../Clickable";
import * as Styles from "./styles";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
export function ItensHorizontalScroll() {
  // refs
  const containerRef = useRef(null);
  // functions
  function scroll(ref: MutableRefObject<HTMLDivElement>, scrollOffset: number) {
    ref.current.scrollLeft += scrollOffset;
  }

  return (
    <Styles.OuterContainer>
      <Clickable
        onClick={() => {
          scroll(containerRef, -160);
        }}
      >
        <Styles.PreviousDiv>
          <AiOutlineArrowLeft color="#e8e6e3" fontSize={20} />
        </Styles.PreviousDiv>
      </Clickable>
      <Styles.Container ref={containerRef}>
        <Styles.ContainerImages numberOfImages={5}>
          {/* <Clickable onClick={() => {}}>dasds</Clickable> */}

          <Styles.ImageDiv>
            <Image
              src={
                "https://cdn.myanimelist.net/r/160x220/images/anime/1502/124354.webp?s=c10a8acbd5a0f67e106d36fc766464a5"
              }
              width={160}
              height={220}
            />
          </Styles.ImageDiv>
          <Styles.ImageDiv>
            <Image
              src={
                "https://cdn.myanimelist.net/r/160x220/images/anime/1530/120110.webp?s=4aaac682a2a4727af927349fa2eb9260"
              }
              width={160}
              height={220}
            />
          </Styles.ImageDiv>
          <Styles.ImageDiv>
            <Image
              src={
                "https://cdn.myanimelist.net/r/160x220/images/anime/1045/123711.webp?s=b80cf606d52693fadd8a13b0b05eaf49"
              }
              width={160}
              height={220}
            />
          </Styles.ImageDiv>
          <Styles.ImageDiv>
            <Image
              src={
                "https://cdn.myanimelist.net/r/160x220/images/anime/1070/124592.webp?s=3be48a9907e92057bd32625514755671"
              }
              width={160}
              height={220}
              style={{ marginRight: 20 }}
            />
          </Styles.ImageDiv>
          <Styles.ImageDiv>
            <Image
              src={
                "https://cdn.myanimelist.net/r/160x220/images/anime/1010/124180.webp?s=b1470bdb520a5420f886b80e1dcd0696"
              }
              width={160}
              height={220}
              style={{ marginRight: 20 }}
            />
          </Styles.ImageDiv>
        </Styles.ContainerImages>
      </Styles.Container>
      <Clickable
        onClick={() => {
          scroll(containerRef, 160);
        }}
      >
        <Styles.NextDiv>
          <AiOutlineArrowRight color="#e8e6e3" fontSize={20} />
        </Styles.NextDiv>
      </Clickable>
    </Styles.OuterContainer>
  );
}
