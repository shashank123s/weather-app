
import { LoadingButton } from "@mui/lab";
import { TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import SnackbarController from "../../components/helpers/SnackbarController";
import SnackbarControllerSuccess from "../../components/helpers/SnackbarControllerSuccess";
import weather from '../../assets/images/myweather.png'


function Index() {

  const apiKey = "f56f24967aaf51182d1d4df628297c6d"
  const [inputCity, setInputCity] = useState("")
  const [data, setData] = useState<any>({})
  const [_snackMessage, _setSnackMessage] = useState('');
  const [_snackMessageSuccess, _setSnackMessageSuccess] = useState('');


  const getWetherDetails = (cityName: any) => {
    if (!cityName) return
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
    axios.get(apiURL).then((res) => {
      console.log("response", res.data)
      _setSnackMessage("success")
      setData(res.data)
    }).catch((err) => {
      _setSnackMessage("please enter correct city name")
      console.log("err", err)
    })
  }

  const handleChangeInput = (e: any) => {
    console.log("value", e.target.value)
    setInputCity(e.target.value)
  }

  const handleSearch = () => {
    getWetherDetails(inputCity)
  }


  return (
    <div>
      <h2 className="heading">Weather App</h2>
      <h4>Search Weather of Your City's</h4>
      <div className="my-4">
        <div className="mt-4">
          <TextField type="text" className="bg-white"
            variant="outlined"
            label="Enter City Name"
            value={inputCity}
            onChange={handleChangeInput} />
          <div className="mt-4">
            <LoadingButton
              type="button"
              variant="contained"
              onClick={handleSearch}
            >Search</LoadingButton>
          </div>
        </div>
      </div>

      {Object.keys(data).length > 0 &&
        <div className="col-md-12 text-center py-4">
          <div className="shadow rounded--1 bg-white py-4">
            <img className="weathorIcon"
              src={weather} style={{width: "12rem" }} alt="weather img"/>

            <h4 className="weathorCity">
              {data?.name}
            </h4>
            <h5 className="weathorTemp">{((data?.main?.temp) - 273.15).toFixed(2)}°C</h5>
          </div>
        </div>
      }
      <SnackbarController message={_snackMessage} />
      <SnackbarControllerSuccess message={_snackMessageSuccess} />
    </div>
  );
}

export default Index;