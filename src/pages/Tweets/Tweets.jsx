import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";

import { useLocalStorage } from "hooks/useLocalStorage";
import { fetchUsers } from "redux/users/users-operations";
import { getLoading, getUsers } from "redux/users/users-selectors";

import Dropdown from "components/Dropdown/Dropdown";
import Pagination from "components/Pagination/Pagination";
import UserCards from "components/UserCards/UserCards";
import Button from "components/Button/Button";
import Loader from "components/Loader/Loader";

import { BtnContainer, CardContainer, Header } from "./Tweets.styled";

const Tweets = () => {
  const [filterTweets, setFilterTweets] = useState([]);
  const [visibleTweets, setVisibleTweets] = useState([]);
  const [endIndex, setEndIndex] = useState(3);
  const [usersId, setUsersId] = useLocalStorage("usersId", []);

  const tweets = useSelector(getUsers);
  const isLoading = useSelector(getLoading);
  const dispatch = useDispatch();
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

        <Dropdown
          tweets={tweets}
          usersId={usersId}
          setFilterTweets={setFilterTweets}
          setEndIndex={setEndIndex}
        />
      </Header>
      <main>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <CardContainer>
              <UserCards
                users={visibleTweets}
                usersId={usersId}
                setUsersId={setUsersId}
              />
            </CardContainer>
            <Pagination
              tweets={filterTweets}
              setVisibleTweets={setVisibleTweets}
              endIndex={endIndex}
              setEndIndex={setEndIndex}
            />
          </>
        )}
      </main>
    </>
  );
};

export default Tweets;
