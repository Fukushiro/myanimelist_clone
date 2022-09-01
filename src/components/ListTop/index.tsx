import Image from "next/image";
import * as Styles from "./styles";

interface ItemData {
  title: string;
  members: number;
  episodes: number;
  score: number;
  position: number;
  imageUrl: string;
}
interface ListTopProps {
  title: string;
  moreLink: string;
  itens: ItemData[];
}

export function ListTop(props: ListTopProps) {
  return (
    <Styles.Container>
      <header>
        <h2>{props.title}</h2>
        <a href="">More</a>
      </header>
      <Styles.AnimeList>
        {props.itens.map((value, index) => {
          return (
            <Styles.AnimeCard key={index}>
              <Styles.AnimeCardFirst>{value.position}</Styles.AnimeCardFirst>
              <Styles.AnimeCardSecond>
                <Image src={value.imageUrl} width={50} height={70} />
              </Styles.AnimeCardSecond>
              <Styles.AnimeCardThird>
                <h3>
                  <a href="">{value.title}</a>
                </h3>
                <span>
                  TV, {value.episodes} eps, scored {value.score} {value.members}{" "}
                  members
                </span>
              </Styles.AnimeCardThird>

              <Styles.AnimeCardForth>
                <a href="">add</a>
              </Styles.AnimeCardForth>
            </Styles.AnimeCard>
          );
        })}
      </Styles.AnimeList>
    </Styles.Container>
  );
}
