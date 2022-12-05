const Qgetusers = () => "SELECT * FROM public.users";

const Qgetuser = (name, email, password) =>
  `SELECT * FROM public.users WHERE name = '${name}' OR email = '${email}' OR password = '${password}'`;

const Qpostuser = (name, email, password) =>
  `INSERT INTO public.users (name,email,password) VALUES ('${name}', '${email}', '${password}')`;

const Qdeleteuser = (name, email, password) =>
  `DELETE FROM public.users WHERE name = '${name}' OR email = '${email}' OR password = '${password}'`;

export { Qgetusers, Qgetuser, Qpostuser, Qdeleteuser };
