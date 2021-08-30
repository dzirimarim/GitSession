import axios from "axios";
const OFFRE_API_BASE_URL = "http://localhost:8080/api/v1/postulations";

class PostulationService {
    getpostes(){
        return axios.get(OFFRE_API_BASE_URL);

    }
    createposte (pos){
        return axios.post(OFFRE_API_BASE_URL , pos)
    }
    getOffreById(postId){
        return axios.get(OFFRE_API_BASE_URL + '/' + postId );
    }
}
export default new PostulationService()