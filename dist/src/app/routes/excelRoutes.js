// ===================================================
// excelRoutes script, configuration of excel routes
// ===================================================
import { Router } from "express";
//excel controller
import excelController from "../controllers/excelController.js";
//libraly to upload files (in this case, the .csv)
import multer from 'multer';
//muller configuration
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const router = Router();
//routes
router.post("/api/csv/upload", upload.single('file'), excelController.upload);
router.post("/api/csv/download", excelController.download);
export default router;
