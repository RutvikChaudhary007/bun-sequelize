export const config = {
	env: process.env.NODE_ENV || "development",
	debug: process.env.APP_DEBUG === "true",
	port: Number.parseInt(process.env.PORT || "8000"),
	getDatabaseConfig: () => ({
		database: process.env.DATABASE_NAME,
		username: process.env.DATABASE_USER,
		password: process.env.DATABASE_PSSWD,
		host: process.env.DATABASE_HOST,
		port: Number.parseInt(process.env.DATABASE_PORT || "3306"),
	}),
};
