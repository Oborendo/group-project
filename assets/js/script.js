
// event listener for search 
// pull data from api
// save data in local storage
// add data to cards on left as clickable researches
// once selcted go to different page for results

var start = document.getElementById("movie");
var search0 = document.getElementById("search0");
var search1 = document.getElementById("search1");
var search2 = document.getElementById("search2");
var search3 = document.getElementById("search3");
var search4 = document.getElementById("search4");
// // history search clicks
search0.addEventListener("click" , function () {
  //click works
  console.log("click");
  // city = localStorage.getItem(localStorage.key(0));
  // cityWheather(localStorage.getItem(localStorage.key(0)));
});
search1.addEventListener("click", function () {
  //click works
  console.log("click");
  // city2 = localStorage.getItem(localStorage.key(1));
  // cityWheather(city2);
});
search2.addEventListener("click", function () {
  //click works
  console.log("click");
  // city2 = localStorage.getItem(localStorage.key(2));
  // cityWheather(city2);
});
search3.addEventListener("click", function () {
  //click works
  console.log("click");
  // city2 = localStorage.getItem(localStorage.key(3));
  // cityWheather(city2);
});
search4.addEventListener("click" , function () {
  //click works
  console.log("click");
  // city2 = localStorage.getItem(localStorage.key(4));
  // cityWheather(city2);
});
search5.addEventListener("click" , function () {
  //click works
  console.log("click");
  // city2 = localStorage.getItem(localStorage.key(4));
  // cityWheather(city2);
});


// function updateDisplay() {
//   for (i = 0; i < localStorage.length; i++) {
//     $(`#search${i}`).text(localStorage.getItem(localStorage.key(i)))
//   }
//   return;
// }
function cityWheather(city2) {
  console.log("connected");
  console.log(city);

  e.preventDefault();
  console.log("hi");
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
  // localStorage.setItem("key",);
};