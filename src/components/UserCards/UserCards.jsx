import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "redux/users/users-selectors";

import Icon from "../../images/svg/icons.svg";
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
import { updateUsers } from "redux/users/users-operations";
import { useLocalStorage } from "hooks/useLocalStorage";

const UserCards = () => {
  const [usersId, setUsersId] = useLocalStorage("usersId", []);
  const dispatch = useDispatch();
  const users = useSelector(getUsers);

  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  const handleFollow = (id, e, checkFollow) => {
    let updateUser;

    if (!checkFollow) {
      setUsersId((prevUsersId) => [id, ...prevUsersId]);
      updateUser = {
        id,
        followers: e + 1,
      };
    } else {
      setUsersId((prevUsersId) =>
        prevUsersId.filter((usersId) => usersId !== id)
      );
      updateUser = {
        id,
        followers: e - 1,
      };
    }

    dispatch(updateUsers(updateUser));
  };

  return (
    <>
      {users.map(({ user, followers, tweets, avatar, id }) => {
        const checkFollow = usersId.some((i) => i === id);

        return (
          <Card key={id}>
            <SvgLogo>
              <use href={Icon + "#logo"}></use>
            </SvgLogo>

            <Picture />

            <User>
              <Strip>
                <ContainerImg>
                  <ImgAvatar src={avatar} alt="user" />
                </ContainerImg>
              </Strip>

              <Items>
                <Item>{user}</Item>
                <Item>{tweets} tweets</Item>
                <Item>{formatNumber(followers)} Followers</Item>
              </Items>

              <Button
                onClick={() => handleFollow(id, followers, checkFollow)}
                color={checkFollow ? "following" : "follow"}
              >
                {checkFollow ? "Following" : "Follow"}
              </Button>
            </User>
          </Card>
        );
      })}
    </>
  );
};

export default UserCards;
