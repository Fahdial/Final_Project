import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {onLogoutUser} from '../../actions/userAction'

import '../Header/stylenavbar.css'

const Header = () =>{

    const dispatch = useDispatch()
    const username = useSelector(state => state.auth.username)

        // jika belum ada yg login
        if(!username){
        return (
            <div>
            <nav className = "navv">
                <div className="logoo">
                    <h3>
                        <a className="textlogo" href="/">prepanation</a>
                    </h3>
                </div>
                <ul className="navv-links">
                        <li>
                            <a href="/membership">Membership</a>
                        </li>
                        <li className="dropdown">
                            <span className="dropbtn">Courses</span>
                                <i className="fa"> &#xf107;</i>
                            <div className="dropdown-content">
                                <a href="/toefl">TOEFL</a>
                                <a href="/ielts">IELTS</a>
                                <a href="/gmat">GMAT</a>
                            </div>
                        </li>
                        <li>
                            <a href="/register">Sign up</a>
                        </li>
                        <li>
                            <a href="/login">Sign in</a>
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
                        <a className="textlogo" href="/">prepanation</a>
                    </h3>
                </div>
                <ul className="navv-links">

                        <li className="dropdown">
                            <span className="dropbtn">My Courses</span>
                                <i className="fa"> &#xf107;</i>
                            <div className="dropdown-content">
                                <a href="/toefl">TOEFL</a>
                                <a href="/">IELTS</a>
                                <a href="/">GMAT</a>
                            </div>
                        </li>

                        <li className="dropdown">
                            <span className="dropbtn">Membership</span>
                                <i className="fa"> &#xf107;</i>
                            <div className="dropdown-content">
                                <a href="/">Buy Membership</a>
                                <a href="/">Payment Confirmation</a>
                                <a href="/">Account Activation</a>
                            </div>
                        </li>

                        <li className="dropdown">
                            <a href className="dropbtn">{username}</a>
                                <i className="fa"> &#xf107;</i>

                            <div divider className="dropdown-content">
                                <a href="/" >ACCOUNT</a>
                                <a href="/" onClick={dispatch(onLogoutUser)}>LOG OUT</a>
                            </div>
                        </li>
                </ul>
            </nav>
            </div>
        )
    }
}

  
  export default Header