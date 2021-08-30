import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useState } from 'react';
import OffreService from '../Services/OffreService';
import { useHistory } from 'react-router-dom';
import { browserHistory } from '..';
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 70, 2),

  },
  root: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#4cd137"
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      borderColor: "#4cd137"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#4cd137"
    },

  }
}));

function SearchBar() {
  const classes = useStyles();
  const [lien, setLien] = useState('');
  const [label, setLabel] = useState('');
  const [description, setDescription] = useState('');
  let history = useHistory();


  let handleClick = (e) => {
    e.preventDefault();
    let offreSearch = { label, lien, description };
    console.log(offreSearch);
    /*if (lien == "" && description == "") {
      OffreService.getOffreByLabel(label).then(res => {
        console.log(offreSearch);
        console.log("1");
        //history.push("/view-offre/1");
        browserHistory.goForward(`/recherche/${label}`);

      });
    }*/
    if (description ==""){
      OffreService.getOffreByLabelAndLien(label , lien ).then(res => {
        console.log("2");
        //history.push("/view-offre/1");
        browserHistory.go(`/recherche/${label}/${lien}`);

      });
    }

    /*AnnonceAPublierService.createAnnonces(annonce).then(res => {   
      console.log('annonce => ' + JSON.stringify(annonce));
    });*/
  }
  return (
    <Container component="main"  >
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <TextField
                name="description"
                variant="outlined"
                fullWidth
                id="description"
                label="description"
                autoFocus
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField
                variant="outlined"
                fullWidth
                id="label"
                label="label"
                name="label"
                autoComplete="label"
                value={label}
                onChange={e => setLabel(e.target.value)}

              />
            </Grid>
            <Grid item xs={12} sm={4} >
              <TextField
                className={classes.root}
                variant="outlined"
                fullWidth
                id="lien"
                label="Lien"
                name="lien"
                autoComplete="lien"
                value={lien}
                onChange={e => setLien(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            style={{ backgroundColor: '#4cd137', color: 'black' }}
            className={classes.submit}
            onClick={handleClick}>
            Rechercher
          </Button>
        </form>
      </div>
    </Container>
  );
}
export default SearchBar;