// ===================================================================
// production server script, where the server is opened (production)
// ===================================================================
import app from "../src/app/app.js";
//if the enviroment is production, we need to export a handler
//because I deploy at vercel and it allows only one servelles function
export default function handler(req, res) {
    return app(req, res);
}
