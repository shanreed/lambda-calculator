import React from "react";

const OperatorButton = (props) => {
  
  return (
    <>
    <button className = "button operators">{props.buttonOperator.char}</button>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default OperatorButton;