import bcrypt from "bcryptjs";

const encrypt = async (textPlain) => {
  const hash = await bcrypt.hash(textPlain, 10);
  return hash;
};

const compare = async (textPlain, hash) => {
  const response = await bcrypt.compare(textPlain, hash);
  return await bcrypt.compare(textPlain, hash);
};

export { encrypt, compare };
