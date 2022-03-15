import axios from 'axios';

export default function geocode(latitude, longitude, language = 'fa') {
  const access_token =
    'pk.eyJ1IjoiYWxpdnAiLCJhIjoiY2wwamhhMGR2MDBsMjNjbDFwZXR1cDZ2NCJ9.KpC8xYmNBj0KgJ7lZ-zTVw';

  return axios.get(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json`,
    {params: {access_token: access_token, language: language}},
  );
}
