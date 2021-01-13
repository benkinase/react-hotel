import React from "react";
import classes from "./Modal.module.css";
import classy from "./Backdrop.module.css";

export const Backdrop = (props) => {
  return props.show ? (
    <div
      className={classy.Backdrop}
      onClick={() => props.toggleModal1(false)}
    ></div> //
  ) : null;
};
const modal = (props) => {
  return (
    <>
      <Backdrop show={props.show} toggleModal1={props.setModalToggled1} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateX(0)" : "translateX(-140vh)",
          opacity: props.show ? 1 : 0,
        }}
      >
        {props.children}
      </div>
    </>
  );
};

export default modal;
