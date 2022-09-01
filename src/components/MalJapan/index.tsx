import Image from "next/image";
import * as Styles from "./styles";
export function MalJapan() {
  return (
    <Styles.Container>
      <Styles.TitleContainer>
        <h2>MalxJapan -More than just anime-</h2>

        <a target="_blank" href="https://mxj.myanimelist.net">
          Visit MALxJapan
        </a>
      </Styles.TitleContainer>
      <Styles.ItensContainer>
        <Styles.ImageContainer>
          <Image src={"/assets/otaku_judge.png"} width={235} height={146} />
          <a href="">
            Calling all otaku! Submit your otaku quiz questions to new quiz app
            Otaku Judge
          </a>
        </Styles.ImageContainer>
        <Styles.ImageContainer>
          <Image src={"/assets/otaku_judge.png"} width={235} height={146} />
          <a href="">
            Calling all otaku! Submit your otaku quiz questions to new quiz app
            Otaku Judge
          </a>
        </Styles.ImageContainer>
        <Styles.ImageContainer>
          <Image src={"/assets/otaku_judge.png"} width={235} height={146} />
          <a href="">
            Calling all otaku! Submit your otaku quiz questions to new quiz app
            Otaku Judge
          </a>
        </Styles.ImageContainer>
      </Styles.ItensContainer>
    </Styles.Container>
  );
}
