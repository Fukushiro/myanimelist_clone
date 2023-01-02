import Head from "next/head";
import Image from "next/image";
import { Centralizer } from "../components/Centralizer";
import { Header } from "../components/Header";
import { malAuth } from "../wrappers/mal";
import * as Styles from "../styles/home.style";
import { MenuSearch } from "../components/MenuSearch";
import { PageTitle } from "../components/PageTitle";
import { MalJapan } from "../components/MalJapan";
import { ListTop } from "../components/ListTop";
import { ItensHorizontalScroll } from "../components/ItensHorizontalScroll";
import { SectionTitle } from "../components/SectionTitle";
import { ItensHorizontalScrollKeen } from "../components/ItensHorizontalScrollKeen";
import { ImageBanner } from "../components/ImageBanner";
export default function Home() {
  return (
    <Centralizer>
      <Styles.Container>
        <Header />
        {/* Banner with anime image */}
        <ImageBanner />
        {/* page */}
        <MenuSearch />
        <PageTitle title="Welcome to MyAnimeList.net!" />
        {/* content */}
        <Styles.ContentContainer>
          {/* left content */}
          <Styles.ContentContainerLeft>
            <Styles.ContentContainerLeftContent>
              {/* List of MALxJapan content */}
              <MalJapan />
              {/* scroll with seasonal anime */}
              <SectionTitle
                title="Summer 2022 Anime"
                titleUrl=""
                linkText="View More"
                linkUrl=""
              />
              <ItensHorizontalScrollKeen
                itens={[
                  {
                    imageUrl:
                      "https://cdn.myanimelist.net/r/160x220/images/anime/1502/124354.webp?s=c10a8acbd5a0f67e106d36fc766464a5",
                  },
                  {
                    imageUrl:
                      "https://cdn.myanimelist.net/r/160x220/images/anime/1530/120110.webp?s=4aaac682a2a4727af927349fa2eb9260",
                  },
                  {
                    imageUrl:
                      "https://cdn.myanimelist.net/r/160x220/images/anime/1045/123711.webp?s=b80cf606d52693fadd8a13b0b05eaf49",
                  },
                  {
                    imageUrl:
                      "https://cdn.myanimelist.net/r/160x220/images/anime/1530/120110.webp?s=4aaac682a2a4727af927349fa2eb9260",
                  },
                  {
                    imageUrl:
                      "https://cdn.myanimelist.net/r/160x220/images/anime/1530/120110.webp?s=4aaac682a2a4727af927349fa2eb9260",
                  },
                ]}
              />
              {/* <SectionTitle
                title="Summer 2022 Anime"
                titleUrl=""
                linkText="View More"
                linkUrl=""
              />
              <ItensHorizontalScroll /> */}
            </Styles.ContentContainerLeftContent>
          </Styles.ContentContainerLeft>
          {/* right content */}
          <Styles.ContentContainerRight>
            <ListTop
              title="Top Airing Anime"
              moreLink=""
              itens={[
                {
                  episodes: 26,
                  members: 36000,
                  position: 1,
                  score: 8,
                  title: "Kingdom 4th Season",
                  imageUrl:
                    "https://cdn.myanimelist.net/r/50x70/images/anime/1566/122794.webp?s=99612de5bceb32a1784e9e4801a29ea9",
                },
                {
                  episodes: 26,
                  members: 36000,
                  position: 2,
                  score: 8,
                  title: "Made in Abyss: Retsujitsu no Ougonkyou",
                  imageUrl:
                    "https://cdn.myanimelist.net/r/50x70/images/anime/1864/122519.webp?s=9b9ae44544ffba2a8e112c0b44b0b67d",
                },
                {
                  episodes: 26,
                  members: 36000,
                  position: 3,
                  score: 8,
                  title: "Kingdom",
                  imageUrl:
                    "https://cdn.myanimelist.net/r/50x70/images/anime/6/73245.webp?s=c8ce61af081779acd201220cc1eb540b",
                },
              ]}
            />
          </Styles.ContentContainerRight>
        </Styles.ContentContainer>
      </Styles.Container>
    </Centralizer>
  );
}
