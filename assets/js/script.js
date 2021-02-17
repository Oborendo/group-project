

// links all to html 
var search0 = document.getElementById("search0");
var search1 = document.getElementById("search1");
var search2 = document.getElementById("search2");
var search3 = document.getElementById("search3");
var search4 = document.getElementById("search4");

// makes available globaly
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};





// click function
search0.addEventListener("click", function () {
  var year = document.getElementById("year").value;
  fetch("https://api.themoviedb.org/3/discover/movie?api_key=b604796e41f8ebf14ff8be62a4319577&sort_by=popularity.desc&primary_release_year=" + year, requestOptions)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("NETWORK RESPONSE NOT OK");
      }
    })
    .then(function (data) {
for (let i= 0; i< 6; i++) {
 
  

      console.log(data);
      document.querySelector("#liYear").innerHTML = ""
      var title = document.createElement("H2")
      var description = document.createElement("div")
      title.innerHTML = data.results[i].original_title
      description.innerHTML = data.results[i].overview
      document.querySelector("#list-year").appendChild(title);
      document.querySelector("#list-year").appendChild(description);
   
}
      return;
     
      
    });
});


search1.addEventListener("click", function () {
  var actor = document.getElementById("actor").value;
  fetch("https://api.themoviedb.org/3/search/person?api_key=b604796e41f8ebf14ff8be62a4319577&language=en-US&query=" + actor + "&page=1&include_adult=false", requestOptions)
    .then((response2) => {
      if (response2.ok) {
        return response2.json();
      } else {
        throw new Error("NETWORK RESPONSE NOT OK");
      }
    })
    .then(function (data) {
     console.log(data); 
     for (let i= 0; i< 6; i++) {
 
     document.querySelector("#liActor").innerHTML = ""
     var title = document.createElement("H2")
      var description = document.createElement("P")
     title.innerHTML = data.results[0].known_for[i].title
    description.innerHTML =data.results[0].known_for[i].overview
     document.querySelector("#list-actor").appendChild(title);
    document.querySelector("#list-actor").appendChild(description);
     }
     return;
    });
});


search2.addEventListener("click", function () {
  var type = document.getElementById("length").value;
  fetch("https://api.themoviedb.org/3/" + type + "/popular?api_key=b604796e41f8ebf14ff8be62a4319577&language=en-US&page=1 ", requestOptions)
    .then((response3) => {
      if (response3.ok) {
        return response3.json();
      } else {
        throw new Error("NETWORK RESPONSE NOT OK");
      }
    })
    .then(function (data) {
      for (let i = 0; i < 6; i++) {
        console.log(data);
                document.querySelector("#liPopular").innerHTML = ""
                var popular = document.createElement("H2")
                var popular1 = document.createElement("H2")
                var description2 = document.createElement("P")
                if(data.results[i].name == undefined){
           
                popular1.innerHTML = data.results[i].title
                description2.innerHTML = data.results[i].overview

                }else if (data.results[i].title == undefined){

                 popular.innerHTML = data.results[i].name
                description2.innerHTML = data.results[i].overview
                }
                document.querySelector("#list-popular").appendChild(popular);
                document.querySelector("#list-popular").appendChild(popular1);
                document.querySelector("#list-popular").appendChild(description2);
              }
              return;
           
            });
        });
