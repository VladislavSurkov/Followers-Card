import React from "react";
import { Container } from "./Button.styled";

const Button = ({ onClick, width, color, children }) => {
  return (
    <Container onClick={onClick}  width={width} color={color} >
      {children}
    </Container>
  );
};
 export default Button