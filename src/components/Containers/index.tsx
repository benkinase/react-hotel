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

type formWrapperProps = {
  radius?: string;
};
export const FormWrapper = styled.main<formWrapperProps>`
  width: 80%;
  margin: 5rem auto;

  .control {
    margin: auto;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    & span {
      margin-top: -25px;
    }
  }
  .main {
    border: 1px solid var(--gray-1);
    border-top: none;
    padding: 20px 0;
    margin: auto;
    border-radius: ${(props) => props.radius};
    span {
      color: var(--nice-red);
      padding: 20px 10px;
      letter-spacing: var(--mainSpacing);
    }
  }
  .button__tabs {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    button {
      font-size: 12px;
      width: 100%;
      margin-top: 10;
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
    top: 12%;
    left: 10%;
    z-index: 200;
    width: 80%;
    position: fixed;
    padding: 5px;
    box-shadow: var(--lightShadow);
    background-color: var(--gray-1);
    transition: all 0.3s 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67);
    transform: translateY(-40rem);

    @media screen and (min-width: 700px) {
      width: 60%;
    }

    @media screen and (min-width: 1000px) {
      width: 25%;
    }
  }
  label {
    font-weight: bold;
    padding-bottom: 5px;
  }
  .totals {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-left: -20px;
    padding-bottom: 20px;
  }
  .fa-times {
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
