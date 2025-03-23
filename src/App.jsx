import 'bootstrap/dist/css/bootstrap.min.css'
import Terminal from './components/Terminal/Terminal'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div>
      <Navbar />
      <Terminal className="terminal" />
    </div>
  )
}

export default App
