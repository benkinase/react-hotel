import React from "react";
import classes from "./Modal.module.css";

export const Backdrop = (props) => {
  const { show, toggleModal1 } = props;

  return show ? (
    <div className={classes.Backdrop} onClick={() => toggleModal1(false)}></div>
  ) : null;
};

const modal = (props) => {
  const { setModalToggled1, show } = props;
  return (
    <>
      <Backdrop show={show} toggleModal1={setModalToggled1} />
      <div
        className={classes.Modal}
        style={{
          transform: show ? "translateX(0)" : "translateX(-140vh)",
          opacity: show ? 1 : 0,
        }}
      >
        {props.children}
      </div>
    </>
  );
};

export default modal;
