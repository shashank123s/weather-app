import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../configs/constants';
import { FormControl, FormHelperText, IconButton, InputAdornment, OutlinedInput, TextField, InputLabel } from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab';
import { useStateValue } from '../../providers/stateProvider';
import { getAccountsLogin } from '../../models/model';
import { authService } from '../../services/authService';
import { base64 } from '../../services/helperService';
import weather from '../../assets/images/myweather.png';

export default function Login() {
    const navigate = useNavigate();
    const [{ user }, dispatch]: any = useStateValue();
    const [_loadingLogin, _setLoadingLogin] = useState(false);
    const [_formData, _setFormData] = useState({ keyUser: '', keyPassword: '', showKeyPassword: false });
    const [_snackMessage, _setSnackMessage] = useState('');

    const validate = {
        keyUser: { error: false, message: "" },
        keyPassword: { error: false, message: "" }
    };

    const [_formValidate, _setFormValidate] = useState(validate);

    const setFormValue = (key: string, value: any) => {
        _setFormData({ ..._formData, [key]: value });
    };

    const loginSubmit = (e: any) => {
        e.preventDefault();
        _setLoadingLogin(true);
        const _validate: any = Object.assign({}, validate);
        let valid = true;

        if (!_formData.keyUser) {
            _validate.keyUser.error = true;
            _validate.keyUser.message = "Required Field";
            valid = false;
        }

        if (!_formData.keyPassword) {
            _validate.keyPassword.error = true
            _validate.keyPassword.message = "Required Field"
            valid = false;
        }

        if (!valid) {
            _setLoadingLogin(false);
            _setFormValidate(_validate);
            return;
        }

        getAccountsLogin(_formData)
            .then(response => {
                console.log(response)
                if (response?.status === 200) {
                    localStorage.setItem('temp', base64.encode(JSON.stringify(response.data)));
                    const _tempData = authService.user();
                    dispatch({
                        type: 'SET_USER',
                        user: _tempData,
                    });
                    navigate(paths.accounts.myCity);
                }
            }).catch(error => {
                if (error.response.status === 400) {
                    const _validate: any = Object.assign({}, validate);
                    if (Object.entries) {
                        const _error = error.response.data.error;
                        Object.entries(_error).forEach(([key, value]) => {
                            _validate[key].error = true;
                            _validate[key].message = value;
                        });
                        _setFormValidate(_validate);
                    }
                }
            }).finally(() => {
                _setLoadingLogin(false);
            })

    }

    useEffect(() => {
        const tempUser: any = authService.user();
        if (tempUser) {
            navigate(paths.accounts.myCity);
            return () => { };
        }
    }, [navigate]);

    return (<>
        <div className="text-white">
            <div className="text-center mb-3 bg-white rounded--2">
                <img src={weather} alt={"bharatRe"} style={{ width: '160px' }} />
            </div>
            <form method="post" onSubmit={loginSubmit} noValidate>
                <div className="mb-3">
                    <div>Email</div>
                    <FormControl fullWidth variant="outlined" error={_formValidate.keyUser.error}>
                        <OutlinedInput className="bg-white" label=" " placeholder="Enter Email Address" notched={false} type='email'
                            onChange={(e: any) => setFormValue("keyUser", e.target.value)}/>
                        <FormHelperText id="my-helper-text">{_formValidate.keyUser.message}</FormHelperText>
                    </FormControl>
                </div>
                <div className="mb-3">
                    <div>Password</div>
                    <FormControl fullWidth variant="outlined" error={_formValidate.keyPassword.error}>
                        <OutlinedInput className="bg-white" label=" " placeholder="Enter Password" notched={false}
                            type={_formData.showKeyPassword ? 'text' : 'password'}
                            onChange={(e: any) => setFormValue("keyPassword", e.target.value)}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => setFormValue('showKeyPassword', !_formData.showKeyPassword)}
                                        edge="end"
                                    >
                                        {_formData.showKeyPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                        <FormHelperText id="my-helper-text">{_formValidate.keyPassword.message}</FormHelperText>
                    </FormControl>
                </div>
                <div className='mt-5'>
                    <LoadingButton className="rounded--2" type={"submit"} color="secondary" variant="contained" loadingPosition="end"
                     endIcon={<></>} loading={_loadingLogin} fullWidth size="large">LOGIN</LoadingButton>
                </div>
            </form>
        </div >
    </>);
}