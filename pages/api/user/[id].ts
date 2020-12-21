import { NextApiHandler } from "next";
import data from "../../../lib/data.json";

const user: NextApiHandler = (req, res) => {
  const { id } = req.query;
  const user = data.find((person) => String(person.index) == String(id));

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).end();
  }
};

export default user;
