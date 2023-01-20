import React from 'react'
import '../styling/Footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
    return (
        <div className='footer'>
            <p style={{ fontSize: '12px', marginTop: '12px' }}>Copyright © All rights reserved</p>
            <div className='footer-container'>
                <FaFacebookF size={15} style={{ color: '#fff', margin: '10px' }} />
                <FaInstagram size={15} style={{ color: '#fff', margin: '10px' }} />
                <FaLinkedinIn size={15} style={{ color: '#fff', margin: '10px' }} />
            </div>
        </div>
    )
}

export default Footer