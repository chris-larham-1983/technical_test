let communicationError = document.querySelector("#communicationError"); // reference to 'communicationError' <span> element
let artistInfo = document.querySelector("#artistInfo"); //reference to 'artistInfo' <section> element
let tracksInfo = document.querySelector("#tracksInfo"); //reference to 'tracksInfo' <section> element
let followers = document.querySelector("#followers"); //reference to 'followers' <li> element
let popularity = document.querySelector("#popularity"); //reference to 'popularity' <span> element
let genres = document.querySelector("#genres"); //reference to 'genres' <li> element

let enabledOrDisabled = document.querySelector("#enabledOrDisabled"); //reference to 'enabledOrDisabled' <span> element
let enabledOrDisabled1 = document.querySelector("#enabledOrDisabled1"); //reference to 'enabledOrDisabled1' <span> element
let enabledOrDisabled2 = document.querySelector("#enabledOrDisabled2"); //reference to 'enabledOrDisabled2' <span> element
let enabledOrDisabled3 = document.querySelector("#enabledOrDisabled3"); //reference to 'enabledOrDisabled3' <span> element
let enabledOrDisabled4 = document.querySelector("#enabledOrDisabled4"); //reference to 'enabledOrDisabled4' <span> element
let enabledOrDisabled5 = document.querySelector("#enabledOrDisabled5"); //reference to 'enabledOrDisabled5' <span> element
let enabledOrDisabled6 = document.querySelector("#enabledOrDisabled6"); //reference to 'enabledOrDisabled6' <span> element
let enabledOrDisabled7 = document.querySelector("#enabledOrDisabled7"); //reference to 'enabledOrDisabled7' <span> element
let enabledOrDisabled8 = document.querySelector("#enabledOrDisabled8"); //reference to 'enabledOrDisabled8' <span> element
let enabledOrDisabled9 = document.querySelector("#enabledOrDisabled9"); //reference to 'enabledOrDisabled9' <span> element
let enabledOrDisabled10 = document.querySelector("#enabledOrDisabled10"); //reference to 'enabledOrDisabled10' <span> element

let outerDiv = document.querySelector("DIV"); //reference to the <DIV> element whose className is 'outer'

let track1 = document.querySelector("#track1"); //reference to 'track1' <section> element
let track2 = document.querySelector("#track2"); //reference to 'track2' <section> element
let track3 = document.querySelector("#track3"); //reference to 'track3' <section> element
let track4 = document.querySelector("#track4"); //reference to 'track4' <section> element
let track5 = document.querySelector("#track5"); //reference to 'track5' <section> element
let track6 = document.querySelector("#track6"); //reference to 'track6' <section> element
let track7 = document.querySelector("#track7"); //reference to 'track7' <section> element
let track8 = document.querySelector("#track8"); //reference to 'track8' <section> element
let track9 = document.querySelector("#track9"); //reference to 'track9' <section> element
let track10 = document.querySelector("#track10"); //reference to 'track10' <section> element

let authenticationXHTTP; //variable used to request a Spotify authentication token
let spotifyTokenJSON; //variable that holds the Spotify authentication JSON response
let spotifyTokenObj; //variable that represents the JSON.parsed Spotify authentication JSON response
let spotifyToken; //variable used to store the authentication token provided by the Spotify API

let xmlhttp; //variable used to request artist information
let xmlhttp2; //variable used to request tracks information

let artistJSON; //stores the Spotify API artist JSON response
let artistObj; //stores the JSON.parsed Spotify API artist JSON response
let totalFollowers; //stores the artist's number of Spotify followers
let genresArray; //refers to the artist's musical genres, as specified in artistObj.genres
let popularityRating; //refers to the artist's Spotify popularity rating, as specified in artistObj.popularity
let genresString = ":"; //String representation of all the genres in 'genresArray'

let figure1, figure2, figure3, figure4, figure5, figure6, figure7, figure8, figure9, figure10, figure11; //variables that will be added to/removed from DOM in response to the User's wish to see artist and track artwork
let figure1Array, figure2Array, figure3Array, figure4Array, figure5Array, figure6Array, figure7Array, figure8Array, figure9Array, figure10Array, figure11Array; //variables that will refer to the the various artist and track images returned in the Spotify JSON response
let figure1Image, figure2Image, figure3Image, figure4Image, figure5Image, figure6Image, figure7Image, figure8Image, figure9Image, figure10Image, figure11Image; //variables that will be used in the creation of the various artist and track images, prior to their storage in the various 'figure#Images'
let figure1Images = [], figure2Images = [], figure3Images = [], figure4Images = [], figure5Images = [], figure6Images = [], figure7Images = [], figure8Images = [], figure9Images = [], figure10Images = [], figure11Images = []; //variables that will store the created artist and track images
let figure1Index, figure2Index, figure3Index, figure4Index, figure5Index, figure6Index, figure7Index, figure8Index, figure9Index, figure10Index, figure11Index; //variables that will specify which element of the various image arrays are being displayed
let figure1URL, figure2URL, figure3URL, figure4URL, figure5URL, figure6URL, figure7URL, figure8URL, figure9URL, figure10URL, figure11URL; //variables that will store the various artist and track URLs, prior to their storage in the various 'figure#URLS' arrays
let figure1URLS = [], figure2URLS = [], figure3URLS = [], figure4URLS = [], figure5URLS = [], figure6URLS = [], figure7URLS = [], figure8URLS = [], figure9URLS = [], figure10URLS = [], figure11URLS = []; //variables that will store the URLs associated with the various artist and track images
let url1Index, url2Index, url3Index, url4Index, url5Index, url6Index, url7Index, url8Index, url9Index, url10Index, url11Index; //variables that will specify which element of the various URL arrays are being displayed
let figure1Figcaption, figure2Figcaption, figure3Figcaption, figure4Figcaption, figure5Figcaption, figure6Figcaption, figure7Figcaption, figure8Figcaption, figure9Figcaption, figure10Figcaption, figure11Figcaption; //variables that will store the various artist and track artwork figcaptions, prior to their storage in the various 'figure#Figcaptions' arrays
let figure1Figcaptions = [], figure2Figcaptions = [], figure3Figcaptions = [], figure4Figcaptions = [], figure5Figcaptions = [], figure6Figcaptions = [], figure7Figcaptions = [], figure8Figcaptions = [], figure9Figcaptions = [], figure10Figcaptions = [], figure11Figcaptions = []; //variables that will store the various artist and track artwork figcaptions

