import { ThemeContext } from '../context/ContextGeneral'
import { useContext, useEffect } from 'react'

export default () => {
  const { questions, setQuestions } = useContext(ThemeContext)

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
  
  useEffect(() => {
    let numId = 0
    const newArr = questions.filter(e => {
      if (typeof e === 'object') {
        e.id = numId
        numId++
      }
      return e !== false
    })
    setQuestions(randomQuestions(newArr))
    // console.log(questions)
  }, [])

  return (
    <div>
      <h1>Juego de Preguntas</h1>
      <button 
          onClick={() => questions.length === 0 ? alert('No hay preguntas') : console.log(questions)}
        >
        Iniciar
      </button>
    </div>
  )
}