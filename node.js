let axios = require('axios');
let data = {
    method: 'get',
    url: 'https://maps.googleapis.com/maps/api/directions/json?key=AIzaSyB91qWcIYdNFzt2Inwc3Zrmu5R1EuTfbuY&origin=Toronto&destination=Montreal&alternatives=true&avoid=tolls&mode=driving',
    headers: { },
    origin:'gps.html'
};
axios(data)
.then(function (response) {
    json = JSON.stringify(response.data)
    console.log(json);
})
.catch(function (error) {
    console.log(error);
});