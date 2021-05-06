import React from "react";

interface HeroProps {
  children?: React.ReactNode;
  hero?: string;
}

export const Hero: React.FC<HeroProps> = ({
  children,
  hero = "defaultHero",
}) => {
  return <header className={hero}>{children}</header>;
};
