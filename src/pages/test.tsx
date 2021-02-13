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
      <Header />
      <button onClick={CheckPopUp} style={{ marginTop: 100 }}>
        테스트 모달 열기
      </button>
      {PopUp && <TestModal toggle={CheckPopUp} />}
    </div>
  );
};

export default test;
