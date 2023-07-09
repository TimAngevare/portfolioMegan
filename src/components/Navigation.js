import {Nav, NavDropdown} from 'react-bootstrap';
import '../styling/Navigation.css';

export default function Navigation() {

    return(
        <header id="header" className="d-flex align-items-center">
            <div className="container d-flex align-items-center justify-content-between">

                <div className="logo">
                    <h1 className="header-text"><a href="index.html">Megan van Delden</a></h1>
                </div>

                <nav id="navbar" className="navbar">
                    <ul>
                        <li><a className="nav-link scrollto" href="#about">About</a></li>
                        <li><a className="nav-link scrollto" href="#resume">Resume</a></li>
                        <li><a className="nav-link scrollto" href="#portfolio">Portfolio</a></li>
                        <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}