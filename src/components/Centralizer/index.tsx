import { Container } from "./styles";
interface CentralizerProps {
  children: any;
}
export function Centralizer(props: CentralizerProps) {
  return <Container>{props.children}</Container>;
}
