import styled from "styled-components";

/**Button */
// style
const smallOne = {
  color: "var(--mainWhite)",
  width: "120px",
  background: "var(--lightRed)",
};

const smallTwo = { width: "75px" };
const smallThree = { width: "40px" };

const Bentton = styled.button`

  cursor: pointer;
  color: var(--mainYellow);
  background: transparent;
  font-size: 1rem;
  border-radius: 3px;
  margin: 1rem 0 0 1.2rem;
  border: 1px solid palevioletred;
  padding: 0.15em 0.8em;
  transition: all 0.5s ease-in-out;

  ${(props) => {
    switch (props.size) {
      case "one":
        return smallOne;
      case "two":
        return smallTwo;
      case "three":
        return smallThree;
      default:
        return "width: 30px, color:coral";
    }
  }};
  }

  &:hover {
    background-color: transparent;
    color: palevioletred;
    border: 0.5px solid var(--mainYellow);
  }
  &:focus {
    outline: none;
  }
`;

const NiceButton = styled.button`
  width: ${(props) => (props.cart ? "100px" : "150px")};
  cursor: pointer;
  color: var(--mainYellow);
  background: transparent;
  font-size: 1rem;
  border-radius: 3px;
  border: 1px solid palevioletred;
  padding: 0.15em 0.8em;
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: transparent;
    color: ${(props) => (props.cart ? "var(--mainWhite)" : "var(--mainDark)")};
    border: 0.5px solid var(--mainYellow);
  }
  &:focus {
    outline: none;
  }
`;

/** cart button */
const CartButton = styled.button`
  cursor: pointer;
  color: var(--mainYellow);
  background: transparent;
  font-size: 1rem;
  border-radius: 3px;
  margin: 1rem 0 0 1.2rem;
  border: 1px solid palevioletred;
  padding: 0.15em 0.8em;
  transition: all 0.5s ease-in-out;

  ${(props) => {
    switch (props.size) {
      case "large":
        return "width: 100px";
      case "medium":
        return "width: 95px";
      default:
        return "width: 70px";
    }
  }};
  }

  &:hover {
    background-color: transparent;
    color: palevioletred;
    border: 0.5px solid var(--mainYellow);
  }
  &:focus {
    outline: none;
  }
`;

/**Nav container*/
const Gbenimanav = styled.nav`
  opacity: 0.9;
  .nav-link {
    color: var(--mainWhite);
    font-size: 1.2rem;
    text-transform: uppercase;
  }
`;

/**Logo */
const BrandLogo = styled.img`
  width: 2rem;
  &:hover,
  &:focus {
    animation: bellshake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    backface-visibility: hidden;
    transform-origin: top right;
    color: var(--mainWhite);
  }
`;

/**Product wrapper */
const ProductWrapper = styled.div`
  transition: all 1s linear;

  .card {
    border-color: transparent;
    transition: all 1s linear;
    background: var(--mainWhite);
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
  }
  &:hover {
    .card {
      border: 0.005rem solid rgba(0, 0, 0, 0.2);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }

  .img-container {
    position: relative;
    overflow: hidden;
  }

  .img-container:hover .card-img-top {
    transform: scale(1.2);
    transition: all 1s linear;
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    right: -100%;
    transition: all 0.3s linear;
  }

  .img-container:hover .cart-btn {
    right: 2%;
    bottom: 2%;
  }
`;

const CustomContainer = styled.div`
  min-height: 100vh;
  .text-danger {
    color: red;
  }
`;
const CartTotalsContainer = styled.div`
  background: var(--lightBlue);
  position: absolute;
  width: 250px;
  height: 250px;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;

const OkFooter = styled.div`
  margin: 0 auto;
  bottom: 0%;
  width: 100%;
  background: var(--Blue);

  a {
    text-decoration: none;
  }
  .footer-copyright {
    color: var(--mainWhite);
  }
  .fab {
    font-size: 1.2rem;
    color: var(--mainWhite);
  }
`;

export {
  NiceButton,
  Gbenimanav,
  BrandLogo,
  CartButton,
  ProductWrapper,
  CustomContainer,
  CartTotalsContainer,
  ModalContainer,
  OkFooter,
  Bentton,
};
