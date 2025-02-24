import { randomUUID } from "node:crypto";
import cors from "cors";
import express, { json, urlencoded } from "express";
import { sequelize } from "#app/db/config";
import { config } from "#config/index";
// import Person from "./models/person/person";
import Book from "./models/book/book";
import "reflect-metadata";
import Author from "./models/author/author";

// console.log(UUID)

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.listen(config.port, async () => {
	console.log(`server running on port: ${config.port}`);
	await sequelize.sync({ force: false });
	const authorId = randomUUID();
	Book.create({
		authorId,
		numberOfPages: 2,
		title: "the book2",
		id: randomUUID(),
	});
	Author.create({
		id: authorId,
		name: "goku1",
	});
});