//variables used in the manipulation of the JSON response containing popular track information:
let tracksJSON;
let tracksObj;
let artistArray;
let artistString;
let artistStrings = [];
let trackTitle;
let trackTitles = [];
let trackPopularity;
let trackPopularities = [];
let duration;
let durations = [];
let tracksArray;
let tracksImages = [figure2Array, figure3Array, figure4Array, figure5Array, figure6Array, figure7Array, figure8Array, figure9Array, figure10Array, figure11Array];
let tracksFigureImages = [figure2Image, figure3Image, figure4Image, figure5Image, figure6Image, figure7Image, figure8Image, figure9Image, figure10Image, figure11Image];
let tracksFiguresImages = [figure2Images, figure3Images, figure4Images, figure5Images, figure6Images, figure7Images, figure8Images, figure9Images, figure10Images, figure11Images];
let tracksURL = [figure2URL, figure3URL, figure4URL, figure5URL, figure6URL, figure7URL, figure8URL, figure9URL, figure10URL, figure11URL];
let tracksURLS = [figure2URLS, figure3URLS, figure4URLS, figure5URLS, figure6URLS, figure7URLS, figure8URLS, figure9URLS, figure10URLS, figure11URLS];
let tracksFigures = [figure2, figure3, figure4, figure5, figure6, figure7, figure8, figure9, figure10, figure11];

let trackButtons = document.querySelectorAll(".BUTTON"); //reference to all elements with a 'BUTTON' className
let trackULs = document.querySelectorAll(".UL"); //reference to all <ul> elements

let tracksFigcaption = [figure2Figcaption, figure3Figcaption, figure4Figcaption, figure5Figcaption, figure6Figcaption, figure7Figcaption, figure8Figcaption, figure9Figcaption, figure10Figcaption, figure11Figcaption];
let tracksFigcaptions = [figure2Figcaptions, figure3Figcaptions, figure4Figcaptions, figure5Figcaptions, figure6Figcaptions, figure7Figcaptions, figure8Figcaptions, figure9Figcaptions, figure10Figcaptions, figure11Figcaptions];

function requestSpotifyToken() { //function to request a Spotify authentication token
    if(window.XMLHttpRequest) {
        authenticationXHTTP = new XMLHttpRequest(); //create an XMLHttpRequest for all modern browsers
    }
    else {
        authenticationXHTTP = new ActiveXObject(Microsoft.XMLHTTP); //create an XMLHttpRequest for IE5, IE6
    }
    authenticationXHTTP.onreadystatechange = function() { //create a function triggered when the 'readyState' of the XMLHttpRequest changes
        if (this.readyState == 4 && this.status == 200) { //if the Spotify server has responded in the expected manner...
            spotifyTokenJSON = this.responseText; //set the 'spotifyTokenJSON' variable equal to the JSON response of the Spotify server
            spotifyTokenObj = JSON.parse(spotifyTokenJSON); //set the 'spotifyTokenObj' variable equal to the JSON.parsed Spotify server response
            spotifyToken = spotifyTokenObj.access_token; //set the 'spotifyToken' variable equal to the 'access_token' returned by the Spotify server
            spotifyArtistRequest(); //invoke the 'spotifyArtistRequest()' function
        }
        else if(this.readyState == 4) { //otherwise, if the Spotify server has not responded in the expected manner...
            communicationError.innerHTML = "An error occurred during communication with the Spotify server.  Please try again later."; //basic error handling
        }
    };
    authenticationXHTTP.open("POST", "https://accounts.spotify.com/api/token", true); //open the XMLHttpRequest, specifying the communication method, endpoint, and asynchronicity
    authenticationXHTTP.setRequestHeader("Content-type", "application/x-www-form-urlencoded"); //set the necessary 'Content-type' request header, as specified in the Spotify Web API documentation
    authenticationXHTTP.setRequestHeader("Authorization", "Basic " + base64authorization); //set the necessary 'Authorization' request header, as specified in the Spotify Web API documentation
    authenticationXHTTP.send("grant_type=client_credentials"); //send the XMLHttpRequest to the Spotify Web API server, detailing the body of the request in the manner specified in the Spotify Web API documentation
}

