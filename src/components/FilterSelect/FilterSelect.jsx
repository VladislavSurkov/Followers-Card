import Select from "react-select";
import {
  colorStyles,
  themeStyles,
  IndicatorSeparator,
} from "./FilterSelect.styled";

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
  const onChange = (newValue) => {
    switch (newValue.value) {
      case "showall":
        setFilterTweets([]);
        setEndIndex(3);
        break;

      case "follow":
        setFilterTweets(tweets.filter((tweet) => usersId.includes(tweet.id)));
        setEndIndex(3);
        break;

      case "followings":
        setFilterTweets(tweets.filter((tweet) => !usersId.includes(tweet.id)));
        setEndIndex(3);
        break;

      default:
        break;
    }
  };

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
