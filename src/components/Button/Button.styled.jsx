import styled, { css } from "styled-components";

const COLOR = {
  primary: css`
    background: #ebd8ff;
    color: #373737;
    :hover {
      background: #ebd8ff9f;
    }
  `,
  secondary: css`
    background: #5cd3a8;
    color: #373737;
    :hover {
      background: #5cd3a89f;
    }
  `,
};

const WIDTH = {
  followers: css`
    width: 196px;
  `,
  loadMore: css`
    width: 180px;
  `,
  back: css`
    width: 100px;
  `,
};

export const Container = styled.button`
  font-family: "Montserrat";

  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  text-transform: uppercase;

  height: 50px;
  ${(props) => props.width && WIDTH[props.width]};
  ${(props) => props.color && COLOR[props.color]};

  transition-property: background-color;
  transition-duration: 500ms;

  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 10.3108px;
`;
