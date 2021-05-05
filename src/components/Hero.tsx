import React from "react";

interface IProps {
  children?: React.ReactNode;
  hero?: string;
}
// const defaultProps = {
//   hero: "defaultHero",
// };

export const Hero: React.FC<IProps> = ({ children, hero = "defaultHero" }) => {
  return <header className={hero}>{children}</header>;
};
