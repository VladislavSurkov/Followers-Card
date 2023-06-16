import Select from "react-select";
import {
  colorStyles,
  themeStyles,
  IndicatorSeparator,
} from "./FilterSelect.styled";
import { useCallback, useEffect, useRef, useState } from "react";

const FilterItem = [
  {
    value: "showall",
    label: "Show all",
  },
  {
    value: "follow",
    label: "Follow",
  },
  {
    value: "followings",
    label: "Followings",
  },
];

const FilterSelect = ({ tweets, usersId, setFilterTweets, setEndIndex }) => {
  const [currentCategory, setCurrentCategory] = useState(FilterItem[0]);
  const prevCategoryRef = useRef();

  const onChange = useCallback(
    (newValue) => {
      if (prevCategoryRef.current !== newValue)
        prevCategoryRef.current = currentCategory;

      setCurrentCategory(newValue);

      switch (newValue.value) {
        case "showall":
          setFilterTweets(tweets);
          break;

        case "follow":
          setFilterTweets(
            tweets.filter((tweet) => !usersId.includes(tweet.id))
          );
          break;

        case "followings":
          setFilterTweets(tweets.filter((tweet) => usersId.includes(tweet.id)));
          break;

        default:
          break;
      }
    },
    [tweets, usersId, setFilterTweets, currentCategory]
  );

  useEffect(() => {
    if (prevCategoryRef.current !== currentCategory) setEndIndex(3);
  }, [currentCategory, setEndIndex]);

  useEffect(() => {
    if (tweets) onChange(currentCategory);
  }, [tweets, onChange, currentCategory]);

  return (
    <Select
      styles={{ ...colorStyles }}
      theme={themeStyles}
      components={{ IndicatorSeparator }}
      onChange={onChange}
      isSearchable={false}
      options={FilterItem}
      placeholder="Show all"
    />
  );
};
export default FilterSelect;
