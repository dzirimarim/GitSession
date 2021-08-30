import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Card from "react-bootstrap/Card";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { useState } from 'react';
import { browserHistory } from '../..';
import UploadFiles from "../upload-fileComponent";
import PostulationService from '../../Services/PostulationService';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));

export default function PostulerOffre(props) {
    const id = props.match.params.id ;
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [nomPrenom, setnomPrenom] = useState('');
    const [lettreMotiv, setlettreMotiv] = useState('');
    const [id_Prop] = useState(id);
    

    let handleClick = (e) => {
        e.preventDefault();
        let poste = { email, nomPrenom,lettreMotiv , id_Prop};
        console.log(poste);
        PostulationService.createposte(poste).then(res => {
            console.log('poste => ' + JSON.stringify(poste));
            browserHistory.go(`/`);
            
        });
    };
    return (

        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={8} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Postuler à une offre d'emploi
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={5}>
                            <Grid item xs={12} >
                                <TextField
                                    autoComplete="email"
                                    name="Email"
                                    required
                                    fullWidth
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    id="Email"
                                    label="Email"
                                    variant="outlined"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField

                                    required
                                    fullWidth
                                    id="NomP"
                                    label="Nom & Prénom"
                                    value={nomPrenom}
                                    variant="outlined"
                                    onChange={e => setnomPrenom(e.target.value)}
                                    name="NomP"
                                    autoComplete="NomP"
                                    

                                />
                            </Grid>
                        </Grid>
                        <br/><br/>
                        <Grid item xs={12}>
                        <Card>
  <Card.Body>
                            <UploadFiles email={email} />
                        </Card.Body>
                        </Card>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                id="standard-multiline-static"
                                label="Lettre de motivation "
                                multiline
                                rows={4}
                                value={lettreMotiv}
                                onChange={e => setlettreMotiv(e.target.value)}
                            />
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            style={{ backgroundColor: '#4cd137', color: 'black' }}
                            className={classes.submit}
                            onClick={handleClick}

                        >
                           Envoyer une demande
                        </Button>
                       
                    </form>
                </div>
            </Grid>
            <Grid item xs={12} sm={8} md={5} className={classes.image} />
        </Grid>
    );
}



