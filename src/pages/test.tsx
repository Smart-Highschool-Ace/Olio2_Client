import { Header } from "Components";
import TestModal from "Components/Modal/TestModal/TestModal";
import React, { useState } from "react";

const Test: React.FC = () => {
  const [PopUp, setPopUp] = useState(false);

  const CheckPopUp = () => {
    setPopUp(!PopUp);
  };
  return (
    <div>
      <Header />
      <button type="button" onClick={CheckPopUp} style={{ marginTop: 100 }}>
        테스트 모달 열기
      </button>
      {PopUp && <TestModal toggle={CheckPopUp} />}
    </div>
  );
};

export default Test;
