// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { METADATA } from "../../constants";

export default function helloAPI(req, res) {
  res.status(200).json({ name: METADATA.author })
}
