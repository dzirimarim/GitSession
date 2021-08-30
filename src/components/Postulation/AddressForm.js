import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function AddressForm() {
const [value , setValue] = useState("")
const handleChange = (e) => {
  setValue(e.target.value);
  console.log(`Typed =>  ${e.target.value}` );
  

};

  
  return (
    <React.Fragment>
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
            onChange = {handleChange}
            value = {value}
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
      
    </React.Fragment>
  );

}