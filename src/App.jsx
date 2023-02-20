import './App.css'
import CompaniesLogo from './components/Companies'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App max-width">
    <Navbar />
    <Hero />
    <CompaniesLogo />
    </div>
  )
}

export default App