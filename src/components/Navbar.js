import React from 'react'
import '../styling/Navbar.css'
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div className='header'>
            <Link to={"/"}>
                <h1>TECH EDU.</h1>
            </Link>
            <ul className='nav-menu'>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link>About</Link>
                </li>
                <li>
                    <Link>Blog</Link>
                </li>
                <li>
                    <Link>Courses</Link>
                </li>
                <li>
                    <Link>Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar