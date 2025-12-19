// ===========================
// dev.ts, the developement server
// ===========================

import app from "./app/app.js";

const PORT = 3000;

//if the enviroment is developement, the server start listen at localhost
app.listen(PORT, () => {
    console.log(`Server at http://localhost:${PORT}`);
});