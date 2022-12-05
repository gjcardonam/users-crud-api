import db from "../db/userDB.js";
import { Qgetusers, Qgetuser, Qpostuser, Qdeleteuser } from "../db/querys.js";

//GET ALL USERS
const Sgetusers = async () => {
  return await db.query(Qgetusers());
};
//GET ONE USER
const Sgetuser = async ({ name, email, password }) => {
  return await db.query(Qgetuser(name, email, password));
};
//POST ONE USER
const Spostuser = async ({ name, email, password }) => {
  return await db.query(Qpostuser(name, email, password));
};
//DELETE ONE USER
const Sdeleteuser = async ({ name, email, password }) => {
  return await db.query(Qdeleteuser(name, email, password));
};

export { Sgetusers, Sgetuser, Spostuser, Sdeleteuser };
