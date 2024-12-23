import React from 'react'
import Header from './components/header/Header.jsx';
import './App.css'
import Home from './components/home/Home.jsx';
import Subscribe from './components/subscribe/Subscribe.jsx';

const App = () => {
  return (
    <div>
      <h1>App</h1>
      <Header />
      <Home />
      <Subscribe />
    </div>
  )
}

export default App
