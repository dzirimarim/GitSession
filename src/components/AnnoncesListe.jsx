import React, { Component } from 'react'
import { browserHistory } from '..';
import AnnonceAPublierService from '../Services/AnnonceAPublierService';
import OffreService from '../Services/OffreService';

export default class AnnoncesListe extends Component {
    constructor(props) {
        super(props)
        this.state = {
            annonces: [],
            annonce1: {}
        }
    }

    componentDidMount() {

        AnnonceAPublierService.getAnnonces().then((res => {
            this.setState({ annonces: res.data });
        }))
    }
    voirAnnonce(id) {
        //this.context.history.push(`/view-annonce/${id}`)
        browserHistory.push(`/view-annonce/${id}`);
    }
    deleteAnnonce(id) {
        AnnonceAPublierService.deleteAnnonce(id).then(res => {
            this.setState({ annonces: this.state.annonces.filter(annonce => annonce.id !== id) });
        });
    }
    viewAnnonce(id) {
        AnnonceAPublierService.getAnnonceById(id).then(res => {
            this.setState({ annonce1: res.data });
            let offre = {
                label: this.state.annonce1.nomPrenom, lien: this.state.annonce1.nomEntreprise
                , texte: this.state.annonce1.email
            }
            OffreService.createoffre(offre).then(res => {
                console.log("hello fromAnnonceListe")
            });
            AnnonceAPublierService.deleteAnnonce(id).then(res => {
                this.setState({ annonces: this.state.annonces.filter(annonce => annonce.id !== id) });
            });
        });
    }
    render() {
        return (
            <div>
                <h2 className="text-center" >Liste des annonces à publier </h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Annonce ID </th>
                                <th>Email Entreprise </th>
                                <th> Nom & prénom </th>
                                <th>Actions </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.annonces.map(
                                annonce =>
                                    <tr key={annonce.id}>
                                        <td>{annonce.email} </td>
                                        <td>{annonce.nomPrenom} </td>
                                        <td>{annonce.nomEntreprise} </td>
                                        <td>
                                            <button style={{ marginLeft: "10px" }} onClick={() => this.deleteAnnonce(annonce.id)} className="btn btn-danger" >Decliner </button>
                                            <button style={{ marginLeft: "10px" }} onClick={() => this.viewAnnonce(annonce.id)} className="btn btn-info" >Accepter</button>
                                            <button style={{ marginLeft: "10px" }} onClick={() => this.voirAnnonce(annonce.id)} className="btn btn-primary" >Détails</button>
                                        </td>
                                    </tr>
                            )}
                        </tbody>
                    </table>

                </div>
            </div>
        )
    }
}
