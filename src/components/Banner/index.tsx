import React, { FC } from "react";
import styled from "styled-components";
import { Wrapper, Paragraph, H2 } from "../index";

export interface BannerProps {
  children: React.ReactNode;
  title: String;
  subtitle?: string;
}

export const Banner: FC<BannerProps> = ({ children, title, subtitle }) => {
  return (
    <ContainerBanner>
      <Wrapper className='banner'>
        <H2>{title}</H2>
        <div />
        <Paragraph>{subtitle}</Paragraph>
        {children}
      </Wrapper>
    </ContainerBanner>
  );
};

const ContainerBanner = styled.div`
  /* Banner */
  .banner {
    display: inline-block;
    background: rgba(0, 0, 0, 0.5);
    color: var(--mainWhite);
    padding: 2rem 1rem;
    text-align: center;
    text-transform: capitalize;
    letter-spacing: var(--mainSpacing);
  }
  .banner h1 {
    font-size: 2.5rem;
  }
  .banner div {
    width: 10rem;
    height: 5px;
    background: var(--primaryColor);
    margin: 1.7rem auto;
  }
  .banner p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
  @media screen and (min-width: 576px) {
    .banner {
      padding: 2rem 3rem;
    }
    .banner h1 {
      font-size: 3rem;
    }
  }
  @media screen and (min-width: 992px) {
    .banner {
      padding: 2rem 6rem;
    }
    .banner h1 {
      font-size: 4rem;
    }
  }
`;
