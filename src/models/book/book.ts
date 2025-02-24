import { DataTypes, Model, type Optional } from "sequelize";
import { sequelize } from "#app/db/config";
import Author from "../author/author";
import Person from "../person/person";

interface BookAttributes {
	id: string;
	title: string;
	numberOfPages: number;
	authorId: string;
	createdAt?: Date;
	updatedAt?: Date;
}

interface BookCreationAttributes extends Optional<BookAttributes, "id"> {}

class Book extends Model<BookAttributes, BookCreationAttributes> {}

Book.init(
	{
		id: {
			allowNull: false,
			autoIncrement: false,
			primaryKey: true,
			type: DataTypes.UUID,
			unique: true,
		},
		title: {
			allowNull: true,
			type: DataTypes.TEXT,
		},
		numberOfPages: {
			allowNull: false,
			type: DataTypes.INTEGER,
		},
		authorId: {
			allowNull: true,
			type: DataTypes.UUID,
		},
	},
	{
		tableName: "book",
		sequelize, // passing the `sequelize` instance is required
	}
);

// interface UserInstance extends Sequelize.Instance<UserAttributes>, UserAttributes {}
// class Book extends Model<>
// const Book = sequelize.define<BookInstance>(
//   'Book',
//   {
// id: {
//   allowNull: false,
//   autoIncrement: false,
//   primaryKey: true,
//   type: DataTypes.UUID,
//   unique: true,
// },
// title: {
//   allowNull: true,
//   type: DataTypes.TEXT,
// },
// numberOfPages: {
//   allowNull: false,
//   type: DataTypes.INTEGER,
// },
// authorId: {
//   allowNull: true,
//   type: DataTypes.UUID,
// },
//   }
// );

Book.belongsTo(Author, {
	foreignKey: "authorId",
	as: "authors",
});

export default Book;
