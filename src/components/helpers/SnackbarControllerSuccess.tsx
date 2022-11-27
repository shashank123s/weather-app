import React, {useEffect, useState} from 'react';
import {Alert, Snackbar} from '@mui/material';
import {AlertColor} from '@mui/material/Alert/Alert';

interface props {
    severity?: AlertColor;
    message?: string;
}

function SnackbarControllerSuccess({severity = "success", message = ""}: props) {
    const [_open, _setOpen]       = useState(false);
    const [_message, _setMessage] = useState('');

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        _setMessage('');
        _setOpen(false);
    };

    useEffect(() => {
        _setMessage(message);
        _setOpen(message !== '');
    }, [message]);

    return (
        <Snackbar open={_open} onClose={handleClose} anchorOrigin={{horizontal: "center", vertical: "bottom"}} autoHideDuration={3000} sx={{minWidth: '25rem'}}>
            <Alert onClose={handleClose} severity={severity} variant={"filled"} sx={{width: '100%'}}>
                {_message}
            </Alert>
        </Snackbar>
    );
}

export default SnackbarControllerSuccess;