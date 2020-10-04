import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    servives: [
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
    return (
      <section className="services">
        <Title title={serviceTitle} />
        <div className="services-center">
          {this.state.servives.map((service, index) => {
            return (
              <article key={index} className="service">
                <span>{service.icon}</span>
                <h6>{service.title}</h6>
                <p>{service.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
