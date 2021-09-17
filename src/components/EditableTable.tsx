import React from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

export function EditableTable(prop: { data: any[] }) {
    const wtf = ["x", "d"]
    return <AgGridReact
        rowData={prop.data}
        singleClickEdit
        onRowValueChanged={(e) => {
            console.log(e);
        }}>
        <AgGridColumn field="make" editable cellEditor="agSelectCellEditor" cellEditorParams={{ values: wtf }}></AgGridColumn>
        <AgGridColumn field="model" editable onCellValueChanged={(e) => {
        }}></AgGridColumn>
        <AgGridColumn field="price"></AgGridColumn>
    </AgGridReact>
}