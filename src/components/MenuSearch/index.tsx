import { ChangeEvent, useState } from "react";
import ReactSelect from "react-select";
import { Clickable } from "../Clickable";
import { ComboBox } from "../ComboBox";
import * as Styles from "./styles";
import { AiOutlineSearch } from "react-icons/ai";
export function MenuSearch() {
  // useState
  const [searchedContent, setSearchedContent] = useState<string>("");
  const [selectedOption, setSelectedOptions] = useState<string>("");

  return (
    <Styles.Container>
      <Styles.ListOfCategories>
        {/* anime */}
        <Styles.ListOfCategoriesItens>
          <a href="">Anime</a>
          <Styles.ListOfOptions>
            <Styles.ListOfOptionsItens>
              <Clickable
                onClick={() => {
                  console.log("Search");
                }}
              >
                Anime Search
              </Clickable>
            </Styles.ListOfOptionsItens>
            <Styles.ListOfOptionsItens>
              <Clickable onClick={() => {}}>Top Anime </Clickable>
            </Styles.ListOfOptionsItens>
            <Styles.ListOfOptionsItens>
              <Clickable onClick={() => {}}> Seasonal anime</Clickable>
            </Styles.ListOfOptionsItens>
          </Styles.ListOfOptions>
        </Styles.ListOfCategoriesItens>
        {/* manga */}
        <Styles.ListOfCategoriesItens>
          <a href="">Manga</a>
          <Styles.ListOfOptions>
            <Styles.ListOfOptionsItens>Manga search</Styles.ListOfOptionsItens>
            <Styles.ListOfOptionsItens>Top manga</Styles.ListOfOptionsItens>
          </Styles.ListOfOptions>
        </Styles.ListOfCategoriesItens>

        {/* manga */}
        <Styles.ListOfCategoriesItens>
          <a href="">Community</a>
          <Styles.ListOfOptions>
            <Styles.ListOfOptionsItens>Manga search</Styles.ListOfOptionsItens>
            <Styles.ListOfOptionsItens>Top manga</Styles.ListOfOptionsItens>
          </Styles.ListOfOptions>
        </Styles.ListOfCategoriesItens>
      </Styles.ListOfCategories>

      {/* div na direita */}

      <Styles.RightContainer>
        <ComboBox
          placeholder="Teste"
          value={selectedOption}
          setValue={setSelectedOptions}
          options={[
            { label: "all", value: "all" },
            { label: "a", value: "d" },
          ]}
        />

        <input
          type="text"
          placeholder="Search Anime, Manga, and more..."
          value={searchedContent}
          onChange={(event: ChangeEvent<HTMLInputElement>) => {
            setSearchedContent(event.target.value);
          }}
        />

        <Styles.ClickableIcon>
          <Clickable onClick={() => {}}>
            <AiOutlineSearch fontSize={16} />
          </Clickable>
        </Styles.ClickableIcon>
      </Styles.RightContainer>
    </Styles.Container>
  );
}
