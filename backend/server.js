import express from "express";
import cors from "cors";
import helmet from "helmet";
import { sequelize } from "./models/index.mjs";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
    res.json({
        message: "Backend OK !",
        db: "connected",
        timestamp: new Date().toISOString(),
    });
});

sequelize
    .authenticate()
    .then(() => {
        console.log("✅ DB connectée");
        app.listen(PORT, () => {
            console.log(`🚀 Backend sur http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error("❌ Erreur DB:", err.message);
        process.exit(1);
    });
