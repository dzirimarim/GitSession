import React, { Component } from 'react'
import OffreService from '../Services/OffreService'
import { Link } from 'react-router-dom';
export default class ViewOffreComponent extends Component {
    constructor(props){
        super(props)

    this.state= {
        id: this.props.match.params.id , 
        offre: {}
    }

    }
    componentDidMount(){
        OffreService.getOffreById(this.state.id).then( res => {
           this.setState({ offre: res.data }) ;
        });

    }
    render() {
        return (
            <div>
                <div className= "card col-md-6 offset-md-3">
                    <h3 className="text-center"> Voir les détails de l'Offre </h3>
                    <div className="card-body">
                    <div className="row">
                        <label>Label : </label>
                        <div>{this.state.offre.label }</div>

                    </div>
                    <div className="row">
                        <label>TExte : </label>
                        <div>{this.state.offre.texte }</div>

                    </div>
                    <div className="row">
                        <label>Lien  : </label>
                        <div>{this.state.offre.lien }</div>

                    </div>
                    </div>
                    <Link to={{pathname: `/Postuler-offre/${this.state.id}`}} className="btn btn-primary">Postuler</Link>
                </div>
            </div>
        )
    }
}
