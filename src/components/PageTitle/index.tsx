import * as Styles from "./styles";

interface PageTitleProps {
  title: string;
}
export function PageTitle(props: PageTitleProps) {
  return (
    <Styles.Container>
      <h1>{props.title}</h1>
    </Styles.Container>
  );
}
