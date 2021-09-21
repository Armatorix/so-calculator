import { Button } from "@mui/material"
import { CSVLink } from "react-csv"
import { useRecoilValue } from "recoil"
import { productionsState, regionState } from "../store"
export function CSVDownload() {
    const productions = useRecoilValue(productionsState)
    const region = useRecoilValue(regionState)
    let data = [["Nazwa", "Przelicznik", "Ilość", "Wartość [€]"]]
    productions.forEach(prod => {
        if (prod.converter !== undefined) {
            let convRate = prod.converter.values[region.group]
            let worth = prod.amount * convRate
            data = data.concat([[prod.converter.name, convRate.toString(), prod.amount.toString(), "=" + Number(worth).toFixed(2)]]);
        }
    });
    data = data.concat([["Suma", "", "", `=SUMA(D2: D${data.length})`]]);
    return <CSVLink
        data={data}
        style={{
            width: "100%",
            textDecoration: 'none'
        }}
        filename="so-wielkosc-ekonomiczna.csv" >
        <Button
            fullWidth
            variant='outlined'>
            Pobierz CSV
        </Button>
    </CSVLink>
}