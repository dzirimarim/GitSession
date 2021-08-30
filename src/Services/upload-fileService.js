import http from "../http-common";

class UploadFilesService {
  upload(file, onUploadProgress , id ) {
    let formData = new FormData();

    formData.append("file", file);

    return http.post("/upload/"+ id, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Access-Control-Allow-Origin" : "*" , 
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
      },
      onUploadProgress,
    });
  }

  getFiles() {
    return http.get("/files");
  }
}

export default new UploadFilesService();