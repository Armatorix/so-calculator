import React, { useState } from 'react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { EditableTable } from "./components/EditableTable"
import { NewValueButton } from "./components/NewValueButton"
import { RegionPicker } from "./components/RegionPicker"


const App = () => {
  const [rowData, setRowData] = useState([
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32 },
    { make: "Porsche", model: "Boxter", price: 72 }
  ]);
  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 660 }}>
      <RegionPicker />
      <NewValueButton data={rowData} dataSetter={setRowData} />
      <EditableTable data={rowData} />
    </div>
  );
};

export default App;