function spotifyArtistRequest() { //function to request Spotify artist information
    if(window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest(); //create an XMLHttpRequest for all modern browsers
    }
    else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP"); //create an XMLHttpRequest for IE5, IE6
    }
    xmlhttp.onreadystatechange = function() { //create a function that is triggered by a change in the 'readyState' of the XMLHttpRequest
        if(this.readyState == 4 && this.status == 200) { //if the Spotify server has responded in the expected way...
            artistInfo.style.display = "block"; //display the 'artistInfo' <section>
            artistJSON = this.responseText; //set the 'artistJSON' variable equal to the Spotify server's JSON response
            artistObj = JSON.parse(artistJSON); //set the 'artistObj' variable equal to the JSON.parsed Spotify server response
            totalFollowers = artistObj.followers.total; //set the 'totalFollowers' variable appropriately
            followers.innerHTML += totalFollowers; //add the 'totalFollowers' to the innerHTML of the 'followers' element
            popularityRating = artistObj.popularity; //set the 'popularityRating' variable appropriately
            popularity.innerHTML += popularityRating; //add the 'popularityRating' to the innerHTML of the 'popularity' element
            genresArray = artistObj.genres; //set the 'genresArray' variable appropriately
            for(let i=0; i<genresArray.length; i++) {
                genresString += " * " + genresArray[i] + " *"; //add all the musical genres to the 'genresString' variable
            }
            genres.innerHTML += genresString; //add the 'genresString' variable to the innerHTML of the 'genres' element
            figure1Array = artistObj.images; //set the 'figure1Array' variable appropriately
            for(let i=0, j=1; i<figure1Array.length; i++, j++) { //for the length of the 'figure1Array'...
                figure1Image = document.createElement("IMG"); //set 'figure1Image' equal to a new <img>
                figure1Image.setAttribute("height", figure1Array[i].height); //give 'figure1Image' a height attribute
                figure1Image.setAttribute("width", figure1Array[i].width); //give 'figure1Image' a width attribute
                if(figure1Array[i].width > 600) { //if the width attribute of the current element of the 'figure1Array' is greater than 600...
                    figure1Image.setAttribute("class", "sixHundredPlus"); //give 'figure1Image' a class attribute
                }
                figure1Image.setAttribute("src", figure1Array[i].url); //give 'figure1Image' an src attribute
                figure1Image.setAttribute("alt", "Artwork associated with the artist " + artistObj.name); //give 'figure1Image' an alt attribute
                figure1Images.push(figure1Image); //add 'figure1Image' to the 'figure1Images' array
                figure1URL = figure1Array[i].url; //set 'figure1URL' appropriately
                figure1URLS.push(figure1URL); //add 'figure1URL' to the 'figure1URLS' array
                figure1Figcaption = document.createElement("FIGCAPTION");
                figure1Figcaption.innerHTML = artistObj.name + " Image " + j + "/" + figure1Array.length + "<br/>(" + figure1URLS[i] + ")";
                figure1Figcaptions.push(figure1Figcaption);
            }
            spotifyTracksRequest(); //invoke the 'spotifyTracksRequest()' function
        }
        else if(this.readyState == 4) { //otherwise, if the Spotify server has not responded in the expected manner
            communicationError.innerHTML = "An error occurred during communication with the Spotify server.  Information relating to the musical artist was not able to be obtained.  Please try again later."; //basic error handling
        }
    };
    xmlhttp.open("GET", "https://api.spotify.com/v1/artists/5WUlDfRSoLAfcVSX1WnrxN", true); //open the XMLHttpRequest, specifying the communication method, endpoint, and asynchronicity
    xmlhttp.setRequestHeader("Authorization", "Bearer " + spotifyToken); //set the necessary request header, as specified in the Spotify Web API documentation
    xmlhttp.send(); //send the XMLHttpRequest off to the Spotify server
}

