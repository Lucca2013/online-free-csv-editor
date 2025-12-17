// ==================================================
// excelService script, basically the service
// ==================================================

import { CsvError } from "csv-parse";

export default {
    //it will convert csv to json
    async convertCsvToJson(file: any, jsonReturn: any) {
        const csvContent = file.buffer.toString().trim();

        const splitCsvPerLine = (content: any) => content.trim().split('\n');
        const splitCsvPerCell = (content: any) => content.trim().split(',');

        const csvLines = splitCsvPerLine(csvContent);

        for (let line of csvLines) {
            let lineReturn: string[] = [];

            const cells = splitCsvPerCell(line);
            for (let cell of cells) {
                lineReturn.push(cell);
            }

            jsonReturn.data.push(lineReturn);
        }
    },

    //it will convert json to csv
    async convertJsonToCsv(data: Array<Array<string>>){
        let csvReturn = "";

        for(let line of data){
            for(let cell of line){
                csvReturn += cell == line[line.length - 1] ? `${cell}` : `${cell},`;
            }
            csvReturn += "\n";
        }

        return csvReturn;
    }
}