// ==================================================
// excelController script, basically the controller
// ==================================================

//excel service
import { afterEach } from "node:test";
import excelServices from "../services/excelServices.js";

export default {
    //upload csv endpoint
    //this endpoint have the function to convert csv to json, which the frontend will use
    async upload(req: any, res: any) {
        //if the frontend doesnt send a file, we return 400
        if (!req.file) {
            return res.status(400).json({ error: "No file sended" });
        }

        //type of the return to frontend
        type jsonResponse = {
            id: string;
            data: string[][];
        };

        //what we will return to frontend
        let jsonReturn: jsonResponse = {
            id: "spreadsheet",
            data: []
        }

        //call the service
        await excelServices.convertCsvToJson(req.file, jsonReturn);

        //return 200 with the converted json
        res.status(200).json(jsonReturn);
    },

    //dowload the csv
    //this endpoint have the function of convert json to csv to the user can download a csv
    async download(req: any, res: any) {
        //the service will convert json to csv
        const csvReturn = await excelServices.convertJsonToCsv(req.body.data);

        //setting the headers to send back the csv
        res.setHeader("Content-Type", "text/csv; charset=utf-8");
        res.setHeader(
            "Content-Disposition",
            'attachment; filename="spreadsheet.csv"'
        );

        //return 200 with the csv
        res.status(200).send(csvReturn);
    }
}