function spotifyTracksRequest() { //function to request popular track information from the Spotify server
    if(window.XMLHttpRequest) {
        xmlhttp2 = new XMLHttpRequest(); //create an XMLHttpRequest for all modern browsers
    }
    else {
        xmlhttp2 = new ActiveXObject("Microsoft.XMLHTTP"); //create an XMLHttpRequest for IE5, IE6
    }
    xmlhttp2.onreadystatechange = function() { //create a function that is triggered by a change in the XMLHttpRequest's 'readyState'
        if(this.readyState == 4 && this.status == 200) { //if the Spotify server has responded in the expected way...
            tracksInfo.style.display = "block"; //display the 'tracksInfo' <section>
            tracksJSON = this.responseText;
            tracksObj = JSON.parse(tracksJSON);
            tracksArray = tracksObj.tracks;
            for(let i=0; i<tracksArray.length; i++) {
                artistArray = tracksArray[i].artists;
                for(let j=0; j<artistArray.length; j++) {
                    if(j===0) {
                        artistString = artistArray[j].name;
                    }
                    else {
                        artistString += " - " + artistArray[j].name;
                    }
                }
                artistStrings.push(artistString);
                trackTitle = ": <em>" + tracksArray[i].name + "</em>";
                trackTitles.push(trackTitle);
                trackPopularity = tracksArray[i].popularity;
                trackPopularities.push(trackPopularity);
                duration = calculateDuration(tracksArray[i].duration_ms);
                durations.push(duration);
                tracksImages[i] = tracksArray[i].album.images;
                for(let index=0, j=1; index<tracksImages[i].length; index++, j++) {
                    tracksFigureImages[i] = document.createElement("IMG");
                    tracksFigureImages[i].setAttribute("height", tracksImages[i][index].height);
                    tracksFigureImages[i].setAttribute("width", tracksImages[i][index].width);
                    if(tracksImages[i][index].width > 600) {
                        tracksFigureImages[i].setAttribute("class", "sixHundredPlus");
                    }
                    tracksFigureImages[i].setAttribute("src", tracksImages[i][index].url);
                    tracksFigureImages[i].setAttribute("alt", "Artwork associated with the artist " + artistString);
                    tracksFiguresImages[i].push(tracksFigureImages[i]);
                    tracksURL[i] = tracksImages[i][index].url;
                    tracksURLS[i].push(tracksURL[i]);
                    tracksFigcaption[i] = document.createElement("FIGCAPTION");
                    tracksFigcaption[i].innerHTML = artistString + " Image " + j + "/" + tracksImages[i].length + "<br/>(" + tracksURLS[i][index] + ")";
                    tracksFigcaptions[i].push(tracksFigcaption[i]);
                }
            }
            updateTrackElements();
        }
        else if(this.readyState == 4) { //otherwise, if the Spotify server responded in an unexpected manner
            communicationError.innerHTML = "An error occurred during communication with the Spotify server.  Information relating to the artist's most popular tracks was not able to be obtained.  Please try again later."; //basic error handling
        }
    };
    xmlhttp2.open("GET", "https://api.spotify.com/v1/artists/5WUlDfRSoLAfcVSX1WnrxN/top-tracks?country=US", true); //open the XMLHttpRequest, specifying the communication method, endpoint, and asynchronicity
    xmlhttp2.setRequestHeader("Authorization", "Bearer " + spotifyToken); //set the necessary request header, as detailed in the Spotify Web API documentation
    xmlhttp2.send(); //send the XMLHttpRequest off to the Spotify server
}

function toggleImages(checked) { //invoked when the User interacts with the artist image toggle switch
    if(checked) { //if artist images are desired
        enabledOrDisabled.style.color = "#96ca58"; //set the color of the 'enabledOrDisabled' <span> element to green
        enabledOrDisabled.innerHTML = "Enabled "; //set the innerHTML of the 'enabledOrDisabled' <span> element to "Enabled"
        figure1 = document.createElement("FIGURE"); //create a new <FIGURE>, storing it in 'figure1'
        figure1.appendChild(figure1Images[0]); //add the first artist image to 'figure1'
        figure1.appendChild(figure1Figcaptions[0]); //add the first artist image-accompanying <FIGCAPTION> to 'figure1'
        document.querySelector(".outer").appendChild(figure1); //insert 'figure1' into the DOM, within the <DIV> element whose className is 'outer'
        figure1.scrollIntoView(false); //align the bottom of 'figure1' with the bottom of the visible area of the scrollable ancestor (MDN Docs, https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
    }
    else { //if artist images are not desired
        enabledOrDisabled.style.color = "#293583"; //set the color of the 'enabledOrDisabled' <span> element to indigo
        enabledOrDisabled.innerHTML = "Disabled "; //set the innerHTML of the 'enabledOrDisabled' <span> element to "Disabled"
        figure1.remove(); //remove 'figure1' from the DOM
    }
    figure1Index = 0; //set the value of 'figure1Index' to 0
}

function artistPrevious() { //invoked when the User clicks the figure1 'previousBtn'
    if(figure1Index > 0) { //if 'figure1Index' is greater than 0
        figure1.replaceChild(figure1Images[figure1Index-1], figure1.children[0]); //replace the current <IMG> with the previous <IMG> in the 'figure1Images' array
        figure1.replaceChild(figure1Figcaptions[figure1Index-1], figure1.children[1]); //replace the current <FIGCAPTION> with the previous <FIGCAPTION> in the 'figure1Figcaptions' array
        figure1Index -= 1; //decrease the value of 'figure1Index' by 1
    }
    else { //if 'figure1Index' is equal to 0
        figure1.replaceChild(figure1Images[figure1Array.length-1], figure1.children[0]); //replace the current <IMG> with the last <IMG> element in the 'figure1Images' array
        figure1.replaceChild(figure1Figcaptions[figure1Array.length-1], figure1.children[1]); //replace the current <FIGCAPTION> with the last <FIGCAPTION> element in the 'figure1Figcaptions' array
        figure1Index = figure1Array.length-1; //set the value of 'figure1Index' to one less than the length of the 'figure1Array'
    }
    figure1.scrollIntoView(false); //align the bottom of 'figure1' with the bottom of the visible area of the scrollable ancestor (MDN Docs, https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
}

