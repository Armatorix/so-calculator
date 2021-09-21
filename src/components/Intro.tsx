import { Grid, List, ListItem, MenuItem, Select, Typography } from "@mui/material"
export function Intro() {
    return <Grid container item direction="column">
        <Typography variant="h2">Kalkulator wielkości ekonomicznej - SO</Typography>
        <p >Sposób użycia</p>
        <List>
            <ListItem>1. Wybierz uprawe/produkcje którą prowadzisz.</ListItem>
            <ListItem>2. Podaj ilość</ListItem>
            <ListItem>3. Jeśli posiadasz więcej upraw/produkcji kliknij przycisk "DODAJ UPRAWE/PRODUKCJE" i patrz punkt 1.</ListItem>
            <ListItem>4. Wartość wyliczana jest automatycznie pod tabelą jako suma</ListItem>
        </List>
        <p>Obliczenia można pobrać do pliku skoroszytu za pomocą przycisku "Pobierz csv"</p>
    </Grid>
}