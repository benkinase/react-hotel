import React from "react";
import { Link } from "react-router-dom";
//import { RouteComponentProps } from 'react-router-dom';
import { Hero } from "../../components/UI/Hero";
import { Banner } from "../../components/UI/Banner";
import { NotFoundContainer, Paragraph, Span } from "../../components";

import { ROUTES } from "../../routeConfigs";

export const NotFound = (props) => {
  const errorType = "404";
  const errorMsg = " Page not found!";
  return (
    <NotFoundContainer>
      <Hero>
        <Banner title={errorType} subtitle={errorMsg}>
          <Paragraph>
            <Span>the requested URL</Span>
            <Span className='text-danger'>{props.location.pathname}</Span>
            not found.
          </Paragraph>
          <Link to={ROUTES.HOMEPAGE} className='btn-primary'>
            back home
          </Link>
        </Banner>
      </Hero>
    </NotFoundContainer>
  );
};
