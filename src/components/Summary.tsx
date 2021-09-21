import { Autocomplete, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material"
import { useRecoilState, useRecoilValue } from "recoil"
import { Converters } from "../models/Converters"
import { productionsState, regionState } from "../store"

export function Summary() {
    const productions = useRecoilValue(productionsState)
    const region = useRecoilValue(regionState)
    let total = Number(0)
    productions.forEach(prod => {
        if (prod.converter !== undefined) {
            total += Number(prod.amount * prod.converter.values[region.group])
        }
    });
    return <Typography>{total}</Typography>
}
