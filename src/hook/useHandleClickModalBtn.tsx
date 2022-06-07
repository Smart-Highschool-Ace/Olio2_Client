import { useCallback } from "react";
import findModal from "lib/findModal";
import { useModalContext } from "../Utils/Contexts/ModalContext";
import { ModalName, ModalStateType } from "../Utils/GlobalTypes";

interface Props {
  modalName: ModalName;
  state?: ModalStateType;
}

const useHandleClickModalBtn: (p: Props) => () => void = p => {
  const { addModal, removeModal } = useModalContext();
  const { modalName, state } = p;

  const Modal = findModal(modalName, state);

  return useCallback(() => {
    removeModal();

    addModal({
      title: "",
      element: Modal,
      showOnlyBody: true,
      width: "1150px",
      height: "697px",
    });
  }, [addModal, removeModal, Modal]);
};

export default useHandleClickModalBtn;
