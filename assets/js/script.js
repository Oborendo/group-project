
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

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};



search0.addEventListener("click" , function () {
  //click works
  console.log("click");
  var year = document.getElementById("year").value;
  // fetch("https://api.themoviedb.org/3/discover/movie?api_key=b604796e41f8ebf14ff8be62a4319577&primary_release_year=" + year, requestOptions)
  // .then(response => response.text())
  //   .then(result => console.log(result))
  //   .catch(error => console.log('error', error));

  // city = localStorage.getItem(localStorage.key(0));
 movie(year);
});
search1.addEventListener("click", function () {
  var actor = document.getElementById("actor").value;

  // fetch("https://api.themoviedb.org/3/search/person?api_key=b604796e41f8ebf14ff8be62a4319577&language=en-US&query=" + actor + "&page=1&include_adult=false", requestOptions)
  // .then(response => response.text())
  //   .then(result => console.log(result))
    // .catch(error => console.log('error', error));
  // city = localStorage.getItem(localStorage.key(0));
 movie(actor);
});

search2.addEventListener("click", function () {
  var type = document.getElementById("length").value;
  // fetch("https://api.themoviedb.org/3/" + type + "/popular?api_key=b604796e41f8ebf14ff8be62a4319577&language=en-US&page=1 ", requestOptions)
  // .then(response => response.text())
  //   .then(result => console.log(result))
  //   .catch(error => console.log('error', error));
  // city = localStorage.getItem(localStorage.key(0));
 movie(type);
});



// search3.addEventListener("click", function () {
//   //click works
//   console.log("click");
//   // city2 = localStorage.getItem(localStorage.key(3));
//   // cityWheather(city2);
// });
// search4.addEventListener("click" , function () {
//   //click works
//   console.log("click");
//   // city2 = localStorage.getItem(localStorage.key(4));
//   // cityWheather(city2);
// });
// search5.addEventListener("click" , function () {
//   //click works
//   console.log("click");
//   // city2 = localStorage.getItem(localStorage.key(4));
//   // cityWheather(city2);
// });


// function updateDisplay() {
//   for (i = 0; i < localStorage.length; i++) {
//     $(`#search${i}`).text(localStorage.getItem(localStorage.key(i)))
//   }
//   return;
// }


function movie(year) {
  fetch("https://api.themoviedb.org/3/discover/movie?api_key=b604796e41f8ebf14ff8be62a4319577&primary_release_year=" + year, requestOptions)
  .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

    fetch("https://api.themoviedb.org/3/search/person?api_key=b604796e41f8ebf14ff8be62a4319577&language=en-US&query=" + actor + "&page=1&include_adult=false", requestOptions)
    .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    fetch("https://api.themoviedb.org/3/" + type + "/popular?api_key=b604796e41f8ebf14ff8be62a4319577&language=en-US&page=1 ", requestOptions)
    .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));



  console.log(result);
 
  // fetch("https://api.themoviedb.org/3/discover/movie?api_key=b604796e41f8ebf14ff8be62a4319577&primary_release_year=" + year, requestOptions)
  // .then(response => response.text())
  //   .then(result => console.log(result))
  //   .catch(error => console.log('error', error));
  // // var movie = $("#movie").val().trim();
 
 
// var myHeaders = new Headers();
//   myHeaders.append("Cookie", "__cfduid=d0916ccb9f7d46f2ec8dce7ddf39a97cd1612643777");

//   fetch("http://www.omdbapi.com?s=use&apikey=d1d991fc&type=movie&page=1", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));
//   // localStorage.setItem("key",);
};