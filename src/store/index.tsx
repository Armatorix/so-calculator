import { atom } from "recoil"
import { Region, Regions } from "../models/Regions"
import { Production } from "../models/Production"
export const regionState = atom({
    key: 'regionState',
    default: Regions[0] as Region,
});

export const productionsState = atom({
    key: 'productionsState',
    default: [] as Production[],
})