import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { NavBar } from './components/NavBar/NavBar'
import { Home } from './components/Home/Home'
import { Banner } from './components/Banner/Banner'

function App() {

  return (
    < >
      <Home />
      <NavBar />
      <Banner />
    </>
  )
}

export default App
