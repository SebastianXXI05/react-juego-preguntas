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
    <div className='border-y-2 border-teal-800 border-solid py-4 w-full md:px-5'>
      <h2 className='text-center text-2xl text-teal-800 mb-8'>¿{data.nombrePregunta}?</h2>
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
                className='text-white p-4 bg-teal-800 hover:bg-teal-700 text-xl mb-4'
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