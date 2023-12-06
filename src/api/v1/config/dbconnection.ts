import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
   type: "postgres",
   host: "localhost",
   port: 5432,
   username: "root",
   password: "root",
   database: "boms",
   entities: [
      "src/api/v1/entity/**/*.ts"
   ],
});