function artistNext() { //invoked when the User clicks the figure1 'nextBtn'
    if(figure1Index < figure1Array.length-1) { //if 'figure1Index' is less than the length of 'figure1Array' minus 1
        figure1.replaceChild(figure1Images[figure1Index+1], figure1.children[0]); //replace the current <IMG> with the next <IMG> in the 'figure1Images' array
        figure1.replaceChild(figure1Figcaptions[figure1Index+1], figure1.children[1]); //replace the current <FIGCAPTION> with the next <FIGCAPTION> in the 'figure1Figcaptions' array
        figure1Index += 1; //increase the value of 'figure1Index' by 1
    }
    else { //if 'figure1Index' is equal to the length of the 'figure1Array' minus 1
        figure1.replaceChild(figure1Images[0], figure1.children[0]); //replace the current <IMG> with the first <IMG> in the 'figure1Images' array
        figure1.replaceChild(figure1Figcaptions[0], figure1.children[1]); //replace the current <FIGCAPTION> with the first <FIGCAPTION> in the 'figure1Figcaptions' array
        figure1Index = 0; //set the value of 'figure1Index' to 0
    }
    figure1.scrollIntoView(false); //align the bottom of 'figure1' with the bottom of the visible area of the scrollable ancestor (MDN Docs, https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
}

//functions invoked when the User requests/hides/navigates track images:
function toggleTrack1Images(checked) {
    if(checked) {
        enabledOrDisabled1.style.color = "#96ca58";
        enabledOrDisabled1.innerHTML = "Enabled ";
        figure2 = document.createElement("FIGURE");
        figure2.appendChild(figure2Images[0]);
        figure2.appendChild(figure2Figcaptions[0]);
        document.querySelectorAll(".outer")[1].appendChild(figure2);
        figure2.scrollIntoView(false);
    }
    else {
        enabledOrDisabled1.style.color = "#293583";
        enabledOrDisabled1.innerHTML = "Disabled ";
        figure2.remove();
    }
    figure2Index = 0;
}

function track1Previous() {
    if(figure2Index > 0) {
        figure2.replaceChild(figure2Images[figure2Index-1], figure2.children[0]);
        figure2.replaceChild(figure2Figcaptions[figure2Index-1], figure2.children[1]);
        figure2Index -= 1;
    }
    else {
        figure2.replaceChild(figure2Images[figure2Images.length-1], figure2.children[0]);
        figure2.replaceChild(figure2Figcaptions[figure2Images.length-1], figure2.children[1]);
        figure2Index = figure2Images.length - 1;
    }
    figure2.scrollIntoView(false);
}

function track1Next() {
    if(figure2Index < figure2Images.length-1) {
        figure2.replaceChild(figure2Images[figure2Index+1], figure2.children[0]);
        figure2.replaceChild(figure2Figcaptions[figure2Index+1], figure2.children[1]);
        figure2Index += 1;
    }
    else {
        figure2.replaceChild(figure2Images[0], figure2.children[0]);
        figure2.replaceChild(figure2Figcaptions[0], figure2.children[1]);
        figure2Index = 0;
    }
    figure2.scrollIntoView(false);
}

function toggleTrack2Images(checked) {
    if(checked) {
        enabledOrDisabled2.style.color = "#96ca58";
        enabledOrDisabled2.innerHTML = "Enabled ";
        figure3 = document.createElement("FIGURE");
        figure3.appendChild(figure3Images[0]);
        figure3.appendChild(figure3Figcaptions[0]);
        document.querySelectorAll(".outer")[2].appendChild(figure3);
        figure3.scrollIntoView(false);
    }
    else {
        enabledOrDisabled2.style.color = "#293583";
        enabledOrDisabled2.innerHTML = "Disabled ";
        figure3.remove();
    }
    figure3Index = 0;
}

function track2Previous() {
    if(figure3Index > 0) {
        figure3.replaceChild(figure3Images[figure3Index-1], figure3.children[0]);
        figure3.replaceChild(figure3Figcaptions[figure3Index-1], figure3.children[1]);
        figure3Index -= 1;
    }
    else {
        figure3.replaceChild(figure3Images[figure3Images.length-1], figure3.children[0]);
        figure3.replaceChild(figure3Figcaptions[figure3Images.length-1], figure3.children[1]);
        figure3Index = figure3Images.length - 1;
    }
    figure3.scrollIntoView(false);
}

function track2Next() {
    if(figure3Index < figure3Images.length-1) {
        figure3.replaceChild(figure3Images[figure3Index+1], figure3.children[0]);
        figure3.replaceChild(figure3Figcaptions[figure3Index+1], figure3.children[1]);
        figure3Index += 1;
    }
    else {
        figure3.replaceChild(figure3Images[0], figure3.children[0]);
        figure3.replaceChild(figure3Figcaptions[0], figure3.children[1]);
        figure3Index = 0;
    }
    figure3.scrollIntoView(false);
}

function toggleTrack3Images(checked) {
    if(checked) {
        enabledOrDisabled3.style.color = "#96ca58";
        enabledOrDisabled3.innerHTML = "Enabled ";
        figure4 = document.createElement("FIGURE");
        figure4.appendChild(figure4Images[0]);
        figure4.appendChild(figure4Figcaptions[0]);
        document.querySelectorAll(".outer")[3].appendChild(figure4);
        figure4.scrollIntoView(false);
    }
    else {
        enabledOrDisabled3.style.color = "#293583";
        enabledOrDisabled3.innerHTML = "Disabled ";
        figure4.remove();
    }
    figure4Index = 0;
}

