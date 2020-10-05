import React from 'react';
import './CSS/App.css';
import Navbar from './Component/Navbar'
import Login from './Component/Login'

class App extends React.Component{

  state = {
    testConnexion: false 
  }



  connexionOK = (ok) =>{
    console.log("HELLO")
    if(ok===-1){
      this.setState({testConnexion : true})
    }
    
  }

  testConnexion(state){
    if(this.state.testConnexion){
      return(
        <Navbar/>
      )
    }
    else{
      console.log("NON CONNECTER")
      return(
        <Login connexion = {this.connexionOK}/>
      )
      
    }
  }
  
  render(){
    return(
      <div>
        {this.testConnexion(this.state)}
      </div>
    )
  }
}

export default App;
