import { LoadingButton } from '@mui/lab';
import { TextField } from '@mui/material';
import React, { useState } from 'react'
import SnackbarController from '../../components/helpers/SnackbarController';
import SnackbarControllerSuccess from '../../components/helpers/SnackbarControllerSuccess';
import { addCity } from '../../models/model';

export default function Index() {

    const [name, setName] = useState('')
    const [weather, setWeather] = useState('')
    const [_snackMessage, _setSnackMessage] = useState('');
    const [_snackMessageSuccess, _setSnackMessageSuccess] = useState('');
     const [_createLoading, _setCreateLoading] = useState(false);


     const validate = {
        name: { error: false, message: '' },
        weather: { error: false, message: '' },
      };
    
      const [_formValidate, _setFormValidate] = useState(validate);

    const handlePost = (e: any) => {
        e.preventDefault();
        _setCreateLoading(true);
        const _validate: any = Object.assign({}, validate);
        let valid: boolean = true;
        if (!name) {
            _validate.name.error = true;
            _validate.name.message = "Required Field";
            valid = false;
        }
        if (!weather) {
            _validate.weather.error = true;
            _validate.weather.message = "Required Field";
            valid = false;
        }
    
        if (!valid) {
          _setCreateLoading(false);
          _setFormValidate(_validate);
          return;
        }


        const obj = {
            name: name,
            weather: weather
        }

        addCity(obj).then(response => response.data).then(data => {
          try {
              _setSnackMessageSuccess(data.status);
          } catch (error) {
          }
      }).catch(error => {
          if (error.response.data?.status === 'error') {
            console.log(error)
          } else {
              _setSnackMessage("Something Went Wrong Please try again");
          }
      }).finally(() => { _setCreateLoading(false); })
    _setFormValidate(_validate);
    _setSnackMessage('');
    _setSnackMessageSuccess('');
    }

    return (
        <>
            <h2>Add City</h2>
            <form className='mt-5' onSubmit={e => handlePost(e)} noValidate>
                <div className='my-4'>
                    <TextField variant='outlined'  className='bg-white' label="City Name" value={name} onChange={(e) => setName(e.target.value)} 
                    error={_formValidate.name.error} helperText={_formValidate.name.message}/>
                </div>
                <div className='my-4'>
                    <TextField variant='outlined'  className='bg-white' label="Temp" value={weather} onChange={(e) => setWeather(e.target.value)} 
                    error={_formValidate.weather.error} helperText={_formValidate.weather.message}/>
                </div>
                    <LoadingButton endIcon={<></>} variant="contained" type="submit" loadingPosition="end" loading={_createLoading} size="large">Add City</LoadingButton>
            </form>
            <SnackbarController message={_snackMessage} />
            <SnackbarControllerSuccess message={_snackMessageSuccess} />
        </>
    )
}
