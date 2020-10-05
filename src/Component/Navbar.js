import React, { Component } from 'react';
import '../CSS/Navbar.css'
import logo from '../img/logo192.png'
import generate from '../Function/Generate'
import Generateur from './Generateur';
import ListCompt from "./ListCompt";


class Navebar extends React.Component{

    state = {
        action: 'Liste_des_compts',
        test: '11'
    }

    navigation(action){

        switch(action) {
            case 'generate' :
                return(
                    <Generateur/>
                )
            case 'Liste_des_compts' :
                    return(
                        <ListCompt/>
                    )
        }
            
    }


    render(){

        return(
            <div>
            <div className="menu-vertical">
                <img src={logo} alt="logo.png" className="logo1"/>
                <h1>Only1Pass</h1>
                <ul class="nav flex-column w-100">
                    <li class="nav-item">
                        <button type="button" class="btn btn1 btn-outline-primary w-100" onClick={()=>{this.setState({action: "Liste_des_compts"})}}>Liste des comptes</button>
                    </li>
                    <li class="nav-item">
                        <button type="button" class="btn btn1 btn-outline-primary w-100" onClick={()=>{this.setState({action : "generate"})}}>Générateur de mot de passe</button>
                    </li>
                    <li class="nav-item">
                        <button type="button" class="btn btn1 btn-outline-primary w-100">Ajouter un compte</button>
                    </li>
                </ul>
                <hr/>
                <ul class="nav flex-column w-100">
                    <li class="nav-item">
                        <button type="button" class="btn btn1 btn-outline-primary w-100">Profil</button>
                    </li>
                    <li class="nav-item">
                        <button type="button" class="btn btn1 btn-outline-primary w-100">Paramètre</button>
                    </li>
                    <li class="nav-item">
                        <button type="button" class="btn btn1 btn-outline-primary w-100">A propos du Logiciel</button>
                    </li>
                </ul>
            </div>
            <div className="page">{this.navigation(this.state.action)}</div>
            
            </div>
            
        )
    }




}

export default Navebar;