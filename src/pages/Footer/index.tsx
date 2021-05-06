import React from "react";
import styled from "styled-components";
import { Paragraph, Span } from "../../components";

export const Footer: React.FC = () => {
  //
  const getDate = () => {
    return new Date().getFullYear();
  };

  return (
    <ContainerFooter>
      <ul className='social-icons'>
        <li>
          <a
            href='https://www.github.com/benkinase'
            target='_blank'
            rel='noopener noreferrer'
            className='social-icon'
          >
            <i className='fab fa-github'></i>
          </a>
        </li>
        <li>
          <a
            href='https://www.linkedin.com/in/benjamin-gbenimako'
            target='_blank'
            rel='noopener noreferrer'
            className='social-icon'
          >
            <i className='fab fa-linkedin'></i>
          </a>
        </li>
      </ul>

      <Paragraph className='date'>
        &copy; <Span>{getDate()}</Span> Homecoming GmbH
      </Paragraph>
    </ContainerFooter>
  );
};

// container with embedded styles
const ContainerFooter = styled.div`
  background-color: var(--mainBlack);
  height: auto;
  padding: 10px;
  margin-top: auto;

  .social-icons {
    display: flex;
    margin: 10px 0px 0px;
    justify-content: center;
  }
  .social-icons .social-icon {
    margin: 5px;
    font-size: 1.5rem;
  }
  .date {
    color: var(--primaryColor);
    text-align: center;
    margin-bottom: 5px;
  }

  .social-icon,
  .social-link {
    font-size: 1.2rem;
    color: var(--social-icon);
  }
  .social-icons li {
    list-style: none;
  }
`;
