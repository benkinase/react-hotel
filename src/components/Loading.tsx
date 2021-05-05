import React from "react";
import LoadingGif from "../images/gif/loading-gear.gif";
import { Wrapper, Image, H4 } from "./index";

export const Loading: React.FC = () => {
  return (
    <Wrapper className='loading'>
      <H4>Rooms data loading</H4>
      <Image src={LoadingGif} alt='loading gif' />
    </Wrapper>
  );
};
type Props = {
  title: string;
};
export const Error: React.FC<Props> = ({ title }) => {
  return (
    <Wrapper className='loading'>
      <H4>{title} rooms</H4>
    </Wrapper>
  );
};
