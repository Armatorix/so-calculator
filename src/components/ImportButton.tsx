
import CSVReader from "react-csv-reader";
import { useRecoilState } from "recoil";
import { productionsState } from "../store";
export function ImportButton() {
  const [productions, setProductions] = useRecoilState(productionsState);
  return  <CSVReader
  cssClass="react-csv-input"
  label="Select CSV with secret Death Star statistics"
  onFileLoaded={(data, fileInfo)=> {
    console.log(data, fileInfo);
  }}
  parserOptions={{
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
  }}
> XD</CSVReader>
}
