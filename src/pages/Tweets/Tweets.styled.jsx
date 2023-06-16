import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  z-index: 2;

  width: 100%;
  height: 120px;

  background: linear-gradient(180deg, #300988 0%, #6454b4 50%, #af8afb 90%);
`;

export const BtnContainer = styled.div`
  position: absolute;
  left: 10px;
`;
export const CardContainer = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

  width: 1400px;
  margin-top: 150px;
  padding-bottom: 50px;
`;
