import express from "express";
import path from "path";
import cors from "cors";
import "dotenv/config";
import okRoutes from "./routes/ok.routes.js";
import process from "process";

const app = express();
const port = process.env.PORT || 5000;
const __dirname = path.resolve();
app.use("/static", express.static(path.join(__dirname, "public")));

const corsOptions = {
  origin: process.env.FRONTEND_URL.toString(),
};
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/ok", okRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
