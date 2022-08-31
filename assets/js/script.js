$(document).ready() 

var APIGenius = "13b920321cmshfcc89781b090ab3p1ad43bjsnebb5eaf338d3"; //Genius/Rapid API Key



//Global Variables 
var date = new Date();
var day = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();
var searchFormEl = document.querySelector("#search-form"); // Variable for search form element
var genreTypeSearch = document.querySelector("#genresearched"); // Variable for the type of Genre searched.
var genreContainerEl = document.querySelector(".showsbygenre"); // Variable for container to hold returned shows by genre 
var topFiveContainerEl = document.querySelector(".top-Five"); // Variable for Div to hold returned top five songs from Shazam API
var savedGenres = []; // Array to store history of searched Artists
var searchbutton = document.querySelector("#search-button"); 


//**** On Click Functions ****//
//Modal Functions
const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

// document.addEventListener("click", e => {
//   if (e.target == document.querySelector(".modal.is-visible")) {
//     document.querySelector(".modal.is-visible").classList.remove(isVisible);
//   }
// });

// document.addEventListener("keyup", e => {
//   // if we press the ESC
//   if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
//     document.querySelector(".modal.is-visible").classList.remove(isVisible);
//   }
// });

// Get results
function showmodal () {
  document.querySelector("#modal1").classList.add(isVisible);
}
function search () {
    let input = document.getElementById('genresearched').value 
    if (!search || search.length === 0) {
      showmodal ()
    }
    console.log("searchForm", input);
    input = input.toLowerCase ();
    let x = document.getElementsByClassName('genresearched');
}

searchbutton.addEventListener("click", search);

// get value from search elements
// var searchForm = search.value;






// **** Create Click Event Handler for search form ****//
var formSubmitHandler = function (event) {
    
    if (!genreTypeSearch.value) {
        return;
    }
  
    event.preventDefault();
   
    var search = document.getElementById('genresearched').value; 
    if (search.length<1) {
      showmodal()
    }
      else {
      //Save searched genre into local storage
        savedGenres.push(search);
        localStorage.setItem("genresSearch", JSON.stringify(savedGenres));
 
 

    console.log(search);
    getGenre(search);
    getTopFive(search);

    genreTypeSearch.value = "";
      }
   
};
    







// ****** Fetch call to Shazam Rapid API to get top Five songs in US *****//

var getTopFive = function (topFive) {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '167cf18937msh0de257d271840fbp18e791jsndfda729eda53',
            'X-RapidAPI-Host': 'shazam-song-recognizer.p.rapidapi.com'
        }
    };
    
    fetch('https://shazam-song-recognizer.p.rapidapi.com/top_country_tracks?country_code=US&limit=5&start_from=0', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
        console.log("artist top 5");


         // Empty Top Five Container for new data
 //topFiveContainerEl.textContent = "";

displayTopFive();
 

};

// *** Display Top Five Songs results from Shazam Rapid API ***//
var displayTopFive = function(topFive){
   var topFiveArray = topFive[i].result.tracks;
    console.log("returned artists, songs searched");


    // loop over Top Five data 
    for (var i=0; i < topFiveArray.length; i++) {

       
        var coverArt = topFiveArray[i].result.tracks.images.coverart;
        var popularSongs = topFiveArray[i].result.tracks;
       
        var trackEl = document.createElement("div");
        trackEl.className = "track";
        trackEl.innerHTML = "<p>" + popularSongs + "</p>" +
            "<p>" + coverArt + "</p>";
            "<p>Artist: " + topFiveArray[i].result.tracks[i].artists;
          
        topFiveContainerEl.append(trackEl);
 
    };



// Display Top Five Songs in US
var topFiveUS = document.createElement('div');
topFiveUS.id = "topFiveUS";
topFiveUS.innerHTML = "Similar results by Genre";
topFiveContainerEl.append(topFiveUS);


};







//***** API CALL TO GENIUS API ******//


    function getGenre(search) {

        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '167cf18937msh0de257d271840fbp18e791jsndfda729eda53',
                'X-RapidAPI-Host': 'genius.p.rapidapi.com'
            }
        };
        
        fetch('https://genius.p.rapidapi.com/search?q=' + search, options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
        

    };

   

    // *** Display Searched results from Genius Rapid API ***//
    var displaySearchedResults = function(searchResults){
    console.log("returned artists, songs searched");

     // Empty Shows Tonight Container for new data
    genreContainerEl.textContent = "";

//check for returned events info from TicketMaster API
if (searchResults.length === 0) {
    genreContainerEl.textContent = "No Results to Display.";
    return;
}

//** Display Artist/Song info that was searched **//
// var eventName = document.createElement('div');
// eventName.id = "eventname";
// eventName.innerHTML = "Upcoming Shows ";
// showsTonightContainerEl.append(eventName);

// // Display shows searched by genre
// var eventsGenre = document.createElement('div');
// eventsGenre.id = "eventsGenre";
// eventsGenre.innerHTML = "Shows by Genre";
// genreContainerEl.append(eventsGenre);



};












    // **** Local Storage -load zipcodes and artists searched to localStorage **** //

var loadSavedGenres = function (savedSearch) {
    searchArray = JSON.parse(localStorage.getItem("genresSearch"));

    if (searchArray) {
        console.log(searchArray);
        savedGenres = JSON.parse(localStorage.getItem("genresSearch"));
        for (let i = 0; i < searchArray.length; i++) {
            
        }
    }
};





//Add event listener for button click on search
searchFormEl.addEventListener("submit", formSubmitHandler);
