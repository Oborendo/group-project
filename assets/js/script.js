// // 2 differnt pages
// // search 
// // dropdown menu for formats
// // click button
// split 1/3 and 2/3
// Headers
// keeps current location search in local Storage
// dropdown menu 
// search button 
// go back button linked 
// 2/3
// header
// boxes containing search text and link to more

// use an array of search names so nothing has to be after s to get results
var myHeaders = new Headers();
myHeaders.append("Cookie", "__cfduid=d0916ccb9f7d46f2ec8dce7ddf39a97cd1612643777");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("http://www.omdbapi.com?s=par&apikey=d1d991fc&y=2001&type=movie&page=1", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));