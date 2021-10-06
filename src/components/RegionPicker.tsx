import { Grid, MenuItem, Select, Typography } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { Regions } from "../models/Regions";
import { lightTheme, regionState, themeState } from "../store";
export function RegionPicker() {
  const [region, setRegion] = useRecoilState(regionState);
  const theme = useRecoilValue(themeState);
  return (
    <Grid container item direction="row" xs={12}>
      <Grid item xs={4}>
        <Typography>Województwo</Typography>
      </Grid>
      <Grid container item xs={8}>
        <Select
          fullWidth
          value={region.id}
          defaultValue={Regions[0].id}
          onChange={(e) => {
            setRegion(Regions[Number(e.target.value)]);
          }}
          style={{
            // FIXME: not working theme components overwritting
            color: theme === lightTheme ? "#000" : "#FFF",
          }}
        >
          {Regions.map((region) => {
            return (
              <MenuItem key={region.id} value={region.id}>
                {region.name}
              </MenuItem>
            );
          })}
        </Select>
      </Grid>
    </Grid>
  );
}
