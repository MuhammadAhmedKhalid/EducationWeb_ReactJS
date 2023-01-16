import React, { useState } from 'react'
import '../styling/Navbar.css'
import { Link } from "react-router-dom"

function Navbar() {

    const [color, setColor] = useState(false)
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    }

    window.addEventListener("scroll", changeColor);

    return (
        <div className={color ? 'header header-bg' : 'header'}>
            <Link to={"/"}>
                <h1>TechEduca</h1>
            </Link>
            <ul className='nav-menu'>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/aboutUs'}>About</Link>
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