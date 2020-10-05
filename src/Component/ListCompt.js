import React from "react";
import '../CSS/ListCompt.css'
import datalistCompt from '../Helper/data_listCompt.json'
import FlatList from 'flatlist-react';



class ListCompt extends React.Component{


    state = {
        data : datalistCompt ,
    }


    _copy(){
        let copyTex = document.querySelector("#copy")
        copyTex.select()
        document.execCommand("copy")
    }


    _renderCompt(){
        const elements = this.state.data
        const items = []
        for (const compt in elements) {

            items.push(
                <div className="litleBoite" key={compt}>
                    <p> URL : {elements[compt].url}</p>
                    <p> Email : {elements[compt].name}</p>
                    <p id="#copy"><input id="copy" value={elements[compt].pwd}/>password :{elements[compt].pwd}</p>
                    <button onClick={this._copy()}>TEST</button>
                </div>
            )
        }

        return items
    }



    render(){
        return(
            <div className="boite1">
                <h3>Liste des comptes : </h3>
                {this._renderCompt()}
            </div>
        )
    }
}



export default ListCompt;