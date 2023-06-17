import { HomeContainer, HomeLink, HomeTitle, HomeText } from "./Home.styled";

const Home = () => {
  return (
    <>
      <HomeContainer>
        <HomeTitle>Welcome to Followers, User!</HomeTitle>
        <HomeText>
          Please click on the {<HomeLink to="/tweets">tweets</HomeLink>} to go
          to the next page.
        </HomeText>
      </HomeContainer>
    </>
  );
};

export default Home;
