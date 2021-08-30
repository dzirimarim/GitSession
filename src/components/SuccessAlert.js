import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import { browserHistory } from '..';
import { Link } from 'react-router-dom';

export default function AlertDialog() {

  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

  const handleClose = () => {
    browserHistory.goForward('/');
    
  };
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <div className={classes.root}>
      <Collapse in={open} >
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                browserHistory.push('/');
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
             
            </IconButton>}>
          Done successfully !!
        </Alert>
      </Collapse>
    
    </div>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}