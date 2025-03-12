import styles from './App.module.css'

import Navbar from './components/Navbar/Navbar.jsx'
import Intro from './components/Intro/Intro.jsx'
import About from './components/About/About.jsx'
import Tools from './components/Tools/Tools.jsx'
import Experience from './components/Experience/Experience.jsx'
import Projects from './components/Projects/Projects.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {
  

  return (
    <>
    <div className={styles.App}>
      <Navbar />
      <Intro />
      <About />
      <Tools />
      <Experience />
      <Projects />
      <Footer />
    </div>
    </>
  )
}

export default App
