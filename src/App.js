import React from 'react';
import Navbar from './components/Navbar';
import UploadFiles from "./components/upload-fileComponent";
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddOffre from './components/pages/AddOffre';
import Products from './components/pages/AnnoncesList';
import SignUp from './components/pages/SignUp';
import ListEmployeeComponenent from './components/ListEmployeeComponenent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import UpdateEmployeeComponent from './components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent';
import ViewOffreComponent from './components/ViewOffreComponent';
import ResultSearch from './components/ResultSearch';
import { useDropzone } from "react-dropzone";
import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import clsx from "clsx";
import axios from "axios";
import FormUser from './components/publier_annonce/FormUser';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import AnnonceDetails from './components/AnnonceDetails';
import PostulerOffre from './components/Postulation/PostulerOffre';
import SuccessAlert from './components/SuccessAlert';
import Announces from './components/pages/AnnoncesList';



const styles = {
  item: {
    flexGrow: 1,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  cardContent: {
    flexGrow: 1,
  },
  cardMedia: {
    height: 0,
    paddingTop: '65%',
  },
};




const useStyles = makeStyles((theme) => ({
  dropzoneContainer: {
    height: 200,
    background: "#efefef",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "dashed",
    borderColor: "#aaa",
  },
  preview: {
    width: 150,
    height: 150,
    margin: "auto",
    display: "block",
    marginBottom: theme.spacing(2),
    objectFit: "contain",
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  fabProgress: {
    color: green[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

function App() {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [file, setFile] = React.useState();
  const [preview, setPreview] = React.useState();
  const timer = React.useRef();
  const [percent, setPercent] = React.useState(0);
  const [downloadUri, setDownloadUri] = React.useState();
  const [selectedImageFile, setSelectedImageFile] = React.useState();

  const buttonClassname = clsx({
    [classes.buttonSuccess]: success,
  });

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };




  const onDrop = React.useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    setFile(acceptedFiles[0]);
    const previewUrl = URL.createObjectURL(acceptedFiles[0]);
    setPreview(previewUrl);

  });

  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    onDrop,
  });

  const { ref, ...rootProps } = getRootProps();


  const uploadFile = async () => {
    console.log("OK");
    try {
      setSuccess(false);
      setLoading(true);
      const formData = new FormData();
      formData.append("file", file);
      const API_URL = "http://localhost:8080/files/";
      const response = await axios.put(API_URL, formData, {
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setPercent(percentCompleted);
        },
      });

      setDownloadUri(response.data.fileDownloadUri);
      setSuccess(true);
      setLoading(false);
    } catch (err) {
      alert(err.message);
    }
  };


  return (

    <>
     {/*   
     <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography>React File Upload</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <Toolbar />

      <Container maxWidth="md">
        <Paper elevation={4}>
          <Grid container>
            <Grid item xs={12}>
              <Typography align="center" style={{ padding: 16 }}>
                File Upload
              </Typography>
              <Divider />
            </Grid>

            <Grid item xs={6} style={{ padding: 16 }}>
              <RootRef rootRef={ref}>
                <Paper
                  {...rootProps}
                  elevation={0}
                  className={classes.dropzoneContainer}
                >
                  <input {...getInputProps()} />
                  <p>Drag 'n' drop some files here, or click to select files</p>
                </Paper>
              </RootRef>

            </Grid>
            <Grid item xs={6} style={{ padding: 16 }} >
              <Typography align="center" >
                Preview
              </Typography>
              <img
                onLoad={() => URL.revokeObjectURL(preview)}
                className={classes.preview}
                src={preview || "https://via.placeholder.com/250"}
              />

              <Divider />
              <Grid container style={{ marginTop: 16 }} alignItems="center" >
                <Grid item xs={2} >
                  <div className={classes.wrapper}>
                    <Fab
                      aria-label="save"
                      color="primary"
                      className={buttonClassname}
                      onClick={uploadFile}
                    >
                      {success ? <CheckIcon /> : <CloudUpload />}
                    </Fab>
                    {loading && <CircularProgress size={68} className={classes.fabProgress} />}
                  </div>
                </Grid>
                <toolbar></toolbar>
                <Grid item xs={10}>
                  {file && (
                    <Typography>{file.name}</Typography>
                  )}
                  {loading && (
                    <div>
                      <LinearProgress
                    value={percent}
                      />
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Typography>{percent}%</Typography>
                      </div>
                    </div>
                  )}

                  {success && (
                    <Typography>
                      File Upload Success!{" "}
                      <a href={downloadUri} target="_blank">
                        File Url
                      </a>
                    </Typography>
                  )}
                </Grid>
              </Grid>
            </Grid>

          </Grid>
        </Paper>
      </Container>
*/
     }           



      {/*
      <Router>
        <Navbar />
        <Switch>
*/}
      {/*<Route path='/' exact component={Home} />*/}
      {/*<Route path='/' exact component={Card} />
          <Route path='/services' component={Services} />
          <Route path='/products' component={Products} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/employees' component={ListEmployeeComponenent} />
          <Route path='/add-employee' component={CreateEmployeeComponent} />
          <Route path='/update-employee/:id' component={UpdateEmployeeComponent} />
          <Route path="/view-employee/:id" component={ViewEmployeeComponent } /> */}
      {/* </Switch>
      </Router>
       */}

<Router>
        <Navbar />
        
        <Switch>
       <Route path='/' exact component={Home} />
       <Route path="/view-employee/:id" component={ViewEmployeeComponent } />
       <Route path="/view-offre/:id" component={ViewOffreComponent } />
       <Route path='/annonces' component={Announces} />
       <Route path="/recherche/:label/:lien" component={ResultSearch} />
       <Route path='/Add-offre' component={AddOffre} />
       <Route path='/view-annonce/:id' component={AnnonceDetails} />
       <Route path='/Add-File/:email' component={UploadFiles} />
       <Route path='/Postuler-offre/:id' component={PostulerOffre} />
       <Route path='/Alert' component={SuccessAlert} />
     
      </Switch>
      <Footer/>
      </Router>


</>
  );
}

export default App;