import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ContextGeneral } from './context/ContextGeneral'
import { HashRouter, Routes, Route } from 'react-router-dom'

//components
import App from './App'
import Inicio from './components/Inicio'
import AddQuestion from './components/AddQuestion'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextGeneral>

      <HashRouter>
        <Routes>
          <Route path='/' element={<App />}>
          <Route index element={<Inicio />} />
          <Route path='addQuestion' element={<AddQuestion />} />
          </Route>
        </Routes>
      </HashRouter>

    </ContextGeneral>
  </React.StrictMode>
)
