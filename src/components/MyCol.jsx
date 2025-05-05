import image from 'assets/images/me.png'
import { Link } from 'react-router-dom';

function MyCol(){
    return (
        <div className="col-lg-5">
          <div className="text-center">
            <img src={image} alt="Profile" className="rounded-circle img-fluid border border-3 border-light shadow" style={{maxWidth: "280px" }}/>
            <div className="mt-4 text-center">
              <div className="" style={{width: "280px"}}>
                <Link to="/contact" className="btn btn-primary px-4 py-2 me-2">Contact</Link>
                <Link to="/projects" className="btn btn-outline-light px-4 py-2">Projects</Link>
              </div>
            </div>
          </div>
        </div>
    )
}

export default MyCol;