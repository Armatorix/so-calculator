
import CSVReader from "react-csv-reader";
export function ImportButton() {
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