function track3Previous() {
    if(figure4Index > 0) {
        figure4.replaceChild(figure4Images[figure4Index-1], figure4.children[0]);
        figure4.replaceChild(figure4Figcaptions[figure4Index-1], figure4.children[1]);
        figure4Index -= 1;
    }
    else {
        figure4.replaceChild(figure4Images[figure4Images.length-1], figure4.children[0]);
        figure4.replaceChild(figure4Figcaptions[figure4Images.length-1], figure4.children[1]);
        figure4Index = figure4Images.length - 1;
    }
    figure4.scrollIntoView(false);
}

function track3Next() {
    if(figure4Index < figure4Images.length-1) {
        figure4.replaceChild(figure4Images[figure4Index+1], figure4.children[0]);
        figure4.replaceChild(figure4Figcaptions[figure4Index+1], figure4.children[1]);
        figure4Index += 1;
    }
    else {
        figure4.replaceChild(figure4Images[0], figure4.children[0]);
        figure4.replaceChild(figure4Figcaptions[0], figure4.children[1]);
        figure4Index = 0;
    }
    figure4.scrollIntoView(false);
}

function toggleTrack4Images(checked) {
    if(checked) {
        enabledOrDisabled4.style.color = "#96ca58";
        enabledOrDisabled4.innerHTML = "Enabled ";
        figure5 = document.createElement("FIGURE");
        figure5.appendChild(figure5Images[0]);
        figure5.appendChild(figure5Figcaptions[0]);
        document.querySelectorAll(".outer")[4].appendChild(figure5);
        figure5.scrollIntoView(false);
    }
    else {
        enabledOrDisabled4.style.color = "#293583";
        enabledOrDisabled4.innerHTML = "Disabled ";
        figure5.remove();
    }
    figure5Index = 0;
}

function track4Previous() {
    if(figure5Index > 0) {
        figure5.replaceChild(figure5Images[figure5Index-1], figure5.children[0]);
        figure5.replaceChild(figure5Figcaptions[figure5Index-1], figure5.children[1]);
        figure5Index -= 1;
    }
    else {
        figure5.replaceChild(figure5Images[figure5Images.length-1], figure5.children[0]);
        figure5.replaceChild(figure5Figcaptions[figure5Images.length-1], figure5.children[1]);
        figure5Index = figure5Images.length - 1;
    }
    figure5.scrollIntoView(false);
}

function track4Next() {
    if(figure5Index < figure5Images.length-1) {
        figure5.replaceChild(figure5Images[figure5Index+1], figure5.children[0]);
        figure5.replaceChild(figure5Figcaptions[figure5Index+1], figure5.children[1]);
        figure5Index += 1;
    }
    else {
        figure5.replaceChild(figure5Images[0], figure5.children[0]);
        figure5.replaceChild(figure5Figcaptions[0], figure5.children[1]);
        figure5Index = 0;
    }
    figure5.scrollIntoView(false);
}

function toggleTrack5Images(checked) {
    if(checked) {
        enabledOrDisabled5.style.color = "#96ca58";
        enabledOrDisabled5.innerHTML = "Enabled ";
        figure6 = document.createElement("FIGURE");
        figure6.appendChild(figure6Images[0]);
        figure6.appendChild(figure6Figcaptions[0]);
        document.querySelectorAll(".outer")[5].appendChild(figure6);
        figure6.scrollIntoView(false);
    }
    else {
        enabledOrDisabled5.style.color = "#293583";
        enabledOrDisabled5.innerHTML = "Disabled ";
        figure6.remove();
    }
    figure6Index = 0;
}

function track5Previous() {
    if(figure6Index > 0) {
        figure6.replaceChild(figure6Images[figure6Index-1], figure6.children[0]);
        figure6.replaceChild(figure6Figcaptions[figure6Index-1], figure6.children[1]);
        figure6Index -= 1;
    }
    else {
        figure6.replaceChild(figure6Images[figure6Images.length-1], figure6.children[0]);
        figure6.replaceChild(figure6Figcaptions[figure6Images.length-1], figure6.children[1]);
        figure6Index = figure6Images.length - 1;
    }
    figure6.scrollIntoView(false);
}

function track5Next() {
    if(figure6Index < figure6Images.length-1) {
        figure6.replaceChild(figure6Images[figure6Index+1], figure6.children[0]);
        figure6.replaceChild(figure6Figcaptions[figure6Index+1], figure6.children[1]);
        figure6Index += 1;
    }
    else {
        figure6.replaceChild(figure6Images[0], figure6.children[0]);
        figure6.replaceChild(figure6Figcaptions[0], figure6.children[1]);
        figure6Index = 0;
    }
    figure6.scrollIntoView(false);
}

function toggleTrack6Images(checked) {
    if(checked) {
        enabledOrDisabled6.style.color = "#96ca58";
        enabledOrDisabled6.innerHTML = "Enabled ";
        figure7 = document.createElement("FIGURE");
        figure7.appendChild(figure7Images[0]);
        figure7.appendChild(figure7Figcaptions[0]);
        document.querySelectorAll(".outer")[6].appendChild(figure7);
        figure7.scrollIntoView(false);
    }
    else {
        enabledOrDisabled6.style.color = "#293583";
        enabledOrDisabled6.innerHTML = "Disabled ";
        figure7.remove();
    }
    figure7Index = 0;
}

