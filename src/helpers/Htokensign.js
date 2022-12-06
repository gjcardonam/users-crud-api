import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const userToken = (user) => {
  return jwt.sign(
    {
      _id: user[0].id,
      name: user[0].name,
    },
    process.env.JWT_SECRET,
    { expiresIn: "2h" }
  );
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return null;
  }
};

const decodeSign = () => {};

export { userToken, verifyToken, decodeSign };
