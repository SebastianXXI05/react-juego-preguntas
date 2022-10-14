import { ThemeContext } from '../context/ContextGeneral'
import { useContext, useState } from 'react'

export default () => {
  const { questions, setQuestions } = useContext(ThemeContext)
  const [preguntas, setPreguntas] = useState(new Array(4).fill(''))

  const HandleOnPregunta = (pos, value) => {
    const updatePregunta = preguntas.map((e, i) => pos === i ? e = value : e)
    setPreguntas(updatePregunta)
  }
  // console.log(questions)
  return (
    <div>
      <h1 className='text-4xl md:text-5xl md:text-center mb-8 text-teal-800'>Añade Preguntas</h1>
      
      <form
        action="#"
        onSubmit={(e) => e.preventDefault()}
        className='flex flex-col items-start md:items-center'
      >
        {
          preguntas.map((e, i) => {
            return (
              <div key={i} className='mb-4 w-full md:w-3/4'>
                <input
                  type="text"
                  id={`input-${i}`}
                  placeholder={i === 3 ? 'Respuesta' : i === 0 ? 'Nombre de la pregunta' : `Opcion#${i}`}
                  value={preguntas[i]}
                  onChange={(e) => HandleOnPregunta(i, e.target.value)}
                  className='border-solid border-2 border-teal-800 placeholder:text-xl w-full p-2'
                />
              </div>
            )
          })
        }

        <button 
          type="submit"
          onClick={() => {
            const pregunta = preguntas.includes('') ?
             false
             : {
              id: questions.length,
              nombrePregunta: preguntas[0],
              opcion1: preguntas[1],
              opcion2: preguntas[2],
              respuesta: preguntas[3]
            }
            
            const newQuestion = questions.map(e => e)
            newQuestion.push(pregunta)
            setQuestions(newQuestion)
            setPreguntas(new Array(4).fill(''))
          }}
          className='bg-teal-800 text-white text-2xl py-2 px-4 md:text-xl hover:bg-teal-700'
        >
          Añadir
        </button>
      </form>
    </div>
  )
}