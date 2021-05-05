import React, { Component } from "react";
import styled from "styled-components";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import { Title } from "./Title";
import { Span, Paragraph, H6 } from "./index";

type TService = {
  icon?: JSX.Element;
  title?: string;
  info?: string;
};

interface IServices {
  services?: TService[];
}

export default class Services extends Component<IServices> {
  state: IServices = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktail",
        info:
          "Lorem ipsum Harum nemo unde quae earum nulla laboriosam ab cumque sint, officiis asperiores!",
      },
      {
        icon: <FaHiking />,
        title: "All round hiking",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.  cumque sint, officiis asperiores!",
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit.  asperiores!",
      },
      {
        icon: <FaBeer />,
        title: "free beer",
        info:
          "Harum nemo unde quae earum nulla laboriosam ab cumque sint, officiis asperiores!",
      },
    ],
  };
  render() {
    const serviceTitle = "Our Services";
    const { services } = this.state;
    return (
      <ContainerService>
        <section className='services'>
          <Title title={serviceTitle} />
          <div className='services-center'>
            {services &&
              services.map((service, index) => {
                return (
                  <article key={index} className='service'>
                    <Span>{service.icon}</Span>
                    <H6>{service.title}</H6>
                    <Paragraph>{service.info}</Paragraph>
                  </article>
                );
              })}
          </div>
        </section>
      </ContainerService>
    );
  }
}

const ContainerService = styled.div`
  /* services */
  .services {
    padding: 5rem 0;
  }
  .services {
    background: var(--darkGrey);
    text-align: center;
  }
  .services-center {
    width: 90vw;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(255px, 1fr));
    grid-row-gap: 2rem;
    grid-column-gap: 50px;
  }
  .services span {
    display: inline-block;
    color: var(--primaryColor);
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }
  .services h6 {
    letter-spacing: var(--mainSpacing);
    text-transform: uppercase;
  }
  .services p {
    width: 80%;
    margin: 0 auto;
  }
  @media screen and (min-width: 992px) {
    .services-center {
      width: 95vw;
      max-width: 1170px;
    }
  }

  @media screen and (min-width: 1200px) {
    .services p {
      width: 100%;
    }
  }
`;
