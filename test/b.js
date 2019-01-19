console.log('exports b.js')
let num = 0
module.exports = function() {
  num ++
  return num
}