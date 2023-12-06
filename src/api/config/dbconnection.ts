import { DataSource } from "typeorm";
import { User } from "../entity/v1/User";

export const AppDataSource = new DataSource({
   type: "postgres",
   host: "localhost",
   port: 5432,
   username: "root",
   password: "root",
   database: "boms",
   synchronize: true,
   logging: false,
   entities: [
      User
   ],
});