function track6Previous() {
    if(figure7Index > 0) {
        figure7.replaceChild(figure7Images[figure7Index-1], figure7.children[0]);
        figure7.replaceChild(figure7Figcaptions[figure7Index-1], figure7.children[1]);
        figure7Index -= 1;
    }
    else {
        figure7.replaceChild(figure7Images[figure7Images.length-1], figure7.children[0]);
        figure7.replaceChild(figure7Figcaptions[figure7Images.length-1], figure7.children[1]);
        figure7Index = figure7Images.length - 1;
    }
    figure7.scrollIntoView(false);
}

function track6Next() {
    if(figure7Index < figure7Images.length-1) {
        figure7.replaceChild(figure7Images[figure7Index+1], figure7.children[0]);
        figure7.replaceChild(figure7Figcaptions[figure7Index+1], figure7.children[1]);
        figure7Index += 1;
    }
    else {
        figure7.replaceChild(figure7Images[0], figure7.children[0]);
        figure7.replaceChild(figure7Figcaptions[0], figure7.children[1]);
        figure7Index = 0;
    }
    figure7.scrollIntoView(false);
}

function toggleTrack7Images(checked) {
    if(checked) {
        enabledOrDisabled7.style.color = "#96ca58";
        enabledOrDisabled7.innerHTML = "Enabled ";
        figure8 = document.createElement("FIGURE");
        figure8.appendChild(figure8Images[0]);
        figure8.appendChild(figure8Figcaptions[0]);
        document.querySelectorAll(".outer")[7].appendChild(figure8);
        figure8.scrollIntoView(false);
    }
    else {
        enabledOrDisabled7.style.color = "#293583";
        enabledOrDisabled7.innerHTML = "Disabled ";
        figure8.remove();
    }
    figure8Index = 0;
}

function track7Previous() {
    if(figure8Index > 0) {
        figure8.replaceChild(figure8Images[figure8Index-1], figure8.children[0]);
        figure8.replaceChild(figure8Figcaptions[figure8Index-1], figure8.children[1]);
        figure8Index -= 1;
    }
    else {
        figure8.replaceChild(figure8Images[figure8Images.length-1], figure8.children[0]);
        figure8.replaceChild(figure8Figcaptions[figure8Images.length-1], figure8.children[1]);
        figure8Index = figure8Images.length - 1;
    }
    figure8.scrollIntoView(false);
}

function track7Next() {
    if(figure8Index < figure8Images.length-1) {
        figure8.replaceChild(figure8Images[figure8Index+1], figure8.children[0]);
        figure8.replaceChild(figure8Figcaptions[figure8Index+1], figure8.children[1]);
        figure8Index += 1;
    }
    else {
        figure8.replaceChild(figure8Images[0], figure8.children[0]);
        figure8.replaceChild(figure8Figcaptions[0], figure8.children[1]);
        figure8Index = 0;
    }
    figure8.scrollIntoView(false);
}

function toggleTrack8Images(checked) {
    if(checked) {
        enabledOrDisabled8.style.color = "#96ca58";
        enabledOrDisabled8.innerHTML = "Enabled ";
        figure9 = document.createElement("FIGURE");
        figure9.appendChild(figure9Images[0]);
        figure9.appendChild(figure9Figcaptions[0]);
        document.querySelectorAll(".outer")[8].appendChild(figure9);
        figure9.scrollIntoView(false);
    }
    else {
        enabledOrDisabled8.style.color = "#293583";
        enabledOrDisabled8.innerHTML = "Disabled ";
        figure9.remove();
    }
    figure9Index = 0;
}

function track8Previous() {
    if(figure9Index > 0) {
        figure9.replaceChild(figure9Images[figure9Index-1], figure9.children[0]);
        figure9.replaceChild(figure9Figcaptions[figure9Index-1], figure9.children[1]);
        figure9Index -= 1;
    }
    else {
        figure9.replaceChild(figure9Images[figure9Images.length-1], figure9.children[0]);
        figure9.replaceChild(figure9Figcaptions[figure9Images.length-1], figure9.children[1]);
        figure9Index = figure9Images.length - 1;
    }
    figure9.scrollIntoView(false);
}

function track8Next() {
    if(figure9Index < figure9Images.length-1) {
        figure9.replaceChild(figure9Images[figure9Index+1], figure9.children[0]);
        figure9.replaceChild(figure9Figcaptions[figure9Index+1], figure9.children[1]);
        figure9Index += 1;
    }
    else {
        figure9.replaceChild(figure9Images[0], figure9.children[0]);
        figure9.replaceChild(figure9Figcaptions[0], figure9.children[1]);
        figure9Index = 0;
    }
    figure9.scrollIntoView(false);
}

function toggleTrack9Images(checked) {
    if(checked) {
        enabledOrDisabled9.style.color = "#96ca58";
        enabledOrDisabled9.innerHTML = "Enabled ";
        figure10 = document.createElement("FIGURE");
        figure10.appendChild(figure10Images[0]);
        figure10.appendChild(figure10Figcaptions[0]);
        document.querySelectorAll(".outer")[9].appendChild(figure10);
        figure10.scrollIntoView(false);
    }
    else {
        enabledOrDisabled9.style.color = "#293583";
        enabledOrDisabled9.innerHTML = "Disabled ";
        figure10.remove();
    }
    figure10Index = 0;
}

