import React from "react";
import LoadingGif from "../../images/gifs/loading-gear.gif";
import { Wrapper, Image, H4 } from "../index";

type LoadingProps = {
  title: string;
};
export const Loading: React.FC<LoadingProps> = ({ title }) => {
  return (
    <Wrapper className='loading'>
      <H4>{title}</H4>
      <Image src={LoadingGif} alt='loading gif' />
    </Wrapper>
  );
};

// error component
type ErrorProps = {
  title: string;
};
export const Error: React.FC<ErrorProps> = ({ title }) => {
  return (
    <Wrapper className='error'>
      <H4>{title} rooms</H4>
    </Wrapper>
  );
};
