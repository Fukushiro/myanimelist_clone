import * as Styles from "./styles";
interface ClickableProps {
  children: any;
  onClick: () => void;
}

export function Clickable(props: ClickableProps) {
  return (
    <Styles.Container onClick={props.onClick}>
      {props.children}
    </Styles.Container>
  );
}
