import http from "../http-common";

class UploadLogoService {
  upload(file, onUploadProgress , id ) {
    let formData = new FormData();

    formData.append("file", file);

    return http.post("/uploadLogo/"+ id, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin" : "*" , 
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
      },
      onUploadProgress,
    });
  }

  getLogos() {
    return http.get("/logos");
  }
  getLogo(id){
    return http.get("/logos"+ '/' +id);
  }
  getLogoss(id){
    return http.get("/logo"+ '/' +id);
  }

}

export default new UploadLogoService();