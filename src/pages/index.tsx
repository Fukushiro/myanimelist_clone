import Head from "next/head";
import Image from "next/image";
import { Centralizer } from "../components/Centralizer";
import { Header } from "../components/Header";
import { malAuth } from "../wrappers/mal";
import * as Styles from "../styles/home.style";
import { MenuSearch } from "../components/MenuSearch";
import { PageTitle } from "../components/PageTitle";
export default function Home() {
  return (
    <Centralizer>
      <Styles.Container>
        <Header />
        {/* banner */}
        <Styles.ImageContainer>
          <Image
            src={"/assets/banner2.png"}
            layout="fill"
            objectFit="contain"
          />
        </Styles.ImageContainer>
        {/* page */}
        <MenuSearch />
        <PageTitle title="Welcome to MyAnimeList.net!" />
      </Styles.Container>
    </Centralizer>
  );
}
