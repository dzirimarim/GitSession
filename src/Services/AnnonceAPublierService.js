import axios from "axios";
const ANNONCE_API_BASE_URL = "http://localhost:8080/api/v1/annonces";

class AnnonceAPublierService {
    getAnnonces(){
        return axios.get(ANNONCE_API_BASE_URL);
    }
    createAnnonces (annonce){
        return axios.post(ANNONCE_API_BASE_URL , annonce)
    }
    getAnnonceById(annonceId){
        return axios.get(ANNONCE_API_BASE_URL + '/' + annonceId );
    }
    updateAnnonce(annonce , annonceId){
        return axios.put(ANNONCE_API_BASE_URL + '/' + annonceId , annonce)
    }
    deleteAnnonce ( annonceId){
        return axios.delete(ANNONCE_API_BASE_URL + '/' + annonceId)
    }

}
export default new AnnonceAPublierService()