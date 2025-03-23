import image from '../../assets/me.png'

function MyCol(){
    return (
        <div className="col-lg-5">
          <div className="text-center">
            <img src={image} alt="Profile" className="rounded-circle img-fluid border border-3 border-light shadow" style={{maxWidth: "280px" }}/>
            <div className="mt-4">
              <a href="./html/contact.html" className="btn btn-primary me-2 px-4 py-2">Contact Me</a>
              <a href="./html/project.html" className="btn btn-outline-light px-4 py-2">View Projects</a>
            </div>
          </div>
        </div>
    )
}

export default MyCol;