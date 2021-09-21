import { Converter } from "./Converters"
export interface Production {
    converterId?: number
    converter: Converter
    amount: number
}