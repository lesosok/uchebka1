import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from "./Home"
import About from "./About"
import Product from "./Product"
import Login from "./Login"
import Korzina from "./Korzina"

import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom"
import { ThemeProvider } from './ThemeContext'
import Menu from './Menu'
import GlobalStyles from './GlobalStyles'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <GlobalStyles>
          <Menu/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/product/:id' element={<Product/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/korzina' element={<Korzina/>}/>
          </Routes>
        </GlobalStyles>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App