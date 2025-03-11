import styles from './App.module.css'

import Navbar from './components/Navbar/Navbar.jsx'
import Intro from './components/Intro/Intro.jsx'
import Footer from './components/Footer/Footer.jsx'
import About from './components/About/About.jsx'
import Tools from './components/Tools/Tools.jsx'
import Experience from './components/Experience/Experience.jsx'
function App() {
  

  return (
    <>
    <div className={styles.App}>
      <Navbar />
      <Intro />
      <About />
      <Tools />
      <Experience />
      <Footer />
    </div>
    </>
  )
}

export default App
