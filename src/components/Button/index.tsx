import * as Styles from "./styles";
interface ButtonProps {
  text: string;
  onClick: () => void;
  inverted?: boolean;
}
export function Button(props: ButtonProps) {
  return (
    <Styles.ButtonStyle onClick={props.onClick} inverted={props.inverted}>
      {props.text}
    </Styles.ButtonStyle>
  );
}
