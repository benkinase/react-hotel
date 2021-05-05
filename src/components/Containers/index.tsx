import styled from "styled-components";
import React, { FC } from "react";

export const CustomContainer = styled.div`
  min-height: 100%;
`;
export const NotFoundContainer = styled(CustomContainer)`
  .text-danger {
    color: red;
    padding-right: 5px;
  }
`;
export const Wrapper = styled.div``;

export const AppWrapper = styled(Wrapper)`
  min-height: 100%;
  position: relative;
`;
export const BackDrop = styled(Wrapper)`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  background-color: transparent; //rgba(255, 255, 255, 0.5)
`;
export const FormWrapper = styled.main`
  width: 80%;
  margin: 5rem auto;

  box-shadow: var(--lightShadow);
  .main {
    background-color: var(--formBgColor);
    padding: 20px 0;
    margin: auto;
    border-radius: 5px;
    span {
      color: var(--nice-red);
      padding: 20px 10px;
      letter-spacing: var(--mainSpacing);
    }
  }
  h3 {
    text-align: center;
    padding-top: 10px;
    letter-spacing: var(--mainSpacing);
  }
  @media screen and (min-width: 700px) {
    width: 60%;
  }

  @media screen and (min-width: 1000px) {
    width: 40%;
  }
`;
export const StyledBooking = styled(Wrapper)`
  .reserve {
    width: 80%;
    position: fixed;
    padding: 5px;
    background-color: var(--formBgColor);
    transition: all 0.3s 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67);
    transform: translateY(-40rem);
    top: 12%;
    left: 10%;
    z-index: 200;

    @media screen and (min-width: 700px) {
      width: 60%;
    }

    @media screen and (min-width: 1000px) {
      width: 25%;
    }
  }
  .fa-times {
    //color: var(--mainGrey);
    position: absolute;
    top: 0;
    right: 0;
    padding: 5px 5px 5px 10px;

    cursor: pointer;
    font-size: 20px;
    transition: var(--mainTransition);
    &:hover {
      color: var(--nice-red);
    }
  }
  .show {
    transform: translateY(0);
  }

  p {
    //color: #dfdfdf;
    padding: 5px;
    margin-top: 15px;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
  }

  .date-picking {
    margin: 10px 0;
    transition: var(--mainTransition);
    display: grid;
    grid-template-columns: repeat(1fr);
    place-items: center;
    row-gap: 10px;

    .check-in,
    .checkout {
      display: flex;
      flex-direction: column;
      label {
        font-weight: bold;
      }
    }
    .picker {
      width: 100%;
      padding: 5px;
    }
  }

  .error-msg {
    text-align: center;
    padding: 5px 0px;
    color: var(--nice-red);
    font-size: 14px;
  }
`;

type PropsBooking = {
  children: React.ReactNode;
};
export const Booking: FC<PropsBooking> = ({ children }) => {
  return <StyledBooking>{children}</StyledBooking>;
};
