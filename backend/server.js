import sequelize from "./config/database.js";

sequelize
    .authenticate()
    .then(() => console.log("✅ DB connectée"))
    .catch((err) => console.error("❌ Erreur DB:", err));
