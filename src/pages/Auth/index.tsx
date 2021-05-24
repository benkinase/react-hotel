import React, { useState } from "react";
import { Login } from "./Login";
import { Register } from "./Signup";
import { CustomContainer, Wrapper, FormWrapper } from "../../components";
import { Buttons } from "./Button";

export const buttons = [
  { id: 1, name: "signin" },
  { id: 2, name: "signup" },
];

export function Auth() {
  const [btnId, setCurrent] = useState<number>(0);

  return (
    <CustomContainer>
      <FormWrapper>
        <Wrapper className='button__tabs'>
          {buttons.map((btn, index) => (
            <Buttons
              onClick={() => setCurrent(index)}
              key={index}
              variant={index === btnId ? "primary" : "secondary"}
            >
              {btn.name}
            </Buttons>
          ))}
        </Wrapper>
        <Wrapper className='main'>{btnId ? <Register /> : <Login />}</Wrapper>
      </FormWrapper>
    </CustomContainer>
  );
}
