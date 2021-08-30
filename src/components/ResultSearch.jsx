import React, { Component } from 'react'
import OffreService from '../Services/OffreService'
export default class ResultSearch extends Component {
    constructor(props) {
        super(props)

        this.state = {
            label: this.props.match.params.label,
            lien : this.props.match.params.lien,
            offres: []
        }
    }
    componentDidMount() {
        if (typeof this.state.lien ==='undefined' ) {
            console.log("3")
            OffreService.getOffreByLabel(this.state.label).then(res => {
                this.setState({ offres: res.data });
            });
            
        }
        if (this.state.lien !="" ){
            console.log("4")
            OffreService.getOffreByLabelAndLien(this.state.label, this.state.lien).then(res => {
                this.setState({ offres: res.data });
            });
            
        }
        
        /*if (lien != "") {
            OffreService.getOffreByLabelAndLien(this.state.label, this.state.lien).then(res => {
                this.setState({ offres: res.data });
            });
        }*/
    }
    render() {
        return (
            <div>
                <h2 className="text-center" >La liste des offres </h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Label </th>
                                <th>Lien</th>
                                <th>Description </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.offres.map(
                                offre =>
                                    <tr key={offre.label} >
                                        <td>{offre.label} </td>
                                        <td>{offre.lien} </td>
                                        <td>{offre.texte} </td>
                                    </tr>
                            )}
                        </tbody>
                    </table>

                </div>
            </div>
        )
    }
}
