import { ThemeContext } from '../context/ContextGeneral'
import { useContext, useEffect, useState } from 'react'
import Preguntas from './Preguntas'
import randomQuestions from '../helpers/randomOpc'

export default () => {
  const { questions, setQuestions } = useContext(ThemeContext)
  const [playing, setPlaying] = useState(false)
  const [terminado, setTerminado] = useState(false)
  const [numPregunta, setNumPregunta] = useState(0) 
  const [points, setPoints] = useState(0)

  const handleNum = (value, point) => {
    setPoints(points + point)
    setNumPregunta(numPregunta + value)
    numPregunta+1 >= questions.length ? setTerminado(true) : null
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
          onClick={() => questions.length === 0 ? alert('No hay preguntas') : setPlaying(true) }
          style={{display: playing ? 'none' : 'block'}}
        >
        Iniciar
      </button>
      <div>
        {playing && numPregunta < questions.length ? 
          <h2>{numPregunta + 1}/{questions.length}</h2> : null
        }
        <Preguntas 
          handleNum={handleNum} 
          data={playing && numPregunta < questions.length  ? questions[numPregunta] : {}} 
        />
        {/* CUANDO TERMINA*/}
        {
          terminado ?
            <div>
              <h2>Resultado</h2>
              <h3>Calificación: {points}/{questions.length}</h3>
              <button
                onClick={() => {
                  setPlaying(false)
                  setNumPregunta(0)
                  setPoints(0)
                  setTerminado(false)
                }}
              >
                Reiniciar
              </button>
            </div>
          : null
        }
      </div>
    </div>
  )
}