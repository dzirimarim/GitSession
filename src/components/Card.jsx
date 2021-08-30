import React, { Component } from 'react'
import OffreService from '../Services/OffreService';
import UploadLogoService from '../Services/Upload-logoService';
import CardItem from './CardItem';
import './Cards.css';

export default class Card extends Component {
    constructor(props){
        super(props)
        this.state = {
          offres : [],
          fileInfos: [],
          filee: '' , 
          resultat : [],
        };
        //this.add Employee = this.addEmployee.bind(this);
        //this.editEmployee = this.editEmployee.bind(this);
    }

    componentDidMount(){
        OffreService.getoffres().then((res) => {
            this.setState({offres: res.data});
        });
        /****************************************/
        UploadLogoService.getLogos().then((response) => {
          this.setState({
            fileInfos: response.data,
          });
         // console.log(this.state.fileInfos);
         /* this.state.fileInfos.map((fi) =>(
            console.log(fi.url.split('/')[4])
            //this.state.filee :fi 
            ) )*/
            //console.log (this.state.fileInfos)
            for (let pas = 0; pas < this.state.fileInfos.length; pas++) {
            UploadLogoService.getLogoss(this.state.fileInfos[pas].url.split('/')[4]).then((r)=> {
              this.setState({
                resultat : r.data.idProp,
              });
             console.log( this.state.resultat)









            })}
          
          })
      }

    


    render() {
      const {
        fileInfos,
        resultat
      } = this.state;
        return (
            <div>
            <div className='cards'>
      <h1>Dernières Offres d'emploi</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          {this.state.offres.map(
                                offre =>
            <CardItem
              src={offre.lien}
              text={offre.texte}
              label={offre.source}
              id = {offre.id}
            />
            )} 
             </ul>
        </div>
      </div>
    </div>
    <div className="card">
         {/* <div className="card-header">List of Files</div>
          <ul className="list-group list-group-flush">
            {fileInfos &&
              fileInfos.map((file, index) => (
                <li className="list-group-item" key={index}>
                  <a href={file.url}>{file.name}</a>
                    <img src={file.url}/> 
                </li>
              ))}
              </ul>*/}
          <ul className="list-group list-group-flush">
          {/*fileInfos &&
              fileInfos.map((file, index) => (
                <li className="list-group-item" key={index}>
                  <a href={file.url}>{resultat}</a>
                  
                    
                </li>
              ))*/}
              </ul>
              </div>
                </div>
        )
    }
}

