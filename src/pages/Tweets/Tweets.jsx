import FilterSelect from "components/FilterSelect/FilterSelect";
import Pagination from "components/Pagination/Pagination";
import UserCards from "components/UserCards/UserCards";
import { useLocalStorage } from "hooks/useLocalStorage";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router";
import { fetchUsers } from "redux/users/users-operations";
import { getUsers } from "redux/users/users-selectors";

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
      <button onClick={backToHome}>Back</button>
      <FilterSelect
        tweets={tweets}
        usersId={usersId}
        setFilterTweets={setFilterTweets}
        setEndIndex={setEndIndex}
      />
      <UserCards
        users={visibleTweets}
        usersId={usersId}
        setUsersId={setUsersId}
      />
      <Pagination
        tweets={filterTweets.length ? filterTweets : tweets}
        setVisibleTweets={setVisibleTweets}
        endIndex={endIndex}
        setEndIndex={setEndIndex}
      />
    </>
  );
};
export default Tweets;
