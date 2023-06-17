import styled from "styled-components";
import { NavLink } from "react-router-dom";
import boy from "../../images/boy356.png";

export const HomeContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-image: url(${boy});
  background-position: 50% 10%;
  background-repeat: no-repeat;
`;
export const HomeTitle = styled.h1`
  font-family: "Montserrat";
  font-weight: 700;
  font-size: 70px;
  line-height: 34px;
  color: #4a148c;
`;
export const HomeLink = styled(NavLink)`
  text-decoration: none;
  color: #9a3fcf;
  transition-property: color;
  transition-duration: 500ms;
  :hover {
    color: #c6a4ed;
  }
`;
export const HomeText = styled.span`
  font-family: "Montserrat";
  font-weight: 500;
  font-size: 40px;
  line-height: 34px;
  color: #f7e9ff;
`;
