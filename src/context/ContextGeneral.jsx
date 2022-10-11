import React, { useState } from 'react'

export const ThemeContext = React.createContext()

export const ContextGeneral = (props) => {
  const [questions, setQuestions] = useState([])

  return (
    <ThemeContext.Provider value={{ questions, setQuestions }}>
      {props.children}
    </ThemeContext.Provider>
  )
}