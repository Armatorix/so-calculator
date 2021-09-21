import { Autocomplete, MenuItem, Select, TextField } from "@mui/material"
import { useRecoilState } from "recoil"
import { Converters } from "../models/Converters"
import { productionsState } from "../store"

export function EditableTable() {
    const [productions, setProductions] = useRecoilState(productionsState)
    return <div>
        Len: {productions.length}
        {
            productions.map((production, i) => {
                return <Autocomplete
                    id="picker"
                    options={Converters}
                    getOptionLabel={(opt) => opt.name}
                    onChange={(conv) => {
                        console.log(productions.slice(0, i))
                        console.log(productions.slice(i + 1, productions.length))
                    }}
                    renderInput={(params) => {
                        return <TextField {...params} label="Production" />
                    }}
                />
            })
        }
    </div>
}
