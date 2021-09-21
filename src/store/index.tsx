import { atom } from "recoil"
import { Region, Regions } from "../models/Regions"
export const regionState = atom({
    key: 'regionState',
    default: Regions[0] as Region,
});