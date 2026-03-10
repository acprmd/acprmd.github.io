import Navbar from './components/Navbar'
import Intro from './components/sections/Intro'
import Experience from './components/sections/Experience'
import Background from './components/sections/Background'
import Projects from './components/sections/Projects'
import Footer from './components/sections/Footer'

function App() {

  return (
    <>
      <Navbar />
      <div className='container'>
        <Intro />
        <Experience />
        <Background />
        <Projects />
      </div>
      <Footer />
    </>
  )
}

export default App
