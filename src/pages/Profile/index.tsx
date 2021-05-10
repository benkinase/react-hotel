import React, { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Paragraph, Wrapper, H3 } from "../../components";

export const Profile: FC = () => {
  const { username, isAuth, email } = useSelector((state: any) => state.auth);
  return (
    <ContainerProfile>
      <Wrapper className='profile'>
        <Wrapper className='left'>
          <Wrapper>
            <H3>
              <strong>{username}</strong>
            </H3>
          </Wrapper>
          <Paragraph>
            <strong>Authenticated: </strong>
            {isAuth && "Yes"}
          </Paragraph>
          <Paragraph>
            <strong>Email: </strong>
            {email}
          </Paragraph>
        </Wrapper>
        <Wrapper className='right'>
          <H3>Previous Bookings</H3>
          <div />
        </Wrapper>
      </Wrapper>
    </ContainerProfile>
  );
};
const ContainerProfile = styled.div`
  width: 80%;
  margin: 5rem auto;

  .profile {
    display: flex;
    flex-direction: column;
    .right {
      width: 100%;
      & h3 {
        text-align: left;
      }
      & div {
        width: 100%;
        height: 5px;
        background: var(--primaryColor);
        margin: 1.7rem auto;
      }
    }
    .left {
      width: 100%;
      margin-bottom: 4rem;
      padding: 10px;
      border: 1px solid var(--mainBlack);
      // box-shadow: var(--lightShadow);
    }
  }
  strong {
    padding-right: 10px;
  }
  @media screen and (min-width: 776px) {
    .profile {
      display: grid;
      grid-template-columns: 2fr 3fr;
      grid-column-gap: 20px;

      .right {
        margin: 0rem auto;
        & h3 {
          text-align: center;
        }
        & div {
        width:12rem;
      }
    }
  }
`;
