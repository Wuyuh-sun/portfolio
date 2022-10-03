
export default function handler(req, res) {
  const id = req.query.id[0];
  const name = req.query.id[1];
  const pw = req.query.id[2];

  console.log(req.query);

  res.status(200).json({
    id,
    name,
    pw,
  });
}
