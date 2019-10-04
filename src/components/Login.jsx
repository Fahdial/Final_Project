import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
// import Swal from 'sweetalert2'
import {onLoginUser} from '../actions/index'

class Login extends Component {
    state = {
        username: "",
        password: ""
      };
      validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
      }
      handleChange = event => {
        this.setState({ [event.target.id]: event.target.value });
      };
    
      onLoginClick = () => {
        if(this.validateForm()){
        let username = this.state.username;
        let password = this.state.password;
        this.props.onLoginUser(username, password);
      }}
    
      handleSubmit = event => {
        event.preventDefault();
      }

    render() {
        // jika user belum login
        if(!this.props.user_name){
            return (
                <div>
                    <div className='col-sm-4 mx-auto card mt-70'>
                        <div className='card-body'>
    
                            <div className="card-title border-bottom border-secondary">
                                <h1>Sign in</h1>
                            </div>
                            
                            <form className='form-group' onSubmit={this.handleSubmit}>
                                <div className="card-title ">
                                    <h4>Username</h4>
                                </div>
                                <input 
                                    className="form-control"
                                    id="username"
                                    value={this.state.username}
                                    onChange={this.handleChange}
                                    type="text"
                                    autoFocus
                                    required
                                />
                                <div className="card-title mt-3">
                                    <h4>Password</h4>
                                </div>
                                
                                <input 
                                className="form-control"
                                id="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                type="password"
                                required/>
                            </form>
    
                            <button 
                                className="searchcolor1"
                                onClick={this.onLoginClick}
                            >Sign in</button>
                            <p className="text-center mt-3">Belum memiliki akun?<a href="/register"> Daftar Sekarang</a></p>
                        </div>
                    </div>
                </div>
            )
        } else {
            // jika sudah login, akan di arahkan ke halaman 'home'
            return <Redirect to='/'/>
        }
    }
}

// function yg akan mengambil data di redux state
const mapStateToProps = state => {
    return {
        user_name :state.auth.username
    }
}

export default connect(mapStateToProps,{onLoginUser})(Login)