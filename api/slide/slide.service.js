const slides = require('../../slide.json')
module.exports = {
  query
}

async function query() {
  try {
    return slides
  } catch (err) {
    console.log(err)
  }
}
