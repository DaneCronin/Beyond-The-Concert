var APITicketMaster = "Bf30TtLUQxcKHdqHqQWR0a13lcphJbg5"; //TicketMaster API Key 
var APILastFm = "64ea64681b70d9776ad3714be43dc7de"; //LastFM API Key
var band = []
var count = 0

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

let LastFM0 = 'https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + band[0] + '&api_key=78661b1408a61c6f77a83efc09f78da4&format=json'
fetch(LastFM0)
    .then(
        function (response) {
            return response.json();
        })
    .then(data => {
        $(".artistInfoResults0").empty();
        var artistInfo = data.artist.bio.summary
        $(".artistInfoResults0").text(artistInfo)
    })
let LastFM1 = 'https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + band[1] + '&api_key=78661b1408a61c6f77a83efc09f78da4&format=json'
fetch(LastFM1)
    .then(
        function (response) {
            return response.json();
        })
    .then(data => {
        var artistInfo = data.artist.bio.summary
        $(".artistInfoResults1").text(artistInfo)
    })
let LastFM2 = 'https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + band[2] + '&api_key=78661b1408a61c6f77a83efc09f78da4&format=json'
fetch(LastFM2)
    .then(
        function (response) {
            return response.json();
        })
    .then(data => {
        var artistInfo = data.artist.bio.summary
        $(".artistInfoResults2").append(artistInfo)
    })
let LastFM3 = 'https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + band[3] + '&api_key=78661b1408a61c6f77a83efc09f78da4&format=json'
fetch(LastFM3)
    .then(
        function (response) {
            return response.json();
        })
    .then(data => {
        var artistInfo = data.artist.bio.summary
        $(".artistInfoResults3").append(artistInfo)
    })
let LastFM4 = 'https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + band[4] + '&api_key=78661b1408a61c6f77a83efc09f78da4&format=json'
fetch(LastFM4)
    .then(
        function (response) {
            return response.json();
        })
    .then(data => {
        var artistInfo = data.artist.bio.summary
        $(".artistInfoResults4").append(artistInfo)
    });



