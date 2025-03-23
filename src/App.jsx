import 'bootstrap/dist/css/bootstrap.min.css'
import Terminal from './components/Terminal/Terminal'
import Navbar from './components/Navbar/Navbar'
import MyCol from './components/MyCol/MyCol'

function App() {

  return (
    <div>
      <Navbar />
      <section className="position-relative min-vh-100 d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <Terminal />
            <MyCol />
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
