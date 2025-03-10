import styles from './App.module.css'

import Navbar from './components/Navbar/Navbar.jsx'
import Intro from './components/Intro/Intro.jsx'
import Footer from './components/Footer/Footer.jsx'
import About from './components/About/About.jsx'
function App() {
  

  return (
    <>
    <div className={styles.App}>
      <Navbar />
      <Intro />
      <About />
      <Footer />
    </div>
    </>
  )
}

export default App
