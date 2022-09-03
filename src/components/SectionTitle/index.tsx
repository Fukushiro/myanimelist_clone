import * as Styles from "./styles";
interface SectionTitleProps {
  title: string;
  titleUrl: string;
  linkText: string;
  linkUrl: string;
}
export function SectionTitle(props: SectionTitleProps) {
  return (
    <Styles.Container>
      <Styles.Title>
        <a href={props.titleUrl}>{props.title}</a>
      </Styles.Title>

      <Styles.Link>
        <a href={props.linkUrl}>{props.linkText}</a>
      </Styles.Link>
    </Styles.Container>
  );
}
