import styled from "styled-components";

export const Form = styled.form`
  min-height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border-radius: 5px;
  color: var(--tertiaryText);
`;
export const Input = styled.input`
  width: ${(props) => (props.width ? props.width : "70%")};
  padding: 10px;
  background-color: var(--formColor);
  border-radius: 1px;
  border: 1px solid var(--borderColor);
  font-size: 18px;
  color: var(--mainBlack);
  margin-bottom: 5px;

  &::placeholder {
    padding: 5px;
    color: var(--mainBlack);
    opacity: 0.3;
    font-size: 16px;
    letter-spacing: var(--mainSpacing);
  }
  &:focus {
    outline: none;
    color: var(---tertiaryText);
  }
`;

type ButtonProps = {
  width?: string;
};
export const Button = styled.button<ButtonProps>`
  margin-top: 20px;
  width: ${(props) => (props.width ? props.width : "70%")};
  padding: 10px;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 0.3rem;
  cursor: pointer;
  color: var(--buttonText);
  background-color: var(--buttonBgColor);
  transition: var(--mainTransition);
  border: none;

  &:hover {
    opacity: 0.8;
    box-shadow: var(--mainShadow);
  }
  &:focus {
    outline: none;
  }
`;
export const Paragraph = styled.p``;
export const Label = styled.label``;
export const Span = styled.span``;
export const Li = styled.li``;
export const Ul = styled.ul``;
export const Image = styled.img``;
export const H3 = styled.h3``;
export const H2 = styled.h2``;
export const H4 = styled.h4``;
export const H6 = styled.h6``;
export const Section = styled.section``;
export const Select = styled.select``;
export const Option = styled.option``;
