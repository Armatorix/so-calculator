import { Converter } from "./Converters";
export interface Production {
    converter: Converter | undefined
    amount: number
}