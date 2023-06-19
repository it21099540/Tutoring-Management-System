import React from "react";

function header() {
  return (
    <nav className="navbar navbar-expand-lg bg-dark"  >
      <div className="container-fluid"  >
        <a className="navbar-brand" href="#" style={{color: "white"}} >
          <b>DAKMA</b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/" style={{color: "yellow"}}>
                <b>Home</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" style={{color: "yellow"}}>
                <b>Tutorials</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://google-calendar-clone.netlify.app/" style={{color: "yellow"}}>
                <b>Classes</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/get" style={{color: "yellow"}}>
                <b>Time Tables</b>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/question" style={{color: "yellow"}}>
                <b>Notices</b>
              </a>
            </li>
          </ul>
    
            
         
            
           
       
        </div>
      </div>
    </nav>
  );
}

export default header;
