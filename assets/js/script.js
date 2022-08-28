//API Key Variables
var APITicketMaster = "Bf30TtLUQxcKHdqHqQWR0a13lcphJbg5"; //TicketMaster API Key 
var APILastFm = "64ea64681b70d9776ad3714be43dc7de"; //LastFM API Key

//Gloabl Variables 
var date = new Date();
var day = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();
var searchFormEl = document.querySelector("#search-form"); // Variable for search form element
var artistNameSearch = document.querySelector("#artist-name-search"); //Variable for Artist Name search input field
var genreTypeSearch = document.querySelector("#genre-type-search"); // Variable for the type of Genre searched.
var postalCodeSearched = document.querySelector("#postal-searched"); // Variable for Location searched.
var genreContainerEl = document.querySelector(".showsbygenre"); // Variable for container to hold returned shows by genre
var showsTonightContainerEl = document.querySelector(".showstonight"); // Variable for container to hold returned shows for tonight. 




// Create Click Event Handler for search form
var formSubmitHandler = function (event) {
    event.preventDefault();

    var postalCode = postalCodeSearched.value.trim();

      //check for valid zipCode
      const isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(postalCode);
      
    if (isValidZip === true) {
        console.log(isValidZip);

        //call getEventInfo function
        getEventInfo(postalCode);

    } else {
        alert("Please enter zip code");
    }

    console.log("zip code");
};


//Fetch call to TicketMaster to get Event data for dates, venues
var getEventInfo = function (eventInfo) {
fetch("https://app.ticketmaster.com/discovery/v2/events.json?postalcode=" + postalCodeSearched + "&apikey=" + APITicketMaster)
.then (ticketMaster => {
    console.log(ticketMaster);
    return ticketMaster.json()
}) 
.then (ticketInfo => {
    console.log(ticketInfo)

   // var eventstonight = ticketmaster.event


// Empty Shows Tonight Container for new data
showsTonightContainerEl.textContent = "";



});
};

//Display events by zip code to shows tonight 
var displayShowsTonight = function(eventInfo){
console.log("returned shows by zip code");

//check for returned events info from TicketMaster API
if (eventInfo.length === 0) {
    showsTonightContainerEl.textContent = "No Shows to Display.";
    return;
}

// Display Event/artist Name
var eventName = document.createElement('h5');
eventName.id = "eventname";
eventName.innerHTML = "Artist: ";
showsTonightContainerEl.append(eventName);

};




//Fetch to LastFM to get Artist info/popular songs/
fetch("http://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=disco&api_key=" + APILastFm + "&format=json")
.then (getLastFM  => {
    console.log(getLastFM);
    return getLastFM.json();
})
.then (getPopularArtist => {
    console.log(getPopularArtist)
});


//Add event listener for button click on search
searchFormEl.addEventListener("submit", formSubmitHandler);