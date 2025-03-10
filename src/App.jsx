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
      <a href="https://www.flaticon.com/free-icons/miscellaneous" title="miscellaneous icons">Miscellaneous icons created by Mayor Icons - Flaticon</a>
    </footer>
    </>
  )
}

export default App
