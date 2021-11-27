import React from "react";
import "./css/CreateTodoButton.css";

export const CreateTodoButton = (props) => {
  const onClickButton = () => {
    props.setOpenModal(prevState => !prevState);
  };
  return (
    <button className="CreateTodoButton" onClick={onClickButton}>
      +
    </button>
  );
};
