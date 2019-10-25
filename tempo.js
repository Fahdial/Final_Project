// HEADER 

// import React, { Component } from 'react'
// import {connect} from 'react-redux'
// import {onLogoutUser} from '../../actions/userAction'
// import Cookies from 'universal-cookie'
// const cookies = new Cookies()

// import '../Header/stylenavbar.css'


// class Header extends Component {

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
//                         <li>
//                             <a href="/membership">Membership</a>
//                         </li>
//                         <li className="dropdown">
//                             <span className="dropbtn">Courses</span>
//                                 <i className="fa"> &#xf107;</i>
//                             <div className="dropdown-content">
//                                 <a href="/toefl">TOEFL</a>
//                                 <a href="/ielts">IELTS</a>
//                                 <a href="/gmat">GMAT</a>
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

// // function untuk mengambil data di redux state
// const mapStateToProps = state => {
//     return {
//       user_name: state.auth.username
//     }
//   }



  
//   export default connect(mapStateToProps, {onLogoutUser})(Header)


   /* constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }



      /* <UncontrolledDropdown>
                    <DropdownToggle nav caret>
                        <a href="#">Courses</a>
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                            <a href="#">TOEFL</a>
                        </DropdownItem>
                        <DropdownItem>
                            <a href="#">IELTS</a>
                        </DropdownItem>
                        <DropdownItem>
                            <a href="#">GMAT</a>
                        </DropdownItem>
                    </DropdownMenu>
                    </UncontrolledDropdown> */

// ACTION LOGIN
// // Action creator
// // A.C = function biasa yang dia terhubung dengan reducer melalui connect
// // Harus return object yang memiliki property 'type'

// import axios from 'axios'
// import swal from 'sweetalert2'
// // import API from '../services'

// export const userRegister = (a, b, c) => {
//     return (dispatch) => {
//         // dispatch({
//         //     type : 'LOADING'
//         // })
//         // Cek Available
//         var userData = {
//             username: a,
//             password: b,
//             email: c
//         }
//         axios.get("http://localhost:2000/user/userByUsername?username=" + a + "&email=" + c)
//             .then((res) => {
//                 console.log(res)
//                 if (res.data.status===404) {
//                     swal.fire({type:"error", title: res.data.msg, timer:3000})
//                 } else {
//                     axios.post("http://localhost:2000/user/userRegister", userData)
//                         .then((res) => {
//                             console.log(res);
//                             swal.fire({type:"success", title: res.data})
//                         })
//                         .catch((err) => console.log(err))
//                 }
//             })
//             .catch((err) => {
//                 dispatch({
//                     type: "SYSTEM_ERROR"
//                 })
//             })
            
//     }
// }

// export const onLoginUser = (USERNAME, PASSWORD) => {

//     return dispatch => {
//         axios.get(`http://localhost:2000/user/userlogin`, {
//             params: {
//               username: USERNAME
//             }
//           }).then(res => {
//               if (!res.data.length) {
//                 swal.fire("Error", "User not found", "error");
//               } else {
//                 axios.get(`http://localhost:2000/user`, {
//                     params: {
//                       username: USERNAME,
//                       password: PASSWORD
//                     }          
//           }).then(res => {
//               if (!res.data.length) {
//                       swal.fire("Error", "Wrong password!", "error");
//               } else { //kalau res.data.length tidak false atau menjadi true 
//                 swal.fire("Success", "Login Successfully", "success");
//                 // res.data [0] mengambil index yang paling pertama, yang isinya dalah sebuah object?
//                 let { id, username } = res.data[0];
//                 localStorage.setItem(
//                   "userData",JSON.stringify({id, username})
//                 );
//                 dispatch({
//                   type: "LOGIN_SUCCESS", payload: {id,username}
//                       });
//               }
//             });
//         }
//       });
//   };
// };
  

// export const onLogoutUser = () => {
//     // Menghapus data di local storage
//     localStorage.removeItem('userData')

//     // Menghapus data di redux, tidak memerlukan payload
//     return {
//         type: 'LOGOUT_SUCCESS'
//     }
// }

// LOGIN:

// state = {
//     username: "",
//     password: ""
//   };
//   validateForm() {
//     return this.state.username.length > 0 && this.state.password.length > 0;
//   }
//   handleChange = event => { 
//     this.setState({ [event.target.id]: event.target.value });
//   };

//   onLoginClick = () => {
//     if(this.validateForm()){
//     let username = this.state.username;
//     let password = this.state.password;
//     this.props.onLoginUser(username, password);
//   }}

//   handleSubmit = event => {
//     event.preventDefault();
//   }


//REGISTER:

// module.exports = {
//     userLogin: (req, res) => {
//         let username = req.query.username
//         db.query (`select * from users where username = '${username}'`,
//             (err,result) => {
//             if(err) throw err
//             if(result.length > 0){
//                 if(req.query.password === result[0].password){
//                     res.send({
//                         status: '200',
//                         result: result [0]
//                     })
//                 }else{
//                     res.send({
//                         status: '401',
//                         message: 'wrong password'
//                     })
//                 }
//                 } else {
//                     let data= {
//                         status: '404',
//                         message: 'User not found'
//                 }
//                 res.send(data)
//             }
//         })
//     },

//     getUserByUsername : (req,res) => {
//         var username = req.query.username
//         var email = req.query.email
//         var sql = `select * from users where username = '${username}' or email = '${email}'`
//         db.query(sql, (err, result) => {
//             try{
//                 if(err) throw err
//                 if (result.length === 0) {
//                     res.send({
//                         status: 200,
//                         msg: "Registration succees"
//                     })
//                 } else {
//                     res.send({
//                         status: 404,
//                         msg: "Username has been taken"
//                     })
//                 }
//             }catch(err){
//                 console.log(err)
//             }
//         })
//     },
    
//     userRegister: (req, res) => {
//         var data = req.body
//         data.role = 'free'
//         var sql = `insert into users set ?`
//         db.query(sql, data, (err,result) => {

//         })
//         var to = req.body.email
//         var username = req.body.username
//         var mailOptions = {
//             from : 'PREPANATION <fahdialahyatamma@gmail.com>' ,
//             to : to,
//             subject : 'Verify your account' ,
//             html : `<p>Click this <a href="http://localhost:2000/user/verify?email=${to}&username=${username}">Link</a> to verify your account</p>`
//         }
//         if(to){
//             transporter.sendMail(mailOptions, (err, res1) => {
//                 if(err) throw err
//                 res.send('Email sent to '+res1.accepted[0] + ' Please verify your account through a link sent to your email.')
//             })
//         }else{
//             res.send('Email address is empty')
//         }
//     },

//     // Nyobain verify sendiri
//     verify: (req, res) => {
//         let username = req.query.username
//         let email = req.query.email
        
//         let sql = `update users set isVerified = 1 where username = '${username}' and email = '${email}'`
//         db.query(sql, (err, result)=>{
//             try{
//                 if(err) throw err
//                 res.send('Your account has been verified!')
//             }catch(err){
//                 console.log(err)
//             }
//         })
//     }
// }