function track9Previous() {
    if(figure10Index > 0) {
        figure10.replaceChild(figure10Images[figure10Index-1], figure10.children[0]);
        figure10.replaceChild(figure10Figcaptions[figure10Index-1], figure10.children[1]);
        figure10Index -= 1;
    }
    else {
        figure10.replaceChild(figure10Images[figure10Images.length-1], figure10.children[0]);
        figure10.replaceChild(figure10Figcaptions[figure10Images.length-1], figure10.children[1]);
        figure10Index = figure10Images.length - 1;
    }
    figure10.scrollIntoView(false);
}

function track9Next() {
    if(figure10Index < figure10Images.length-1) {
        figure10.replaceChild(figure10Images[figure10Index+1], figure10.children[0]);
        figure10.replaceChild(figure10Figcaptions[figure10Index+1], figure10.children[1]);
        figure10Index += 1;
    }
    else {
        figure10.replaceChild(figure10Images[0], figure10.children[0]);
        figure10.replaceChild(figure10Figcaptions[0], figure10.children[1]);
        figure10Index = 0;
    }
    figure10.scrollIntoView(false);
}

function toggleTrack10Images(checked) {
    if(checked) {
        enabledOrDisabled10.style.color = "#96ca58";
        enabledOrDisabled10.innerHTML = "Enabled ";
        figure11 = document.createElement("FIGURE");
        figure11.appendChild(figure11Images[0]);
        figure11.appendChild(figure11Figcaptions[0]);
        document.querySelectorAll(".outer")[10].appendChild(figure11);
        figure11.scrollIntoView(false);
    }
    else {
        enabledOrDisabled10.style.color = "#293583";
        enabledOrDisabled10.innerHTML = "Disabled ";
        figure11.remove();
    }
    figure11Index = 0;
}

function track10Previous() {
    if(figure11Index > 0) {
        figure11.replaceChild(figure11Images[figure11Index-1], figure11.children[0]);
        figure11.replaceChild(figure11Figcaptions[figure11Index-1], figure11.children[1]);
        figure11Index -= 1;
    }
    else {
        figure11.replaceChild(figure11Images[figure11Images.length-1], figure11.children[0]);
        figure11.replaceChild(figure11Figcaptions[figure11Images.length-1], figure11.children[1]);
        figure11Index = figure11Images.length - 1;
    }
    figure11.scrollIntoView(false);
}

function track10Next() {
    if(figure11Index < figure11Images.length-1) {
        figure11.replaceChild(figure11Images[figure11Index+1], figure11.children[0]);
        figure11.replaceChild(figure11Figcaptions[figure11Index+1], figure11.children[1]);
        figure11Index += 1;
    }
    else {
        figure11.replaceChild(figure11Images[0], figure11.children[0]);
        figure11.replaceChild(figure11Figcaptions[0], figure11.children[1]);
        figure11Index = 0;
    }
    figure11.scrollIntoView(false);
}

//functions which display/hide track information:
function toggleTrack1Info() {
    if(track1.style.display === "none") {
        track1.style.display = "block";
    }
    else {
        track1.style.display = "none";
    }
}

function toggleTrack2Info() {
    if(track2.style.display === "none") {
        track2.style.display = "block";
    }
    else {
        track2.style.display = "none";
    }
}

function toggleTrack3Info() {
    if(track3.style.display === "none") {
        track3.style.display = "block";
    }
    else {
        track3.style.display = "none";
    }
}

function toggleTrack4Info() {
    if(track4.style.display === "none") {
        track4.style.display = "block";
    }
    else {
        track4.style.display = "none";
    }
}

function toggleTrack5Info() {
    if(track5.style.display === "none") {
        track5.style.display = "block";
    }
    else {
        track5.style.display = "none";
    }
}

function toggleTrack6Info() {
    if(track6.style.display === "none") {
        track6.style.display = "block";
    }
    else {
        track6.style.display = "none";
    }
}

function toggleTrack7Info() {
    if(track7.style.display === "none") {
        track7.style.display = "block";
    }
    else {
        track7.style.display = "none";
    }
}

function toggleTrack8Info() {
    if(track8.style.display === "none") {
        track8.style.display = "block";
    }
    else {
        track8.style.display = "none";
    }
}

function toggleTrack9Info() {
    if(track9.style.display === "none") {
        track9.style.display = "block";
    }
    else {
        track9.style.display = "none";
    }
}

function toggleTrack10Info() {
    if(track10.style.display === "none") {
        track10.style.display = "block";
    }
    else {
        track10.style.display = "none";
    }
}

//function which formats the track duration:
function calculateDuration(milliseconds) {
    let seconds = Math.round(milliseconds/1000);
    let mins = Math.floor(seconds/60);
    seconds = seconds % 60;
    if(mins < 10) {
        mins = "0" + mins;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    return mins + ":" + seconds;
}

//function that updates the elements relating to track information:
function updateTrackElements() {
    for(let i=0; i<trackButtons.length; i++) {
        trackButtons[i].innerHTML += artistStrings[i] + trackTitles[i];
        trackULs[i].children[0].innerHTML += trackPopularities[i];
        trackULs[i].children[1].innerHTML += durations[i];
    }
}

