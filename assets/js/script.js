
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
var listYear = document.getElementById("list-year");
var listActor = document.getElementById("list-actor");
var listPopular = document.getElementById("list-popular");

  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

// for input values
// var year = document.getElementById("year").value;
// var actor = document.getElementById("actor").value;




search0.addEventListener("click" , function () {
  var year = document.getElementById("year").value;
 fetch("https://api.themoviedb.org/3/discover/movie?api_key=b604796e41f8ebf14ff8be62a4319577&primary_release_year=" + year, requestOptions)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE NOT OK");
    }
  })
  .then(function (data) {   
    console.log(data); 
  listYear.textContent(data);
  return;
  // city = localStorage.getItem(localStorage.key(0));
});
});
search1.addEventListener("click", function () {
var actor = document.getElementById("actor").value;
fetch("https://api.themoviedb.org/3/search/person?api_key=b604796e41f8ebf14ff8be62a4319577&language=en-US&query=" + actor + "&page=1&include_adult=false", requestOptions)
.then((response) => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("NETWORK RESPONSE NOT OK");
  }
})
.then(function (data) {   
  console.log(data); 
  listActor.textContent(data);
  return;
// city = localStorage.getItem(localStorage.key(0));
});
});
search2.addEventListener("click", function () {
var type = document.getElementById("length").value;
fetch("https://api.themoviedb.org/3/" + type + "/popular?api_key=b604796e41f8ebf14ff8be62a4319577&language=en-US&page=1 ", requestOptions)
.then((response) => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("NETWORK RESPONSE NOT OK");
  }
})
.then(function (data) {   
  console.log(data); 
  listPopular.textContent(data);
  return;
// city = localStorage.getItem(localStorage.key(0));
});
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

