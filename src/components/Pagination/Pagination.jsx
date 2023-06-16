import { useEffect } from "react";

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
        <button onClick={loadMore}>Load More</button>
      )}
    </>
  );
};

export default Pagination;
