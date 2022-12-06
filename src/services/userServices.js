import db from "../db/userDB.js";
import { Qgetusers, Qgetuser, Qpostuser, Qdeleteuser } from "../db/querys.js";
import { encrypt, compare } from "../helpers/Hbcryptjs.js";
import { userToken } from "../helpers/Htokensign.js";

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
//USER REGISTER
const SregUser = async ({ name, email, password }) => {
  const passwordHash = await encrypt(password);
  return await db.query(Qpostuser(name, email, passwordHash));
};
//USER LOGIN
const SlogUser = async ({ name, email, password }) => {
  const user = await db.query(Qgetuser(name, email, password));
  const checkedUser = await compare(password, user[0].password);
  if (!checkedUser) {
    return checkedUser;
  }
  const sesionToken = userToken(user);
  return { checkedUser, sesionToken };
};
export { Sgetusers, Sgetuser, Spostuser, Sdeleteuser, SregUser, SlogUser };
