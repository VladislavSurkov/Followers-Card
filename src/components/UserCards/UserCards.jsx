import { useDispatch } from "react-redux";
import { updateUsers } from "redux/users/users-operations";
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

const UserCards = ({ users, usersId, setUsersId }) => {
  const dispatch = useDispatch();

  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };

  const handleFollow = (id, e, checkFollow) => {
    const updateUser = {
      id,
      followers: checkFollow ? e - 1 : e + 1,
    };

    setUsersId((prevUsersId) =>
      checkFollow
        ? prevUsersId.filter((usersId) => usersId !== id)
        : [id, ...prevUsersId]
    );

    dispatch(updateUsers(updateUser));
  };

  return (
    <>
      {users.length > 0 && users.map(({ user, followers, tweets, avatar, id }) => {
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
