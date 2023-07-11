import React from 'react'
import {  BsFillPencilFill  } from 'react-icons/bs'
import  SectionWrapper  from '../../hof/hof'
import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <div className="sasta_thread">
        <Link to="/" className="logo">
            @ Dhaga
        </Link>

        <div className="create_dhaga">
            <Link to="/dcreate" className="createDhagaBtn">
                <BsFillPencilFill className="create_btn"/>
            </Link>
        </div>
    </div>
  )
}

export default SectionWrapper(Navbar, "")