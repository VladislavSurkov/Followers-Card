import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";

import { useLocalStorage } from "hooks/useLocalStorage";
import { fetchUsers } from "redux/users/users-operations";
import { getUsers } from "redux/users/users-selectors";

import FilterSelect from "components/FilterSelect/FilterSelect";
import Pagination from "components/Pagination/Pagination";
import UserCards from "components/UserCards/UserCards";
import Button from "components/Button/Button";

import { BtnContainer, CardContainer, Header } from "./Tweets.styled";

const Tweets = () => {
  const dispatch = useDispatch();
  const tweets = useSelector(getUsers);
  const [filterTweets, setFilterTweets] = useState([]);
  const [visibleTweets, setVisibleTweets] = useState([]);
  const [endIndex, setEndIndex] = useState(3);
  const [usersId, setUsersId] = useLocalStorage("usersId", []);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const backToHome = () => {
    navigate(location.state?.from ?? "/");
  };

  return (
    <>
      <Header>
        <BtnContainer>
          <Button onClick={backToHome} width="back" color="secondary">
            Back
          </Button>
        </BtnContainer>

        <FilterSelect
          tweets={tweets}
          usersId={usersId}
          setFilterTweets={setFilterTweets}
          setEndIndex={setEndIndex}
        />
      </Header>
      <main>
        <CardContainer>
          {visibleTweets.length ? (
            <UserCards
              users={visibleTweets}
              usersId={usersId}
              setUsersId={setUsersId}
            />
          ) : (
            <div>Not yet</div>
          )}
        </CardContainer>

        <Pagination
          tweets={filterTweets}
          setVisibleTweets={setVisibleTweets}
          endIndex={endIndex}
          setEndIndex={setEndIndex}
        />
      </main>
    </>
  );
};
export default Tweets;