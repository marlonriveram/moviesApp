import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { NavBar } from './Componentes/NavBar'
import { Enrutamiento } from './Enrutamiento'
import { Layout } from './Componentes/Layout'
import { AsideMenu } from './Componentes/AsideMenu'
import { Provider } from './Componentes/Contexto'
import { Footer } from './Componentes/Footer'

function App() {
  return (
    <div className='relative'>
    <BrowserRouter>
      <Provider>
      <Layout>
      <NavBar />
      <Enrutamiento />
      <AsideMenu />
      <Footer/>
      </Layout>
      </Provider>
    </BrowserRouter>
    </div>
  )
}

export default App
