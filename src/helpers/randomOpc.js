const randomQuestions = (array) => {
  const numbers = []
  const newArr = []

  while (newArr.length !== array.length) {
    let randomNum = Math.floor(Math.random()*array.length)
    while (numbers.includes(randomNum)) {
      randomNum = Math.floor(Math.random()*array.length)
    }
    numbers.push(randomNum)
    newArr.push(array[randomNum])
  }
  return newArr
}

export default randomQuestions