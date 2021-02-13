import { Header } from "components";
import TestModal from "components/Modal/TestModal/TestModal";
import React, { useState } from "react";

const test = () => {
  const [PopUp, setPopUp] = useState(false);

  const CheckPopUp = () => {
    setPopUp(!PopUp);
  };
  return (
    <div>
      <button onClick={CheckPopUp}>테스트 모달 열기</button>
      {PopUp ? <TestModal toggle={CheckPopUp} /> : null}
    </div>
  );
};

export default test;
