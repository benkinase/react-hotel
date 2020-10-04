import styled from "styled-components";
import defaultImg from "../images/room-1.jpeg";

const DynamicHero = styled.div`
  min-height: 60vh;
  /* background: url(${defaultImg}); */
  background: url(${(props) => (props.imgHero ? props.imgHero : defaultImg)});
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default DynamicHero;
