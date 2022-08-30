$(document).ready() 
// var APIGenius = "13b920321cmshfcc89781b090ab3p1ad43bjsnebb5eaf338d3"; //Genius API Key
// var band = [];
// var count = 0;


// $(document).ready(function) {
   var APITicketMaster = "Bf30TtLUQxcKHdqHqQWR0a13lcphJbg5"; //TicketMaster API Key 
     var APILastFm = "64ea64681b70d9776ad3714be43dc7de"; //LastFM API Key
     var band = [];
     var count = 0;

   //  autocomplete(document.getElementById("user-input"), history)
  //   var resultsSection = $("results");

   // showMainPage();

// On Click Functions
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

document.addEventListener("click", e => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", e => {
  // if we press the ESC
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

// Get results

function search () {
    let input = document.getElementById('searchForm').value 
    input = input.toLowerCase ();
    let x = document.getElementsByClassName('genresearched');
}

// get value from search elements
var searchForm = search.value;



//if (artist) {
   // getUserRepos(artistNameSearch);
//}

//if (genresearch) {
  //  getElementById(genresearch);
//}

//if (locationsearch) {
 //   getUserRepos(locationsearch);
//}

//API Key Variables
 //var APITicketMaster = "Bf30TtLUQxcKHdqHqQWR0a13lcphJbg5"; //TicketMaster API Key 
 //var APILastFm = "64ea64681b70d9776ad3714be43dc7de"; //LastFM API Key
 //var band = [];
//var count = 0;

//Global Variables 
var date = new Date();
var day = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();
var searchFormEl = document.querySelector("#search-form"); // Variable for search form element
//var artistNameSearch = document.querySelector("#artist-name-search"); //Variable for Artist Name search input field
var genreTypeSearch = document.querySelector("#genre-type-search"); // Variable for the type of Genre searched.
var postalCodeSearched = document.querySelector("#postal-searched"); // Variable for Location searched.
var genreContainerEl = document.querySelector(".showsbygenre"); // Variable for container to hold returned shows by genre
var showsTonightContainerEl = document.querySelector(".upcomingshows"); // Variable for container to hold returned shows for tonight. 
var relatedGenreContainerEl = document.querySelector(".related-genre"); // Variable for Div to hold returned simlilar genre tags from LastFM API
//var genreSearched = genreTypeSearch.value.trim().toUpperCase();// Variable for user input from genre search
var savedPostalCode = []; // Array to store history of searched Zip Codes
var savedGenres = []; // Array to store history of searched Artists



// Create Click Event Handler for search form
var formSubmitHandler = function (event) {
    event.preventDefault();

    //Variables for Postal Code value and Genre Value from user input
    //var postalCode = postalCodeSearched.value.trim();
   // var postalCode = document.getElementById("postalCodeSearched").value;
    


      //check for valid zipCode
      // const isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(postalCode);
      
    //if (isValidZip === true) {
       // console.log(isValidZip);
          //Save searched zip codes into local storage
         // savedPostalCode.push(postalCode);
         // localStorage.setItem("postalcodeSearch", JSON.stringify(savedPostalCode));

        //call getEventInfo function
       // getEventInfo(postalCode);
      //  postalCode.value = "";

   // } else if (isValidZip === false || null) {
       // alert("Please enter zip code");
  //  }

    console.log("postalCode");

    //Check for valid Genre search 
    //var genreSearched = genreTypeSearch.value.trim().toUpperCase();
    //var genreSearched = document.getElementById("genresearched").value.trim().toUpperCase();

    //check for valid genre search

    
// MODAL JS
var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];


// When the user clicks on the button, open the modal

btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

    //if (genreSearched || postalCode) {
        if (genresearched.value === "") {
            alert("Please enter a valid genre");
            //Save searched genres into local storage
            savedGenres.push(genresearched);
            localStorage.setItem("genreSearched", JSON.stringify(savedGenres));
    
    
            //call TicketMaster API function and LastFm API function
            getEventInfo();
            // Call LastFM genre info searched as well? 
            //getSimilarGenres();
    
        } else {
        }
     
    
    };

//check for valid artist
// var artistNameSearch = document.getElementById("artistNamesearch").value.trim().toUpperCase();


