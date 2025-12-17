// ============================================
// server script, where the server is opened
// ============================================

import 'dotenv/config';
import app from "../src/app/app.ts";
import { config } from 'dotenv';

//load .env
config({ override: true});

//get the enviroment by the enviroment variable
//can be developement or production
const enviroment = process.env.NODE_ENV || "developement";

//if the enviroment is developement, the server start listen at localhost
if (enviroment == "developement") {
    const PORT = 3000;

    app.listen(PORT, () => {
        console.log(`Server at http://localhost:${PORT}`);
    });
}

//if the enviroment is production, we need to export a handler
//because I deploy at vercel and it allows only one servelles function
export default function handler(req: any, res: any) {
    return app(req, res);
}