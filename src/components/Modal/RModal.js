import React from "react";
import classes from "./Modal.module.css";

export const Backdrop = (props) => {
  const { show, toggleModal } = props;

  return show ? (
    <div className={classes.Backdrop} onClick={() => toggleModal(false)}></div> //
  ) : null;
};
const modal = (props) => {
  const { setModalToggled, show } = props;

  return (
    <>
      <Backdrop show={show} toggleModal={setModalToggled} />
      <div
        className={classes.Modal}
        style={{
          transform: show ? "translateY(0)" : "translateY(100vh)",
          opacity: show ? 1 : 0,
        }}
      >
        {props.children}
      </div>
    </>
  );
};

export default modal;
