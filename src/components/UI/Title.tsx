import React from "react";
import styled from "styled-components";
import { Wrapper, H4 } from "../index";

type TitleProps = {
  title: string;
};
export const Title: React.FC<TitleProps> = ({ title }) => {
  return (
    <ContainerTitle>
      <Wrapper className='section-title'>
        <H4>
          <strong className='text-blue'>{title}</strong>
        </H4>
      </Wrapper>
    </ContainerTitle>
  );
};
//container with embedded styles
const ContainerTitle = styled.div`
  .section-title {
    font-family: "Poppins", sans-serif;
    text-align: center;
    margin-bottom: 4rem;
  }
  .section-title h4 {
    font-size: 2rem;
    letter-spacing: var(--mainSpacing);
    text-transform: capitalize;
    margin-bottom: 1rem;
  }
  .section-title div {
    width: 5rem;
    height: 5px;
    margin: 0 auto;
    background: var(--primaryColor);
  }
`;
