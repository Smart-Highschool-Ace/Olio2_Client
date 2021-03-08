import React from "react";
import Template from "../Template/Template";

interface TestModalProps {
  toggle: any;
}

const TestModal: React.FC<TestModalProps> = ({ toggle }) => {
  return (
    <Template toggle={toggle} width={500} height={500}>
      <div>모달내용</div>
    </Template>
  );
};

export default TestModal;
