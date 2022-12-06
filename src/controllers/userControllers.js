import {
  Sgetusers,
  Sgetuser,
  Spostuser,
  Sdeleteuser,
  SregUser,
  SlogUser,
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
//USER REGISTER
const CuserReg = async (req, res) => {
  res.send(await SregUser(req.body));
};
//USER LOGGIN
const ClogUser = async (req, res) => {
  try {
    const verify = await SlogUser(req.body);
    if (verify.checkedUser) {
      res.send({ message: "Loggin exitoso", token: verify.sesionToken });
    } else {
      res.status(401).send({ message: "Error en datos de ingreso" });
    }
  } catch (error) {
    res.status(401).send({ message: "Error en datos de ingreso" });
  }
};
//404 PAGE
const Cerroruser = (req, res) => {
  res.status(404).send("404 Error");
};

export {
  Cgetusers,
  Cgetuser,
  Cpostuser,
  Cdeleteuser,
  Cerroruser,
  CuserReg,
  ClogUser,
};
