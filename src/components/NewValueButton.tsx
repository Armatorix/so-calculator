import { Button } from '@mui/material';

export function NewValueButton(prop: { data: any[], dataSetter: any }) {
    return <Button variant="outlined" onClick={() => {
        prop.dataSetter(prop.data.concat({}));
    }}>Dodaj uprawe</Button>

}