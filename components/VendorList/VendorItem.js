import React from "react";

//Styles
import { Text } from "react-native";
import { ListItem } from "native-base";
import { VendorItemStyled } from "./styles";

const VendorItem = ({ vendor }) => {
  return (
    <ListItem>
      <VendorItemStyled>{vendor.name}</VendorItemStyled>
    </ListItem>
  );
};

export default VendorItem;
