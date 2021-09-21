import { atom } from "recoil";
import { Production } from "../models/Production";
import { Region, Regions } from "../models/Regions";
export const regionState = atom({
    key: 'regionState',
    default: Regions[0] as Region,
});

export const productionsState = atom({
    key: 'productionsState',
    default: [{
        amount: 1,
    }] as Production[],
})
