import opcionRandom from '../helpers/randomOpc'

const Preguntas = ({data, handleNum}) => {
  const opcionPos = opcionRandom([1,2,3])

  return (
  !data.hasOwnProperty('id') ?
  (
    null
  )
  :
  (
    <div>
      <h2>¿{data.nombrePregunta}?</h2>
      <div>
        {
          opcionPos.map((e, i) => {
            return (
              <div 
                key={i}
                onClick={() => {
                  const point = e === 1 ? 1 : 0
                  handleNum(1, point)
                }}
              >
                <h3>
                  {e === 1 ? data.respuesta: e === 2 ? data.opcion2 : data.opcion1}
                </h3>
              </div>
            )
          })
        }
      </div>
    </div>
  )
  )
}

export default Preguntas