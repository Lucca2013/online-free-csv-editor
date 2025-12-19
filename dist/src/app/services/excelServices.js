// ==================================================
// excelService script, basically the service
// ==================================================
export default {
    //it will convert csv to json
    async convertCsvToJson(file, jsonReturn) {
        const csvContent = file.buffer.toString().trim();
        const splitCsvPerLine = (content) => content.trim().split('\n');
        const splitCsvPerCell = (content) => content.trim().split(',');
        const csvLines = splitCsvPerLine(csvContent);
        for (let line of csvLines) {
            let lineReturn = [];
            const cells = splitCsvPerCell(line);
            for (let cell of cells) {
                lineReturn.push(cell);
            }
            jsonReturn.data.push(lineReturn);
        }
    },
    //it will convert json to csv
    async convertJsonToCsv(data) {
        let csvReturn = "";
        for (let line of data) {
            for (let cell of line) {
                csvReturn += cell == line[line.length - 1] ? `${cell}` : `${cell},`;
            }
            csvReturn += "\n";
        }
        return csvReturn;
    }
};
