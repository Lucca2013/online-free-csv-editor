// ==============================
// app script, the main script
// ==============================

import express from "express";
import path from "path";
import { fileURLToPath } from "url";

//routes controllers
import excelRoutes from "./routes/excelRoutes.ts";
import frontendRoutes from "./routes/frontendRoutes.ts";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//express configurations
app.set('trust proxy', 1);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../templates')));

//routes configurations
app.use("/", excelRoutes);
app.use("/", frontendRoutes)

export default app;