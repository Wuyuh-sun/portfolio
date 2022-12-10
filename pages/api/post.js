export default function post(req, res) {
//   console.log(req.query);
  req.method === "POST"
    ? res.status(200).json(req.body.data)
    : res.status(200).json(req.query.data);
}
