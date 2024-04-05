import React from "react";

// 컴포넌트
const Viewer = ({ number }) => {
  console.log("viewer Component update!");
  return (
    // <div>{number % 2 === 0 ? <h3>짝수입니다.</h3> : <h3>홀수입니다.</h3>}</div>
    // <div>
    //   {number === 0 ? (
    //     <h3>0 입니다.</h3>
    //   ) : number < 0 ? (
    //     <h3>음수입니다.</h3>
    //   ) : (
    //     <div>
    //       {number % 2 === 0 ? <h3>짝수입니다.</h3> : <h3>홀수입니다.</h3>}
    //     </div>
    //   )}
    // </div>
    <div>Viewer</div>
  );
};

export default Viewer;
