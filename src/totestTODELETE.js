import { get } from 'lodash'

const addOne = (number) => number + 1

export const getCandidates = () =>
  addOne(10)

export const why = () => {
  return addOne(10)
}

export const toto = () => {
  return sayHello('test')
}

export const blah = () => {
  return addOne(10)
}

function sayHello (name) {
  console.log(`hello ${name}`)
}

export { sayHello }
