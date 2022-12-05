import {
  Sgetusers,
  Sgetuser,
  Spostuser,
  Sdeleteuser,
} from "../services/userServices.js";

//GET ALL USERS
const Cgetusers = async (req, res) => {
  res.send(await Sgetusers());
};
//GET ONE USER
const Cgetuser = async (req, res) => {
  res.send(await Sgetuser(req.body));
};
//POST ONE USER
const Cpostuser = async (req, res) => {
  res.send(await Spostuser(req.body));
};
//DELETE ONE USER
const Cdeleteuser = async (req, res) => {
  res.send(await Sdeleteuser(req.body));
};
//404 PAGE
const Cerroruser = (req, res) => {
  res.status(404).send("404 Error");
};

export { Cgetusers, Cgetuser, Cpostuser, Cdeleteuser, Cerroruser };
