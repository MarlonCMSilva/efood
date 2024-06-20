import { BrowserRouter } from 'react-router-dom'
import { GlobalCss } from './styles'

import Rotas from './routes'
import Header from './components/Header'
import Footer from './Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Header />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
