import React, { Component } from 'react';
import '../CSS/Generateur.css'
import generate from '../Function/Generate'




class Generateur extends React.Component{

    state = {
        mdpGen: ""
    }

    numberInput = React.createRef();
    
    handleSubmit = (event) =>{
        event.preventDefault();
        let mdp =  generate(this.numberInput.current.value)
        this.setState({mdpGen : mdp})
    }

    render(){
        return(
            <div className="boite1">
                <h3>Générateur de mot de passe :</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>Longeur du mot de passe : </label><input type="number" ref={this.numberInput}/><button type="submit" class="btn btn3 btn-primary ">Générer</button>
                </form>
                <br/>
                <p>Le mot de passe générer est : <i>{this.state.mdpGen}</i></p>
            </div>
        )
    }




}

export default Generateur;