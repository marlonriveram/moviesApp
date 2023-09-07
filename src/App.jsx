import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { NavBar } from './Componentes/NavBar'
import { Enrutamiento } from './Enrutamiento'
import { Layout } from './Componentes/Layout'
import { AsideMenu } from './Componentes/AsideMenu'
import { Provider } from './Componentes/Contexto'

function App() {
  return (
    <div className='relative'>
    <BrowserRouter>
      <Provider>
      
      <Layout>
      <NavBar />
      <Enrutamiento />
      </Layout>
      <AsideMenu />
      </Provider>
    </BrowserRouter>
    </div>
  )
}

export default App
