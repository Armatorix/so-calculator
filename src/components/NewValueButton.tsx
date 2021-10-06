import { Button } from '@mui/material';
import { useRecoilState } from 'recoil';
import { Production } from '../models/Production';
import { productionsState } from '../store';

export function NewValueButton() {
    const [productions, setProductions] = useRecoilState(productionsState)
    return <Button fullWidth variant="outlined" onClick={() => {
        setProductions(productions.concat({ amount: 0 } as Production))
    }}>Dodaj uprawe/produkcje</Button>
}