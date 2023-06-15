import Icon from "../../images/svg/icons.svg";
import user from "../../images/user.png";
import {
  Card,
  SvgLogo,
  Picture,
  User,
  Strip,
  Items,
  Item,
  Button,
  ContainerImg,
  ImgAvatar,
} from "./UserCards.styled";

const UserCards = () => {
  const avatarURL = false;
  return (
    <Card>
      <SvgLogo>
        <use href={Icon + "#logo"}></use>
      </SvgLogo>

      <Picture />

      <User>
        <Strip>
          {avatarURL ? (
            <ContainerImg>
              <ImgAvatar src={user} alt="user" />
            </ContainerImg>
          ) : (
            <img width="80" src={user} alt="user" />
          )}
        </Strip>

        <Items>
          <Item>778 tweets</Item>
          <Item>100,500 Followers</Item>
        </Items>
        
        <Button>Follow</Button>
      </User>
    </Card>
  );
};

export default UserCards;
