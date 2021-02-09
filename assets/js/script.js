// event listener for search 
// pull data from api
// save data in local storage
// add data to cards on left as clickable researches
// once selcted go to different page for results

var start = document.getElementById("movie");






start.addEventListener("click", function start(e)

{
  e.preventDefault();
  console.log("hi");
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





  localStorage.setItem("key",);


});