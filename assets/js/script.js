//API Key Variables
var APITicketMaster = "Bf30TtLUQxcKHdqHqQWR0a13lcphJbg5"; //TicketMaster API Key 
var APILastFm = "64ea64681b70d9776ad3714be43dc7de"; //LastFM API Key

//Gloabl Variables 
var date = new Date(data.dt * 1000);
var day = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();
var artistNameSearch = document.querySelector("#artist-name-search"); //Variable for Artist Name search input field
var genreTypeSearch = document.querySelector("#genre-type-search"); // Variable for the type of Genre searched.
var locationSearched = document.querySelector("#location-searched"); // Variable for Location searched.
var genreContainerEl = document.querySelector(".showsbygenre"); // Variable for container to hold returned shows by genre
var showsTonightContainerEl = document.querySelector(".showstonight"); // Variable for container to hold returned shows for tonight. 




//Fetch call to TicketMaster to get Event data for dates, venues
fetch("https://app.ticketmaster.com/discovery/v2/events.json?city=Charlotte&apikey=" + APITicketMaster)
.then (ticketMaster => {
    console.log(ticketMaster);
    return ticketMaster.json()
}) 
.then (ticketInfo => {
    console.log(ticketInfo)
});

//Fetch to LastFM to get Artist info/popular songs/
fetch("http://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=disco&api_key=" + APILastFm + "&format=json")
.then (getLastFM  => {
    console.log(getLastFM);
    return getLastFM.json();
})
.then (getPopularArtist => {
    console.log(getPopularArtist)
});