import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {onLogoutUser} from '../../actions/userAction'
import { Route, Link } from 'react-router-dom'


import '../Header/stylenavbar.css'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

const Header = () =>{

    const dispatch = useDispatch()
    const username = useSelector(state => state.auth.username)

    console.log(cookies.get('user'));
    
        // jika belum ada yg login
        if(!username){
        return (
            <div>
            <nav className = "navv">
                <div className="logoo">
                    <h3>
                        <Link className="textlogo" to="/">prepanation</Link>
                    </h3>
                </div>
                <ul className="navv-links">
                        <li>
                            <Link to="/membership">Membership</Link>
                        </li>
                        <li className="dropdown">
                            <span className="dropbtn">Courses</span>
                                <i className="fa"> &#xf107;</i>
                            <div className="dropdown-content">
                                <Link to="/toefl">TOEFL</Link>
                                <Link to="/ielts">IELTS</Link>
                                <Link to="/gmat">GMAT</Link>
                            </div>
                        </li>
                        <li>
                            <Link to="/register">Sign up</Link>
                        </li>
                        <li>
                            <Link to="/login">Sign in</Link>
                        </li>
                </ul>
            </nav>
            </div>
        );
    } else {
        // Jika sudah login
        return (
            <div>
            <nav className = "navv">
                <div className="logoo">
                    <h3>
                        <Link className="textlogo" to="/">prepanation</Link>
                    </h3>
                </div>
                <ul className="navv-links">

                        <li className="dropdown">
                            <span className="dropbtn">My Courses</span>
                                <i className="fa"> &#xf107;</i>
                            <div className="dropdown-content">
                                <Link to="/toefl">TOEFL</Link>
                                <Link to="/">IELTS</Link>
                                <Link to="/">GMAT</Link>
                            </div>
                        </li>

                        <li className="dropdown">
                            <span className="dropbtn">Membership</span>
                                <i className="fa"> &#xf107;</i>
                            <div className="dropdown-content">
                                <Link to="/">Buy Membership</Link>
                                <Link to="/">Payment Confirmation</Link>
                                <Link to="/">Account Activation</Link>
                            </div>
                        </li>

                        <li className="dropdown">
                            <Link to className="dropbtn">{username}</Link>
                                <i className="fa"> &#xf107;</i>

                            <div divider className="dropdown-content">
                                <Link to="/" >ACCOUNT</Link>
                                <Link to="/" onClick={()=> dispatch(onLogoutUser())}>LOG OUT</Link>
                            </div>
                        </li>
                </ul>
            </nav>
            </div>
        )
    }
}

  
  export default Header