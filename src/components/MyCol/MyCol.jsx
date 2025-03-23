import image from '../../assets/images/me.png'
import { Link } from 'react-router-dom';

function MyCol(){
    return (
        <div className="col-lg-5">
          <div className="text-center">
            <img src={image} alt="Profile" className="rounded-circle img-fluid border border-3 border-light shadow" style={{maxWidth: "280px" }}/>
            <div className="mt-4">
              <Link to="/contact" className="btn btn-primary me-2 px-4 py-2">Contact Me</Link>
              <Link to="/projects" className="btn btn-outline-light px-4 py-2">View Projects</Link>
            </div>
          </div>
        </div>
    )
}

export default MyCol;