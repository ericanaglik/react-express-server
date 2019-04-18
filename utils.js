/* eslint-disable semi */

function random(n) {
  return Math.floor(Math.random() * n)
}

function randomD(n) {
  return random(n) + 1
}

function randomRolls(n, s) {
  const arrayRoll = []
  for (let index = 0; index < n; index += 1) {
    arrayRoll.push(randomD(s));
  }
  return arrayRoll
}

module.exports.random = random
module.exports.randomD = randomD
module.exports.randomRolls = randomRolls
