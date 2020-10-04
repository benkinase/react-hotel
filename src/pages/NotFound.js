import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import Hero from "../components/Hero";
import { ROUTES } from "../routes";
import { CustomContainer } from "./StyledComponents";

function NotFound(props) {
  console.log(props);
  const errorType = "404";
  const errorMsg = " Page not found!";
  return (
    <CustomContainer>
      <Hero>
        <Banner title={errorType} subtitle={errorMsg}>
          <p>
            {" the requested URL"}
            <span className="text-danger">{props.location.pathname} </span>
            not found.
          </p>
          <Link to={ROUTES.HOMEPAGE} className="btn-primary">
            Back home
          </Link>
        </Banner>
      </Hero>
    </CustomContainer>
  );
}

export default NotFound;
