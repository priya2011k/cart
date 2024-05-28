







import React from 'react'
import { Link } from 'react-router-dom'
import { FaMapMarkerAlt } from "react-icons/fa"
import { IoSearch } from "react-icons/io5"
import { FaCartShopping } from "react-icons/fa6"
import Container from 'react-bootstrap/Container'

const Header = () => {
  return (
    <div>
      <header>
        <section className='head py-3'>
          <div className="head_m">
            <div className="left">
              <div className="logo">
                <img src='https://www.jiomart.com/assets/ds2web/images/Jiomart-logo-ds2.0.svg?v=24' alt='Jiomart Logo' />
              </div>
              <div className="text">
                <FaMapMarkerAlt />
                <p className='mx-2'>Deliver to Mumbai 40000</p>
              </div>
            </div>
            <div className="right">
              <div className="search">
                <div className="icon">
                  <span style={{ fontSize: '20px' }}><IoSearch /></span>
                </div>
              </div>
              <div className="user">
                <div className="mini_cart">
                  <Link to="/cart">
                    <span style={{ color: '#fff', fontSize: '20px' }}><FaCartShopping /></span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>

      <div className="nav">
        <div className="header_nav">
          <div className="navbar">
            <div className="tab">
              <Link className='first py-2' to="/">Home</Link>
              <Link className='first py-2' to="/categories">Categories</Link>
              <Link className='first py-2' to="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
