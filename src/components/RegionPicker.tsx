import { MenuItem, Select, Typography } from "@mui/material"
import { useRecoilState } from "recoil"
import { Region, Regions } from "../models/Regions"
import { regionState } from "../store"
export function RegionPicker() {
    const [region, setRegion] = useRecoilState(regionState)
    return <>
        <Typography>
            Region
        </Typography>
        <Select
            variant="outlined"
            autoWidth
            value={region.id}
            onChange={(e) => {
                setRegion(Regions[Number(e.target.value)])
            }}
        >
            {
                Regions.map((region) => {
                    return <MenuItem value={region.id}>{region.name}</MenuItem>
                })
            }
        </Select>
    </>
}