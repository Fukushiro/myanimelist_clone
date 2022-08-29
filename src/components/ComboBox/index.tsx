import { ChangeEvent } from "react";
import * as Styles from "./styles";

interface OptionData {
  value: string;
  label: string;
}

interface ComboBoxProps {
  placeholder: string;
  value: string;
  setValue: (newVal: string) => void;
  options: OptionData[];
}

export function ComboBox(props: ComboBoxProps) {
  return (
    <Styles.Container
      value={props.value}
      onChange={(event: ChangeEvent<HTMLSelectElement>) => {
        console.log(event.target.value);

        props.setValue(event.target.value);
      }}
    >
      {props.options.map((value) => {
        return (
          <option key={value.value} value={value.value}>
            {value.label}
          </option>
        );
      })}
    </Styles.Container>
  );
}
