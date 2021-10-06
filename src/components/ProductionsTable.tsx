import { Autocomplete, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material"
import { useRecoilState, useRecoilValue } from "recoil"
import { Converters } from "../models/Converters"
import { productionsState, regionState } from "../store"
import { Summary } from "./Summary"

export function ProductionsTable() {
    const [productions, setProductions] = useRecoilState(productionsState)
    const region = useRecoilValue(regionState)
    return <TableContainer>
        <Table aria-label="customized table">
            <TableHead>
                <TableRow>
                    <TableCell width="40%">
                        <Typography variant="h6">
                            Uprawa
                        </Typography>
                    </TableCell>
                    <TableCell width="20%">
                        <Typography variant="h6">
                            Wartość jednostkowa (na sztuke/hektar) [€]
                        </Typography>
                    </TableCell>
                    <TableCell width="15%">
                        <Typography variant="h6">
                            Ilość
                        </Typography>
                    </TableCell>
                    <TableCell width="15%">
                        <Typography variant="h6">
                            Wartość [€]
                        </Typography>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    productions.map((production, i) => {
                        return <TableRow key={i}>
                            <TableCell>
                                <Autocomplete
                                    id={`$productions-autocomplete-{i}`}
                                    options={Converters}

                                    getOptionLabel={(opt) => opt.name}
                                    onChange={(e, conv) => {
                                        console.log(e.type, conv)
                                        setProductions(productions.slice(0, i)
                                            .concat([{
                                                converter: (conv !== null) ? conv : undefined,
                                                amount: production?.amount,
                                            }
                                            ])
                                            .concat(productions.slice(i + 1, productions.length)))
                                    }}
                                    value={production.converter}
                                    renderInput={(params) => {
                                        return <TextField {...params} label="Produkcja/Uprawa" />
                                    }}
                                />
                            </TableCell>
                            <TableCell>
                                <Typography>
                                    {(production.converter !== undefined) ?
                                        production.converter.values[region.group] : ""}
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <TextField
                                    id="outlined-number"
                                    label="Ilość"
                                    type="number"
                                    defaultValue={production.amount}
                                    onChange={(v) => {
                                        setProductions(productions.slice(0, i)
                                            .concat([{
                                                converter: production.converter,
                                                amount: parseFloat(v.target.value),
                                            }
                                            ])
                                            .concat(productions.slice(i + 1, productions.length)))
                                    }}
                                />
                            </TableCell>
                            <TableCell>
                                {(production.converter !== undefined) ?
                                    Number(production.converter.values[region.group] * production.amount).toFixed(2) : ""}
                            </TableCell>
                        </TableRow>

                    })
                }
                <TableRow key={-1}>
                    <TableCell>
                        Suma
                    </TableCell>
                    <TableCell>
                    </TableCell>
                    <TableCell>
                    </TableCell>
                    <TableCell>
                        <Summary />
                    </TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </TableContainer >
}
