import React from 'react';
import './style.scss';
import {Header} from './pages/base/Header'
import {Main} from './pages/base/Main'
import {Navigation} from './pages/base/Navigation'

function App() {
  return (
    <div className='app'>
      <Header />
      <Main />
      <Navigation />
    </div>
  )
}

export default App;