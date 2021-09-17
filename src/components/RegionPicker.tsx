import { MenuItem, Select } from "@mui/material"
import { Regions } from "../models/Regions"
export const RegionPicker = () => {
    return <Select
        variant="outlined"
        autoWidth
        defaultValue={0}
    >
        {
            Regions.map((region) => {
                return <MenuItem value={region.id}>{region.name}</MenuItem>
            })
        }
    </Select>
}