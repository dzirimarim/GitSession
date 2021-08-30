import axios from "axios";
const OFFRE_API_BASE_URL = "http://localhost:8080/api/v1/offres";

class OffreService {
    getoffres(){
        return axios.get(OFFRE_API_BASE_URL);

    }
    createoffre (offre){
        return axios.post(OFFRE_API_BASE_URL , offre)
    }
    getOffreById(offreId){
        return axios.get(OFFRE_API_BASE_URL + '/' + offreId );
    }
    getOffreByLabel(label){
        return axios.get(OFFRE_API_BASE_URL + '/label' , { params: { label }});
    }
    getOffreByLabelAndLien(label , lien){
        return axios.get(OFFRE_API_BASE_URL + '/' + label +'/'+ lien );
    }
    updateOffre(offre , offreId){
        return axios.put(OFFRE_API_BASE_URL + '/' + offreId , offre)
    }
    deleteOffre ( offreId){
        return axios.delete(OFFRE_API_BASE_URL + '/' + offreId)
    }

}
export default new OffreService()