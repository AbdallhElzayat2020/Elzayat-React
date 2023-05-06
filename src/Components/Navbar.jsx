import { Link } from 'react-router-dom';
import logo from '../Images/9.jpeg';
import './Navbar.css'
function Navbar() {
    return (

        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container text-center">
                <a className="navbar-brand text-danger fs-4" href="#/">Magico<img className='logo ms-3' src={logo} alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Home
                                <span className="visually-hidden">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="services">Services</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#/" role="button" aria-haspopup="true" aria-expanded="false">All</a>
                            <div className="dropdown-menu">
                                <Link to={"showProjects"} className="dropdown-item">Projects</Link>
                                <Link className="dropdown-item" to="member">Members</Link>
                                <Link className="dropdown-item" to="tracks">Tracks</Link>
                                {/* <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#/">Asowme technology</a> */}
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="contactus">Contact-US</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="contact">Contact-ME</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}
export default Navbar;