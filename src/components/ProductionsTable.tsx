import { Autocomplete, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material"
import { useRecoilState, useRecoilValue } from "recoil"
import { Converters } from "../models/Converters"
import { productionsState, regionState } from "../store"
import { Summary } from "./Summary"

export function ProductionsTable() {
    const [productions, setProductions] = useRecoilState(productionsState)
    const region = useRecoilValue(regionState)
    return <div>
        <TableContainer>
            <Table aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Uprawa
                        </TableCell>
                        <TableCell>
                            Wartość jednostkowa (na sztuke/hektar) [€]
                        </TableCell>
                        <TableCell>
                            Ilość
                        </TableCell>
                        <TableCell>
                            Wartość [€]
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        productions.map((production, i) => {
                            return <TableRow>
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
                                        {(production.converter != undefined) ?
                                            production.converter.values[region.group] : ""}
                                    </Typography>
                                </TableCell>
                                <TableCell>

                                    <TextField
                                        id="outlined-number"
                                        label="Ilość"
                                        type="number"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
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
                                    {(production.converter != undefined) ?
                                        Number(production.converter.values[region.group] * production.amount).toFixed(2) : ""}
                                </TableCell>
                            </TableRow>

                        })
                    }
                    <TableRow>
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
    </div >
}
