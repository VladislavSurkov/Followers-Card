import styled from "styled-components";
import picture from "../../images/picture308.png";

export const Card = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;

  width: 380px;
  height: 460px;
  padding: 28px 0;

  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
`;
export const SvgLogo = styled.svg`
  position: absolute;
  width: 76px;
  height: 22px;
  left: 20px;
  top: 20px;
`;

export const Picture = styled.div`
  width: 306px;
  height: 168px;
  margin: 0 36px 18px;
  background-image: url(${picture});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Strip = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 380px;
  height: 8px;
  margin-bottom: 62px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const ContainerImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 80px;
  height: 80px;

  background-color: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50px;
`;

export const ImgAvatar = styled.img`
  width: 62px;
  height: 62px;
  box-shadow: 0px -2.19582px 4.39163px #ae7be3, 0px 4.39163px 3.29372px #fbf8ff;
  border-radius: 50px;
`;

export const Items = styled.ul`
  margin-bottom: 26px;
`;

export const Item = styled.li`
  font-family: "Montserrat";

  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  text-align: center;

  color: #ebd8ff;
  :not(:last-child) {
    margin-bottom: 16px;
  }
`;
