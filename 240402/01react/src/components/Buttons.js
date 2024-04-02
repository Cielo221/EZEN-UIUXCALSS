import React from "react";

export const Buttons = () => {
  const handleOnclick = (e) => {
    console.log(e.target.name);
  };
  return (
    <div>
      <button name="A버튼" onClick={handleOnclick}>
        A 버튼
      </button>
      <button name="B버튼" onClick={handleOnclick}>
        B 버튼
      </button>
    </div>
  );
};
// rafce

export default Buttons;
