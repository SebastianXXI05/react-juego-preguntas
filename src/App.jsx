import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <header>
        <div>
          <h2>Preguntas</h2>
          <nav>
            <ul>
              <li>
                <Link to='/'>Inicio</Link>
              </li>
              <li>
                <Link to='addQuestion'>Añadir</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default App
