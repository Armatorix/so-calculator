import { ThemeProvider } from "@emotion/react";
import {
  AppBar,
  CssBaseline,
  Grid,
  Paper,
  Toolbar,
  Typography
} from "@mui/material";
import React from "react";
import { RecoilRoot, useRecoilValue } from "recoil";
import { CSVDownload } from "./components/CSVDownload";
import { Intro } from "./components/Intro";
import { NewValueButton } from "./components/NewValueButton";
import { ProductionsTable } from "./components/ProductionsTable";
import { RegionPicker } from "./components/RegionPicker";
import ThemeToggle from "./components/ThemeToggle";
import { styleState } from "./store";

const InRecoilApp = () => {
  const theme = useRecoilValue(styleState);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" noWrap component="div" flexGrow={1}>
            Kalkulator wielkości ekonomicznej - SO
          </Typography>
          <ThemeToggle />
        </Toolbar>
      </AppBar>
      <Grid
        container
        alignSelf="center"
        alignItems="center"
        minWidth="650px"
        width="100%"
        height="100%"
        paddingY="3em"
        justifyContent="center"
      >
        <Grid
          container
          item
          component={Paper}
          direction="column"
          spacing={2}
          width="90%"
          maxWidth="1200px"
          padding="2em"
          alignItems="center"
          justifyContent="center"
        >
          <Grid container item>
            <Intro />
          </Grid>
          <Grid container item>
            <RegionPicker />
          </Grid>
          {/* <Grid container item xs={12}>
            <ImportButton />
          </Grid> */}
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
    </ThemeProvider>
  );
};

const App = () => {
  return (
    <RecoilRoot>
      <InRecoilApp />
    </RecoilRoot>
  );
};

export default App;
