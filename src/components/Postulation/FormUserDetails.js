import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Card } from '@material-ui/core';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  
  render() {
    const useStyles = makeStyles((theme) => ({
      appBar: {
        position: 'relative',
      },
      layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
          width: 600,
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      },
      paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
          marginTop: theme.spacing(6),
          marginBottom: theme.spacing(6),
          padding: theme.spacing(3),
        },
      },
      stepper: {
        padding: theme.spacing(3, 0, 5),
      },
      buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
      },
      button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
      },
    }));
    const { values, handleChange } = this.props;
    return (
      <>
      <CssBaseline />  
      <Card >
      <main className={useStyles.layout}>
        <Paper className={useStyles.paper}>
            <Typography variant="h6" gutterBottom>
        A propos de l'entreprise
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="nomEntreprise"
            name="nomEntreprise"
            label="Nom de votre entreprise"

            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="Int_poste"
            name="Int_poste"
            label="Intitulé du poste"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Adresse"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="ville"
            name="ville"
            label="Ville"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="pays"
            name="pays"
            label="pays"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="description" name="description" label="description de poste " fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phone"
            name="phone"
            label="Numéro de télépone"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="ou"
            name="ou"
            label="Où travaillent les employés ?"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="perm" value="yes" />}
            label="Recrutement permanent"
          />
        </Grid>
      </Grid>
      <div className={useStyles.buttons}>
                    <Button className={useStyles.buttons}>
                      Back
                    </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    className={useStyles.button}
                  >
                    Next
                  </Button>
                </div>
        </Paper>
        </main>
        </Card>
        </>

    );
  }
}

export default FormUserDetails;
