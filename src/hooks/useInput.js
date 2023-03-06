import { useState } from "react";

export const useInput = () => {
  const [value, setValue] = useState("");
  const onChangeHandler = (e) => {
    // if (e.target.value === null) {
    //   setValue("");
    //   return;
    // 초기화는 어떻게 할까?
    // }
    setValue(e.target.value);
  };
  return [value, onChangeHandler];
};
