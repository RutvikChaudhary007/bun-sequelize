import { DataTypes, Model, type Optional } from "sequelize";
import { sequelize } from "#app/db/config";

interface AuthorAttributes {
	id: string;
	name: string;
	createdAt?: Date;
	updatedAt?: Date;
}

interface AuthorCreationAttributes extends Optional<AuthorAttributes, "id"> {}

class Author extends Model<AuthorAttributes, AuthorCreationAttributes> {}

Author.init(
	{
		id: {
			allowNull: false,
			autoIncrement: false,
			primaryKey: true,
			type: DataTypes.UUID,
			unique: true,
		},
		name: {
			allowNull: true,
			type: DataTypes.TEXT,
		},
	},
	{
		tableName: "authors",
		sequelize, // passing the `sequelize` instance is required
	}
);

export default Author;
