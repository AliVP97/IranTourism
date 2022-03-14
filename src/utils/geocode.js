import axios from 'axios';

export default function geocode(latitude, logitude) {
  const access_token =
    'pk.eyJ1IjoiYWxpdnAiLCJhIjoiY2wwamhhMGR2MDBsMjNjbDFwZXR1cDZ2NCJ9.KpC8xYmNBj0KgJ7lZ-zTVw';
  var config = {
    method: 'get',
    url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${logitude},${latitude}.json?access_token=${access_token}`,
  };

  axios(config)
    .then(res => {
      console.log(res);
    })
    .catch(error => console.log(error));
}
