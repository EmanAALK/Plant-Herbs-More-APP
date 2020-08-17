import React from "react";
import { PlantItemStyled } from "./styles";

const PlantItem = ({ plant }) => {
  return <PlantItemStyled>{plant.name}</PlantItemStyled>;
};

export default PlantItem;
