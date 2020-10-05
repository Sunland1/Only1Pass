import React, { Component } from 'react';
import '../CSS/Login.css';
import logo from '../img/logo192.png'


class Login extends React.Component{


    testConnexion(){
        this.props.connexion(-1)
    }


    render(){
        return(
            <div class="container">
                <img src={logo} alt="logo.png" className="logo App-logo"/>
                <form className="textColor">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <button type="submit" class="btn btn2 btn-primary " onClick ={()=>{this.testConnexion()}}>Submit</button>
                </form>
            </div>
        )
    }
}


export default Login ; 