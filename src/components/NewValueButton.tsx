import { Button } from '@mui/material';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { Production } from '../models/Production';
import { productionsState } from '../store';

export function NewValueButton() {
    const [productions, setProductions] = useRecoilState(productionsState)
    return <Button variant="outlined" onClick={() => {
        setProductions(productions.concat({ amount: 1 } as Production))
    }}>Dodaj uprawe/produkcje</Button>

}