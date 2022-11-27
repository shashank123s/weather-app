import React, { useEffect, useState } from 'react';
import SnackbarController from '../../components/helpers/SnackbarController';
import SnackbarControllerSuccess from '../../components/helpers/SnackbarControllerSuccess';
import { getUserList } from '../../models/model';

function Index() {
  const [_snackMessage, _setSnackMessage] = useState('');
  const [_snackMessageSuccess, _setSnackMessageSuccess] = useState('');
  const [mydata, setMydata] = useState<any>([]);

  useEffect(() => {
    getUserList({})
      .then(response => response.data)
      .then(data => {
        try {
          console.log(data)
          setMydata([...data.data]);
          _setSnackMessageSuccess("success")
        } catch (error) {
          console.log(error)
        }
      })
      .catch(error => {
        console.log(error)
        _setSnackMessage("Something Went Wrong Please try again");
      })
    _setSnackMessage("");
  }, [])


  return (<>
    <SnackbarController message={_snackMessage} />
    <SnackbarControllerSuccess message={_snackMessageSuccess} />
    <h2>All User List</h2>
    <div className='my-3'>
    {mydata.map((item: any, i: number) => {
      return (
        <ul key={i}>
          <li>{item.name}</li>
        </ul>
      )
    })}
    </div>
  </>)
}

export default Index;