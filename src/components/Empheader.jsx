import React from 'react'
import { Link } from 'react-router-dom'

const Empheader = () => {
  return (
    <div>
         <nav className="navbar navbar-expand-lg bg-body-secondary" >
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Employee App</a>
    <button className="navbar-toggler" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          {/* <a className="nav-link active dashboard" aria-current="page" href="/">Dashboard</a> */}
          <Link to="/" className="nav-link active dashboard">Employee Dashboard</Link>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link active empform" href="/form">Employee Form</a> */}
          <Link to="form" className="nav-link active empform">Employee Form</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Empheader