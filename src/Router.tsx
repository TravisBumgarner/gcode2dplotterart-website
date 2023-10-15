import { Routes, Route } from 'react-router'

import Example from './Example'

import examples from './examples'

const Router = () => {
  return (
    <Routes>
      {examples.map(({ id, ...rest }) => {
        return (
          <Route key={id} path={`examples/${id}`} element={
            <Example {...rest} />
          }
          />
        )
      })}
    </Routes>
  )
}

export default Router
