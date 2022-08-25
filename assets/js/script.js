var APITicketMaster = "Bf30TtLUQxcKHdqHqQWR0a13lcphJbg5"; //TicketMaster API Key 
var APILastFm = "64ea64681b70d9776ad3714be43dc7de"; //LastFM API Key

fetch("https://app.ticketmaster.com/discovery/v2/events.json?city=Charlotte&apikey=" + APITicketMaster)
.then (ticketMaster => {
    console.log(ticketMaster);
    return ticketMaster.json()
}) 
.then (ticketInfo => {
    console.log(ticketInfo)
});


fetch("http://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=disco&api_key=" + APILastFm + "&format=json")
.then (getLastFM  => {
    console.log(getLastFM);
    return getLastFM.json();
})
.then (getPopularArtist => {
    console.log(getPopularArtist)
});