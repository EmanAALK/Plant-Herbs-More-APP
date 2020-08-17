//Components
import VendorItem from "./VendorItem";
import { observer } from "mobx-react";

//Stores
import vendorStore from "../../stores";

//Styles
import { List, Spinner } from "react-native";

const VendorList = () => {
  if (vendorStore.loading) return <Spinner />;
  const vendorList = vendorStore.vendors.map((vendor) => (
    <VendorItem vendor={vendor} key={vendor.id} />
  ));
  return <List>{vendorList}</List>;
};

export default observer(VendorList);
