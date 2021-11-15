import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap'

const NavBar = () => {
  return (
    <header>
      <Navbar>
        <NavbarBrand className="text-white">
         Patient Booking</NavbarBrand>
      </Navbar>
    </header>
  )
}

export default NavBar
