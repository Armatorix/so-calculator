import React from 'react';
import { RecoilRoot } from 'recoil';
import { CSVDownload } from "./components/CSVDownload";
import { NewValueButton } from "./components/NewValueButton";
import { ProductionsTable } from "./components/ProductionsTable";
import { RegionPicker } from "./components/RegionPicker";



const App = () => {
  return (
    <RecoilRoot>
      <RegionPicker />
      <NewValueButton />
      <ProductionsTable />
      <CSVDownload />
    </RecoilRoot>
  );
};

export default App;