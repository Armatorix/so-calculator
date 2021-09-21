import React from 'react';
import { RecoilRoot } from 'recoil';
import { NewValueButton } from "./components/NewValueButton";
import { ProductionsTable } from "./components/ProductionsTable";
import { RegionPicker } from "./components/RegionPicker";



const App = () => {
  return (
    <RecoilRoot>
      <RegionPicker />
      <NewValueButton />
      <ProductionsTable />
    </RecoilRoot>
  );
};

export default App;