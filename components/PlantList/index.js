//Components
import PlantItem from "./PlantItem";
import { observer } from "mobx-react";

//Stores
import plantStore from "../../stores";

//Styles
import { List, Spinner } from "react-native";

const PlantList = () => {
  if (plantStore.loading) return <Spinner />;
  const plantList = plantStore.plants.map((plant) => (
    <PlantItem plant={plant} key={plant.id} />
  ));
  return <List>{plantList}</List>;
};

export default observer(PlantList);
