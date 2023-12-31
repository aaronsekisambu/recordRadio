import React from "react";
import { Modal } from "@ui-kitten/components";

const useModal = () => {
  const modalRef = React.useRef<Modal>(null);

  const show = React.useCallback(() => {
    return modalRef.current?.show();
  }, []);

  const hide = React.useCallback(() => {
    return modalRef.current?.hide();
  }, []);

  console.log("why not working",modalRef.current)

  return { modalRef, show, hide };
};

export default useModal;
