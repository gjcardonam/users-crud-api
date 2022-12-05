import pgpromise from "pg-promise";
import dotenv from "dotenv";
dotenv.config();
//DB URI
const dbURI = process.env.DBURI;
//DB CONFIG
const config = {
  connectionString: dbURI,
};
//DB CONNECTION
const pgp = pgpromise({});
const db = pgp(config);

db.connect()
  .then((obj) => {
    console.log("Connected to database");
    obj.done();
  })
  .catch((error) => {
    console.error("Error", error.message);
  });

export default db;
