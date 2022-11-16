import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { deleteContact } from '../../redux/slice/contact.reducer'
import { Grid } from '@mui/material';
import { useDispatch } from 'react-redux';

export default function AlertDialog({ contact }) {
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handledelete = id => {
        dispatch(deleteContact(id))
        setOpen(false);
    }

    return (
        <Grid>
            <Button variant={'contained'} color={'error'} onClick={handleClickOpen}>Delete</Button>
            <Dialog
                open={open}
                onClose={handleClose}

            >
                <DialogContent>
                    <DialogContentText >
                        Are you sure you want to delete it?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>no</Button>
                    <Button onClick={() => handledelete(contact.id)} autoFocus>
                        yes
                    </Button>
                </DialogActions>
            </Dialog>
        </Grid>
    );
}