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
    numPregunta + 1 >= questions.length ? setTerminado(true) : null
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
      <h1 className='text-4xl md:text-5xl md:text-center mb-8 text-teal-800'>Juego de Preguntas</h1>
      <div className='flex justify-start md:justify-center mb-1'>
        <button
          onClick={() => questions.length === 0 ? alert('No hay preguntas') : setPlaying(true)}
          style={{ display: playing ? 'none' : 'block' }}
          className='bg-teal-800 text-white text-2xl py-2 px-4 md:text-xl hover:bg-teal-700'
        >
          Iniciar
        </button>
      </div>
      <div className='flex flex-col md:items-center'>
        {playing && numPregunta < questions.length ?
          <h2 className='text-teal-800 text-2xl md:text-center mb-8'>
            {numPregunta + 1}/{questions.length}
          </h2> : null
        }
        <Preguntas
          handleNum={handleNum}
          data={playing && numPregunta < questions.length ? questions[numPregunta] : {}}
        />
        {/* CUANDO TERMINA*/}
        {
          terminado ?
            <div className='flex flex-col items-start md:items-center border-solid border-2 border-teal-800 p-4'>
              <h2 className='text-teal-800 text-2xl mb-3'>Resultado</h2>
              <h3 className='text-xl mb-4'>Calificación: {points}/{questions.length}</h3>
              <button
                onClick={() => {
                  setPlaying(false)
                  setNumPregunta(0)
                  setPoints(0)
                  setTerminado(false)
                }}
                className='bg-teal-800 text-white text-2xl py-2 px-4 md:text-xl hover:bg-teal-700'
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