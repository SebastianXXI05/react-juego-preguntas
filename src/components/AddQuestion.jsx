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
      <h1>Añade Preguntas</h1>
      
      <form
        action="#"
        onSubmit={(e) => e.preventDefault()}
      >
        {
          preguntas.map((e, i) => {
            return (
              <div key={i}>
                <input
                  type="text"
                  id={`input-${i}`}
                  placeholder={i === 3 ? 'Respuesta' : i === 0 ? 'Nombre de la pregunta' : `Opcion#${i}`}
                  value={preguntas[i]}
                  onChange={(e) => HandleOnPregunta(i, e.target.value)}
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
        >
          Añadir
        </button>
      </form>
    </div>
  )
}