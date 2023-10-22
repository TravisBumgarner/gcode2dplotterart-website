import { Routes, Route } from 'react-router'

import Example from './Example'
import Tutorial from './Tutorial'

import examples from './examples'
import tutorials from './tutorials'

const Router = () => {
  return (
    <Routes>
      {Object.keys(examples).map(id => {
        return (
          <Route key={id} path={`examples/${id}`} element={
            <Example id={id} />
          }
          />
        )
      })}
      {Object.keys(tutorials).map(id => {
        return (
          <Route key={id} path={`tutorials/${id}`} element={
            <Tutorial id={id} />
          }
          />
        )
      })}
    </Routes>
  )
}

export default Router
