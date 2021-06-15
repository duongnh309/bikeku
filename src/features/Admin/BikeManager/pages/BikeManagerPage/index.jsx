
// import { useSnackbar } from 'notistack';
import { nanoid } from 'nanoid';
import React, { useEffect, useState } from 'react';
import productApi from '../../../../../api/productApi';
// import { useNoti, useStopNoti } from '../../../../NotiHubContext';
import MainTable from '../../components/MainTable';


BikeManagerPage.propTypes = {

};


function BikeManagerPage(props) {

  const userName = JSON.parse(localStorage.getItem('user')).name;

  //(_) SignalR
  // const {enqueueSnackbar,closeSnackbar} = useSnackbar();
  // const bikesInLowQuantity = useNoti();
  // const stopNoti = useStopNoti();
  // useEffect(()=>{
  //   if(bikesInLowQuantity){
  //     bikesInLowQuantity.forEach(bike => {
  //       enqueueSnackbar(`Product ${bike.name} with id '${bike.id}' has quantity lower than the minunum one!`, { variant: 'success' });
  //     });
  //   }
  //   return stopNoti();;
  // },[bikesInLowQuantity])

  return (
    <div>
      <div id="page-wrapper">
        <div id="page-inner">
          <div className="row">
            <div className="col-md-12">
              <h2>Bike Manager</h2>
              <h5>Welcome {userName} , Love to see you back. </h5>
            </div>
          </div>
          <hr></hr>
          {/* /. ROW  */}
          <MainTable key={nanoid()}/>
        </div>
      </div>
    </div>


  );
}

export default BikeManagerPage;