import express from "express";
import { json, anh } from "../controllers/ok.controllers.js";

const router = express.Router();

router.get("/json", json);
router.get("/anh", anh);

export default router;
