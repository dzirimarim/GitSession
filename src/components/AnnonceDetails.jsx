import React, { Component } from 'react'
import AnnonceAPublierService from '../Services/AnnonceAPublierService';

export default class AnnonceDetails extends Component {
    constructor(props){
        super(props)

    this.state= {
        id: this.props.match.params.id , 
        annonce: {}
    }

    }
    componentDidMount(){
        AnnonceAPublierService.getAnnonceById(this.state.id).then( res => {
           this.setState({ annonce: res.data }) ;
        });

    }
    render() {
        return (
            <div>
                <div className= "card col-md-6 offset-md-3">
                    <h3 className="text-center"> Voir les détails de l'annonce </h3>
                    <div className="card-body">
                    <div className="row">
                        <label>Nom et prénom: </label>
                        <div>{this.state.annonce.nomPrenom}</div>

                    </div>
                    <div className="row">
                        <label>nom Entreprise : </label>
                        <div>{this.state.annonce.nomEntreprise }</div>

                    </div>
                    <div className="row">
                        <label>Email : </label>
                        <div>{this.state.annonce.email }</div>

                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
