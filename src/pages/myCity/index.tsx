import React, { useEffect, useState } from 'react';
import { getSaveCityList } from '../../models/model';
import axios from "axios";
import weather from '../../assets/images/myweather.png'

function Index() {

  const apiKey = "f56f24967aaf51182d1d4df628297c6d"

  const [city, setCity] = useState<any>([]);
  const [show, setShow] = useState<any>(false);
  const [data, setData] = useState<any>({})


  const handleClose = () => setShow(false);

  const handleShow = (item: any, i: number) => {
    setShow(true);
    console.log(item.name)
    getWetherDetails(item.name)
  };


  const getWetherDetails = (cityName: any) => {
    if (show) return
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
    axios.get(apiURL).then((res) => {
      console.log("response", res.data)
      setData(res.data)
    }).catch((err) => {
      console.log("err", err)
    })
  }


  useEffect(() => {
    getSaveCityList([])
      .then(response => response.data)
      .then(data => {
        try {
          console.log(data)
          setCity([...data.data]);
          // console.log(data.city.name)
        } catch (error) {
          console.log(error)
        }
      })
      .catch(error => {
        console.log(error)
        // _setSnackMessage("Something Went Wrong Please try again");
      })
    // _setSnackMessage("");
  }, [])

  return (
    <div className='fullcl row justify-content-center'>
      <h2>My City</h2>
        {show && 
      <div className='wetherResultBox col-md-8 shadow rounded bg-white text-center py-5 my-5'>
            <div>
              <img className="weathorIcon"
                src={weather} style={{ width: "10rem" }} />
            </div>
              <h5 className="my-3">
                {data?.name}
              </h5>
              <h6 className="my-3">{((data?.main?.temp) - 273.15).toFixed(2)}°C</h6>
            <div className="my-3">
              <button className='btn btn-primary' onClick={handleClose}>
                Close
              </button>
            </div>
      </div>}

      {city.map((item: any, i: number) => {
        // console.log(city.name)
        return (
          <div className='row mt-5 justify-content-center align-items-center border mx-5' key={i}>
            <div className='col-md-4 my-3 py-2 fs-4'>{item.name}</div>
            <div className='col-md-4'>
              <button className='btn btn-primary' onClick={() => handleShow(item, i)}>Weather Information</button>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Index;