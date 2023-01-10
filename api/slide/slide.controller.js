const slideService = require('./slide.service')

async function query(req, res) {
  try {
    const slides = await slideService.query()
    res.json(slides)
  } catch (err) {
    res.status(500).json({
      err
    })
  }
}

module.exports = {
  query
}
