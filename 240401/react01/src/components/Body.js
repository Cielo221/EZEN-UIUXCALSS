import React from "react";

const Body = () => {
  // const numA = 1;
  // const numB = 2;
  // const strA = "안녕";
  // const strB = "자두야";
  // const boolA = true;
  // const boolB = false;
  // const objA = {
  //   a: 1,
  //   b: 2,
  // };
  const num = 19;
  if (num % 2 === 0) {
    return <div>{num}은(는) 짝수입니다.</div>;
  } else {
    return <div>{num}은(는) 홀수입니다.</div>;
  }
};

export default Body;
