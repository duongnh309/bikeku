
// import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';
import productApi from '../../../../../api/productApi';
// import { useNoti, useStopNoti } from '../../../../NotiHubContext';
import MainTable from '../../components/MainTable';


BikeManagerPage.propTypes = {

};


function BikeManagerPage(props) {

  

  useEffect(() => {
    fetchDataFormApi();
  }, []);
  const [bikes, setBikes] = useState([]);
  const fetchDataFormApi = async () => {
    const response = await productApi.getAll();
    const bikeFromApi = response.data;
    setBikes(bikeFromApi);
  }

  const deleteABike = (id) => {
    console.log(id);
  }

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
              <h5>Welcome Hieu , Love to see you back. </h5>
            </div>
          </div>
          <hr></hr>
          {/* /. ROW  */}
          <MainTable bikes={bikes} deleteABike={deleteABike} />
        </div>
      </div>
    </div>


  );
}

export default BikeManagerPage;