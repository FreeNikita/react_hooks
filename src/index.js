import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from 'router'

const App = () => {
  return (
    <div>
      <h3>Hooks</h3>
      <Router>
        <Routes />
      </Router>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
