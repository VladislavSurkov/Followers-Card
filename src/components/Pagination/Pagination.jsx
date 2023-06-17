import { useEffect } from "react";
import Button from "components/Button/Button";
import { PaginationContainer } from "./Pagination.styled";

const Pagination = ({ tweets, setVisibleTweets, endIndex, setEndIndex }) => {
  const loadMore = () => {
    setEndIndex((prevEndIndex) => prevEndIndex + 3);
  };

  useEffect(() => {
    setVisibleTweets(tweets.slice(0, endIndex));
  }, [setVisibleTweets, tweets, endIndex]);

  return (
    <>
      {endIndex < tweets.length && (
        <PaginationContainer>
          <Button onClick={loadMore} width="loadMore" color="secondary">
            Load More
          </Button>
        </PaginationContainer>
      )}
    </>
  );
};

export default Pagination;
