import React from "react";

export default function Hero({ children, hero }) {
  return <header className={hero}>{children}</header>;
}
// no need too receive hero props from Homepage
Hero.defaultProps = {
  hero: "defaultHero",
};
