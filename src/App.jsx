import 'bootstrap/dist/css/bootstrap.min.css'
import './styles.css'
import Terminal from './components/Terminal/Terminal'

function App() {

  return (
    <div className="bg-dark text-light">
      <div className="animated-bg">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <Terminal />
    </div>
  )
}

export default App
