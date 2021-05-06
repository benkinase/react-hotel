import React from "react";
import { Link } from "react-router-dom";
import { Banner, Hero } from "../../components";
import { ROUTES } from "../../routeConfigs";

export const Success: React.FC = () => {
  const statusType = "Success!";
  const statusMsg = "Thank you for choosing us!";
  return (
    <Hero>
      <Banner title={statusType} subtitle={statusMsg}>
        <>
          <Link to={ROUTES.HOMEPAGE} className='btn-primary'>
            back home
          </Link>
        </>
      </Banner>
    </Hero>
  );
};
