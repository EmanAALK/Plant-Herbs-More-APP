import { decorate, observable } from "mobx";

//Stores
import instance from "./instance";

class PlantStore {
  plants = [];
  loading = true;

  fetchPlants = async () => {
    try {
      const res = await instance.get("/plants");
      this.plants = res.data;
      this.loading = false;
    } catch (error) {
      console.error("PlantStore -> fetchPlant -> error", error);
    }
  };

  getPlantById = (plantId) => this.plants.find((plant) => plant.id === plantId);
}

decorate(PlantStore, { plants: observable, loading: observable });

const plantStore = new PlantStore();
plantStore.fetchPlants();
export default plantStore;
