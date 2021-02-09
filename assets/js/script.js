// event listener for search 
// pull data from api
// save data in local storage
// add data to cards on left as clickable researches
// once selcted go to different page for results]

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("https://api.themoviedb.org/3/discover/movie?api_key=b604796e41f8ebf14ff8be62a4319577&primary_release_year=2000", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

// var movie = $("#movie").val().trim();
var myHeaders = new Headers();
myHeaders.append("Cookie", "__cfduid=d0916ccb9f7d46f2ec8dce7ddf39a97cd1612643777");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("http://www.omdbapi.com?s=use&apikey=d1d991fc&type=movie&page=1", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));