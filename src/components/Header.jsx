// import React, { Component } from 'react'

// import {onLogoutUser} from '../actions/index'
// import {connect} from 'react-redux'


// class Header extends Component {

//     constructor(props) {
//         super(props);
    
//         this.toggle = this.toggle.bind(this);
//         this.state = {
//           isOpen: false
//         };
//       }
//       toggle() {
//         this.setState({
//           isOpen: !this.state.isOpen
//         });
//       }

//     render() {
//         // jika belum ada yg login
//         if(!this.props.user_name){
//         return (
//             <div>
//             <nav className = "navv">
//                 <div className="logoo">
//                     <h3>
//                         <a className="textlogo" href="/">prepanation</a>
//                     </h3>
//                 </div>
//                 <ul className="navv-links">
//                         <li className="dropdown">
//                             <span className="dropbtn">Courses</span>
//                                 <i className="fa"> &#xf107;</i>
//                             <div className="dropdown-content">
//                                 <a href="/toefl">TOEFL</a>
//                                 <a href="/">IELTS</a>
//                                 <a href="/">GMAT</a>
//                             </div>
//                         </li>
//                         <li>
//                             <a href="/register">Sign up</a>
//                         </li>
//                         <li>
//                             <a href="/login">Sign in</a>
//                         </li>
//                 </ul>
//             </nav>
//             </div>
//         );
//     } else {
//         // Jika sudah login
//         return (
//             <div>
//             <nav className = "navv">
//                 <div className="logoo">
//                     <h3>
//                         <a className="textlogo" href="/">prepanation</a>
//                     </h3>
//                 </div>
//                 <ul className="navv-links">

//                         <li className="dropdown">
//                             <span className="dropbtn">My Courses</span>
//                                 <i className="fa"> &#xf107;</i>
//                             <div className="dropdown-content">
//                                 <a href="/toefl">TOEFL</a>
//                                 <a href="/">IELTS</a>
//                                 <a href="/">GMAT</a>
//                             </div>
//                         </li>

//                         <li className="dropdown">
//                             <span className="dropbtn">Membership</span>
//                                 <i className="fa"> &#xf107;</i>
//                             <div className="dropdown-content">
//                                 <a href="/">Buy Membership</a>
//                                 <a href="/">Payment Confirmation</a>
//                                 <a href="/">Account Activation</a>
//                             </div>
//                         </li>

//                         <li className="dropdown">
//                             <a href className="dropbtn">{this.props.user_name}</a>
//                                 <i className="fa"> &#xf107;</i>

//                             <div divider className="dropdown-content">
//                                 <a href="/" >ACCOUNT</a>
//                                 <a href="/" onClick={this.props.onLogoutUser}>LOG OUT</a>
//                             </div>
//                         </li>
//                 </ul>
//             </nav>
//             </div>
//         )
//     }
//     }
// }
  
//   export default Header
