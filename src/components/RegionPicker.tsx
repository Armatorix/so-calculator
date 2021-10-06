import { Grid, MenuItem, Select, Typography } from "@mui/material"
import { useRecoilState } from "recoil"
import { Regions } from "../models/Regions"
import { regionState } from "../store"
export function RegionPicker() {
    const [region, setRegion] = useRecoilState(regionState)
    return <Grid container item direction="row" xs={12}>
        <Grid item xs={4}>
            <Typography>
                Województwo
            </Typography>
        </Grid>
        <Grid container item xs={8}>
            <Select
                variant="outlined"
                fullWidth
                value={region.id}
                defaultValue={Regions[0].id}
                onChange={(e) => {
                    setRegion(Regions[Number(e.target.value)])
                }}
            >
                {
                    Regions.map((region) => {
                        return <MenuItem key={region.id} value={region.id}>{region.name}</MenuItem>
                    })
                }
            </Select>
        </Grid>
    </Grid>
}