import { Grid, Paper } from '@mui/material';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { CSVDownload } from "./components/CSVDownload";
import { NewValueButton } from "./components/NewValueButton";
import { ProductionsTable } from "./components/ProductionsTable";
import { RegionPicker } from "./components/RegionPicker";



const App = () => {
  return (
    <RecoilRoot>
      <Grid container alignItems='center' width="100%" height="100%" padding="3em" justifyContent="center">
        <Grid container item component={Paper} direction='column' spacing={2} minWidth="560px" width="80%" padding="2em" alignItems='center' justifyContent="center" >
          <Grid container item>
            <RegionPicker />
          </Grid>
          <Grid container item xs={12}>
            <NewValueButton />
          </Grid>
          <Grid container item justifyContent="center">
            <ProductionsTable />
          </Grid>
          <Grid container item>
            <CSVDownload />
          </Grid>
        </Grid>
      </Grid>
    </RecoilRoot >
  );
};

export default App;