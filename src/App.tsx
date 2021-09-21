import React, { useState } from 'react';
import { RecoilRoot } from 'recoil';

import { EditableTable } from "./components/EditableTable"
import { NewValueButton } from "./components/NewValueButton"
import { RegionPicker } from "./components/RegionPicker"
import { Regions } from './models/Regions';


const App = () => {
  const [rowData, setRowData] = useState([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32 },
    { make: "Porsche", model: "Boxter", price: 72 }
  ]);

  const [region, setRegion] = useState(Regions[0])
  return (
    <RecoilRoot>
      <RegionPicker />
      <NewValueButton />
      <EditableTable />
    </RecoilRoot>
  );
};

export default App;