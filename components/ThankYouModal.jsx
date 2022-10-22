import { useEffect } from "react";

const ThankYouModal = ({ inputText, closeModal, setInputText }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal(false);
      setInputText("");
    }, 3000);
  }, []);

  return (
    <>
      <div onClick={() => closeModal(false)} className="overlay"></div>
      <div className="modal">
        <h2>Thank you for submitting</h2>
        <p>{inputText}</p>
      </div>
    </>
  );
};

export default ThankYouModal;
