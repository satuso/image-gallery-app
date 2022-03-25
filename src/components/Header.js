import React from "react"
import Search from "./Search"
import { Link } from "react-router-dom"

const Header = ({ setSearch }) => {
  return (
    <div className='header'>
      <Link to='/'><h1><i className='fas fa-camera-retro'></i> Image Gallery</h1></Link>
      <Search setSearch={setSearch} />
    </div>
  )
}

export default Header