//Fetch call to TicketMaster to get Event data for dates, venues
var getEventInfo = function (eventInfo) {
fetch("https://app.ticketmaster.com/discovery/v2/events.json?&postalcode=" + postalCodeSearched + "&includeSpellcheck=&apikey=" + APITicketMaster)
.then (ticketMaster => {
    console.log(ticketMaster);
    return ticketMaster.json()
}) 
.then (ticketInfo => {
    console.log(ticketInfo)

   




// Empty Shows Tonight Container for new data
showsTonightContainerEl.textContent = "";
//genreContainerEl.textContent = "";


});
};

//Display events by zip code to shows tonight 
var displayUpcomingShows = function(eventInfo){
console.log("returned shows by zip code");

//check for returned events info from TicketMaster API
if (eventInfo.length === 0) {
    showsTonightContainerEl.textContent = "No Shows to Display.";
    return;
}

// Display Event/artist Name
var eventName = document.createElement('div');
eventName.id = "eventname";
eventName.innerHTML = "Upcoming Shows ";
showsTonightContainerEl.append(eventName);

// Display shows searched by genre
var eventsGenre = document.createElement('div');
eventsGenre.id = "eventsGenre";
eventsGenre.innerHTML = "Shows by Genre";
genreContainerEl.append(eventsGenre);



};








//Fetch to LastFM to get similar genres 
var getSimilarGenres = function (getSimilar) {
fetch("http://ws.audioscrobbler.com/2.0/?method=tag.getsimilar&tag=" + genreSearched + "&tag.getinfo&tag=" + genreSearched + "&api_key=" + APILastFm + "&format=json")
.then (getSimilar  => {
    console.log(getSimilar);
    return getSimilar.json();
})
.then (getSimilar => {
    console.log(getSimilar)
});

// Empty You Might Like Container for new data
relatedGenreContainerEl.textContent = "";


// Display related info by genre
var relatedGenre = document.createElement('div');
relatedGenre.id = "relatedGenre";
relatedGenre.innerHTML = "Similar results by Genre";
relatedGenreContainerEl.append(eventsGenre);

};



// let LastFM0 = 'https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + band[0] + '&api_key=78661b1408a61c6f77a83efc09f78da4&format=json'
// fetch(LastFM0)
//     .then(
//         function (response) {
//             return response.json();
//         })
//     .then(data => {
//         $(".artistInfoResults0").empty();
//         var artistInfo = data.artist.bio.summary
//         $(".artistInfoResults0").text(artistInfo)
//     })
// let LastFM1 = 'https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + band[1] + '&api_key=78661b1408a61c6f77a83efc09f78da4&format=json'
// fetch(LastFM1)
//     .then(
//         function (response) {
//             return response.json();
//         })
//     .then(data => {
//         var artistInfo = data.artist.bio.summary
//         $(".artistInfoResults1").text(artistInfo)
//     })
// let LastFM2 = 'https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + band[2] + '&api_key=78661b1408a61c6f77a83efc09f78da4&format=json'
// fetch(LastFM2)
//     .then(
//         function (response) {
//             return response.json();
//         })
//     .then(data => {
//         var artistInfo = data.artist.bio.summary
//         $(".artistInfoResults2").append(artistInfo)
//     })
// let LastFM3 = 'https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + band[3] + '&api_key=78661b1408a61c6f77a83efc09f78da4&format=json'
// fetch(LastFM3)
//     .then(
//         function (response) {
//             return response.json();
//         })
//     .then(data => {
//         var artistInfo = data.artist.bio.summary
//         $(".artistInfoResults3").append(artistInfo)
//     })
// let LastFM4 = 'https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + band[4] + '&api_key=78661b1408a61c6f77a83efc09f78da4&format=json'
// fetch(LastFM4)
//     .then(
//         function (response) {
//             return response.json();
//         })
//     .then(data => {
//         var artistInfo = data.artist.bio.summary
//         $(".artistInfoResults4").append(artistInfo)
//     });









    //load zipcodes and artists searched to localStorage 

var loadSearchedZipCode = function (postalCode) {
    searchArray = JSON.parse(localStorage.getItem("postalcodeSearch"));

    if (searchArray) {
        console.log(searchArray);
        savedPostalCode = JSON.parse(localStorage.getItem("postalcodeSearch"));
        for (let i = 0; i < searchArray.length; i++) {
            
        }
       

    }
}





//Add event listener for button click on search
searchFormEl.addEventListener("submit", formSubmitHandler);


