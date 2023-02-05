import { useState } from "react";
import { emailRegex } from "../common/regEx";

export const useInput = () => {
  const [value, setValue] = useState("");
  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };
  return [value, onChangeHandler];
};
