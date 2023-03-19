import { Contactus } from './components/Contact-us'
import { Download } from './components/Download'
import { Easy } from './components/Easy'
import { Features } from './components/Features'
import { Hero } from './components/Hero'
import { NavBar } from './components/NavBar'
import { Solution } from './components/Solution'



function App() {
  

  return (
    <div className="bg-darkblue text-white select-none scroll-smooth">
    <NavBar/>
    <Hero/>
    <Features/>
    <Solution/>
    <Easy/>
    <Download/>
    <Contactus/>
    </div>
  )
}

export default App
