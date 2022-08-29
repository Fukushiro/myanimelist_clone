import { Button } from "../Button";
import { Clickable } from "../Clickable";
import * as Styles from "./styles";
export function Header() {
  return (
    <Styles.Container>
      <Styles.Logo href="">MyAnimeList</Styles.Logo>

      <div>
        <Styles.HideAdsButton>Hide Ads</Styles.HideAdsButton>
        <Button text="Login" onClick={() => {}} inverted />
        <Button text="Sign Up" onClick={() => {}} />
      </div>
    </Styles.Container>
  );
}
