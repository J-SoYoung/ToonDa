import React, { useRef, useState } from "react";

export const MyProfile = () => {
  const [nickname, setNickname] = useState("");
  const nameInput = useRef();

  const count = useRef(0);
  
  const handleClick = () => {
    count.current = count.current + 1;
    console.log(count.current);
  };

  const onReset = () => {
    setNickname("");
    nameInput.current.focus();
  };

  return (
    <div>
      <div>counter: {count.current}</div>
      <button onClick={handleClick}>+</button>
      <hr />
      <input
        name="nickname"
        placeholder="nickname"
        onChange={(e) => {
          setNickname(e.target.value);
        }}
        value={nickname}
        ref={nameInput}
      />
      <button onClick={onReset}>초기화</button>
      <p>값:{nickname}</p>
    </div>
  );
};
