import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { NavBar } from './components/NavBar/NavBar'
import { Home } from './components/Home/Home'
import { About } from './components/About/About'
import { Projects } from './components/Projects/Projects'
import { Contact } from './components/Contact/Contact'


function App() {
  return (
    < >
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default App
