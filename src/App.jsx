import styles from './App.module.css'
import Navbar from './components/Navbar/Navbar.jsx'
function App() {
  

  return (
    <>
    <div className={styles.App}>
      <Navbar />
    </div>
    <footer>
      {/* References */}
      <a href="https://www.flaticon.com/free-icons/young" title="young icons">Young icons created by Freepik - Flaticon</a>
      <a href="https://www.flaticon.com/free-icons/portfolio" title="portfolio icons">Portfolio icons created by Freepik - Flaticon</a>
    </footer>
    </>
  )
}

export default App
