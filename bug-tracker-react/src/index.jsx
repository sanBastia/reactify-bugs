import React from 'react'
import { render } from 'react-dom'
import { Footer } from './footer'
import { Title } from './title'
import { Content } from './content'

class App extends React.Component {
  render () {
    return (
      <div>
        <Title />
        <Content />
        <Footer />
      </div>
    )
  }
}

render(<App /> , document.getElementById('app'))
