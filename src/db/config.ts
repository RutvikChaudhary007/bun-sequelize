import fs, { readdirSync } from "node:fs";
import path from "node:path";
import { Sequelize } from "sequelize";
import { book, person } from "#app/models/index";
import { config } from "#config/index";

const read = readdirSync(path.join(__dirname, "../models/"));
console.log("read:", read);
const modelPath = path.join(__dirname, "../models/book/book.ts");
console.log("modelPath:", modelPath);

export const sequelize = new Sequelize({
	...config.getDatabaseConfig(),
	// host: 'localhost',
	dialect: "postgres",
	// models: [book,person],
	logging: config.env === "development",
	// logging: config.env==="development"? console.log():false
});

// export default sequelize;
