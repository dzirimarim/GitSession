import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { useState } from 'react';
import AnnonceAPublierService from '../../Services/AnnonceAPublierService';
import { browserHistory } from '../..';
import UploadLogos from '../Upload-logoComponent';
import Card from "react-bootstrap/Card";
import { InputLabel } from '@material-ui/core';
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
    margin: theme.spacing(3, 0, 2),
  },
  paper: {
    margin: theme.spacing(8,4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default function FormUser() {
  const classes = useStyles();
  const [email , setEmail] = useState( '' );
  const [nomPrenom , setnomPrenom ] = useState ('');
  const [nomEntreprise , setNomE] = useState ('');
  const [siteWeb , setsiteWeb ] = useState('');
  const [password, setPasswd] = useState ('');
  const [adresse , setAdresse ] = useState('');
  const [telephone , setPhone ] = useState('');
  const [description , setDescription] = useState('');
  const [isAccepted , setAccepted] = useState(0);

  let handleClick = (e) => {
    e.preventDefault();
    let annonce = {email , nomPrenom , nomEntreprise , siteWeb , password, adresse , telephone , description , isAccepted };
    console.log(annonce);
    AnnonceAPublierService.createAnnonces(annonce).then(res => {   
      console.log('annonce => ' + JSON.stringify(annonce));
      browserHistory.push('/');
    });
   // EmployeeService.createEmployee(employee).then(res => {
     // this.props.history.push('/employees');
 // });
  // }

  };
  return (
    <Grid container component="main" className={classes.root}>
    <CssBaseline />
    <Grid item xs={false} sm={4} md={6} component={Paper} elevation={6} square>
    <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Publier  une annonce
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="email"
                name="Email"
                required
                fullWidth
                value={email}
                onChange={e => setEmail(e.target.value)}
                id="Email"
                label="Email "
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                
                required
                fullWidth
                id="NomP"
                label="Nom & Prénom"
                value={nomPrenom}
                onChange={e => setnomPrenom(e.target.value)}
                name="NomP"
                autoComplete="NomP"

              />
            </Grid>
            <Grid item xs={12} sm={6} >
              <TextField                
                required
                fullWidth
                id="NomE"
                label="Nom de l'entreprise"
                name="NomE"
                value={nomEntreprise}
                onChange={e => setNomE(e.target.value)}
                autoComplete="Nom Entreprise "
              />
            </Grid>
            <Grid item xs={12} sm={6}  >
              <TextField
                
                required
                fullWidth
                name="site web "
                label="Site Web "
                type="text"
                id="site Web" 
                value={siteWeb}
                onChange={e => setsiteWeb(e.target.value)}
                autoComplete="votre site web"
              />
              </Grid>
              <Grid item xs={12} sm={6}  >
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={e => setPasswd(e.target.value)}
                autoComplete="password"
              />
            </Grid>
            <Grid item xs={12} sm={6}  >
              <TextField
                
                required
                fullWidth
                name="Cpassword"
                label="Confirmer Password"
                type="password"
                id="Cpassword"
                autoComplete="confirmer password"
              />
            </Grid>
            <Grid item xs={12} sm={6}  >
              <TextField          
                required
                fullWidth
                name="Phone"
                label="Téléphone"
                id="tel"
                autoComplete="votre téléphone"
                value={telephone}
                onChange={e => setPhone(e.target.value)}
          
              />
            </Grid>
            <Grid item xs={12} sm={6}  >
              <TextField              
                required
                fullWidth
                name="Adresse"
                label="Adresse"
                type="text"
                id="Adresse"
                autoComplete="Entrer votre adresse"
                value={adresse}
                onChange={e => setAdresse(e.target.value)}
          
              />
            </Grid>
            <Grid item xs= {12}>
            <TextField 
            fullWidth
          id="standard-multiline-static"
          label="Description de l'entreprise"
          multiline
          rows={4}
          value={description}
          onChange={e => setDescription(e.target.value) }
        />
            </Grid>
           
            <Grid item xs={12}>
            <InputLabel>Logo </InputLabel >
            <br/>
                        <Card>
                         
  <Card.Body>
                            <UploadLogos email={email} />
                        </Card.Body>
                        </Card>
                        </Grid>
            
            <Grid item xs={12} >
              <FormControlLabel
                control={<Checkbox value={isAccepted} color="primary" />}
                onChange={e => setAccepted(1) }
                label="Accept all terms !! "
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleClick}

          >
            OK 
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Grid>
    <Grid item xs={12} sm={8} md={5} className={classes.image} />
  </Grid>
);
}