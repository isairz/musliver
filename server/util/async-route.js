export default function asyncRoute (asyncFunc) {
  return (req, res, next) => asyncFunc(req, res, next)
    .catch(err => {
      console.err(err)
      res.status(500).end()
    })
}
