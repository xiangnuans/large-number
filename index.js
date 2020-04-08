if (process.env.NODE_eNV === 'production') {
  module.exports = require('./dist/large-number.min.js')
} else {
  module.exports = require('./dist/large-number.js')
}