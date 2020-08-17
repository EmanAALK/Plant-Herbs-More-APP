import React from "react";

// Styling
import { HomeBackground, TopStyling, Title } from "react-native";

const Home = () => {
  return (
    <HomeBackground
      source={{
        uri:
          "https://i.pinimg.com/564x/aa/6f/c8/aa6fc8e466a4de81149c1d8a3c033da9.jpg",
      }}
    >
      <TopStyling>
        <Title> Plants, Herbs & More </Title>
      </TopStyling>
    </HomeBackground>
  );
};

export default Home;
