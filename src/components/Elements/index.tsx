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
  background: var(--mainWhite);
  border-radius: 5px 5px 0px 0px;
  border: none;
  border-bottom: 2px solid var(--gray-1);
  font-size: 18px;
  color: var(--mainBlack);
  margin-bottom: 8px;

  &::placeholder {
    padding: 5px;
    color: var(--mainBlack);
    opacity: 0.3;
    font-size: 16px;
    letter-spacing: var(--mainSpacing);
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid var(--nice-purple);
  }
`;

type ButtonProps = {
  width?: string;
  bg?: string;
  margin?: string;
  color?: string;
};
export const Button = styled.button<ButtonProps>`
  width: ${(props) => (props.width ? props.width : "70%")};
  margin: ${(props) => props.margin && props.margin};
  padding: 15px;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 2px;
  cursor: pointer;
  color: ${(props) => (props.color ? props.color : "var(--gray-1)")};
  background-color: ${(props) => (props.bg ? props.bg : "var(--nice-purple)")};
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
type ParaProps = {
  color?: string;
};
export const Paragraph = styled.p<ParaProps>`
  color: ${(props) => props.color};
`;
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
