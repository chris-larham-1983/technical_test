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
//let url1Index, url2Index, url3Index, url4Index, url5Index, url6Index, url7Index, url8Index, url9Index, url10Index, url11Index; //variables that will specify which element of the various URL arrays are being displayed
//removed the unused 'url1Index'...'url11Index' variables
let figure1Figcaption, figure2Figcaption, figure3Figcaption, figure4Figcaption, figure5Figcaption, figure6Figcaption, figure7Figcaption, figure8Figcaption, figure9Figcaption, figure10Figcaption, figure11Figcaption; //variables that will store the various artist and track artwork figcaptions, prior to their storage in the various 'figure#Figcaptions' arrays
let figure1Figcaptions = [], figure2Figcaptions = [], figure3Figcaptions = [], figure4Figcaptions = [], figure5Figcaptions = [], figure6Figcaptions = [], figure7Figcaptions = [], figure8Figcaptions = [], figure9Figcaptions = [], figure10Figcaptions = [], figure11Figcaptions = []; //variables that will store the various artist and track artwork figcaptions

//variables used in the manipulation of the JSON response containing popular track information:
let tracksJSON; //stores the Spotify API popular tracks response
let tracksObj; //stores the JSON.parsed Spotify API popular tracks response
let artistArray; //refers to the 'artists' array in each object of the Spotify response
let artistString; //used to represent the name(s) of the artist(s) that created each track, prior to the artistString's storage in 'artistStrings'
let artistStrings = []; //used to store the ten artistStrings
let trackTitle; //used to represent the title of each track, prior to its storage in 'trackTitles'
let trackTitles = []; //used to store the ten "trackTitle"s
let trackPopularity; //used to represent the popularity each track, prior to its storage in 'trackPopularities'
let trackPopularities = []; //used to store the ten "trackPopularity"s
let duration; //used to represent the duration of each track, prior to its storage in 'durations'
let durations = []; //used to store the ten "duration"s
let tracksArray; //used to refer to the array of ten tracks that is contained in the Spotify response
let tracksImages = [figure2Array, figure3Array, figure4Array, figure5Array, figure6Array, figure7Array, figure8Array, figure9Array, figure10Array, figure11Array]; //each element of the 'trackImages' array will be set to refer to the 'images' array of the currently-iterated 'tracksArray' object
let tracksFigureImages = [figure2Image, figure3Image, figure4Image, figure5Image, figure6Image, figure7Image, figure8Image, figure9Image, figure10Image, figure11Image]; //each element of the 'tracksFigureImages' array will be used in the creation of track-related images, prior to the images' storage in 'tracksFiguresImages'
let tracksFiguresImages = [figure2Images, figure3Images, figure4Images, figure5Images, figure6Images, figure7Images, figure8Images, figure9Images, figure10Images, figure11Images]; //each element of the 'tracksFiguresImages' will store track-related images
let tracksURL = [figure2URL, figure3URL, figure4URL, figure5URL, figure6URL, figure7URL, figure8URL, figure9URL, figure10URL, figure11URL]; //each element of the 'tracksURL' will be used to refer to the location of track-related images, prior to these locations being stored in the 'tracksURLS' array
let tracksURLS = [figure2URLS, figure3URLS, figure4URLS, figure5URLS, figure6URLS, figure7URLS, figure8URLS, figure9URLS, figure10URLS, figure11URLS]; //used to store the urls associated with track-related images

let trackButtons = document.querySelectorAll(".BUTTON"); //reference to all elements with a 'BUTTON' className
let trackULs = document.querySelectorAll(".UL"); //reference to all <ul> elements

let tracksFigcaption = [figure2Figcaption, figure3Figcaption, figure4Figcaption, figure5Figcaption, figure6Figcaption, figure7Figcaption, figure8Figcaption, figure9Figcaption, figure10Figcaption, figure11Figcaption]; //each element of 'tracksFigcaption' will be used to in the creation of track image <FIGCAPTION>s, prior to their storage in the 'tracksFigcaptions' array
let tracksFigcaptions = [figure2Figcaptions, figure3Figcaptions, figure4Figcaptions, figure5Figcaptions, figure6Figcaptions, figure7Figcaptions, figure8Figcaptions, figure9Figcaptions, figure10Figcaptions, figure11Figcaptions]; //used to store the <FIGCAPTION> elements that relate to the various track images

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
            communicationError.innerHTML = "An error occurred during communication with the Spotify server.  Please try again later."; //basic communication error handling
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
                figure1Figcaption = document.createElement("FIGCAPTION"); //set 'figure1Figcaption' equal to a new <FIGCAPTION> element
                figure1Figcaption.innerHTML = artistObj.name + " Image " + j + "/" + figure1Array.length + "<br/>(" + figure1URLS[i] + ")"; //set the innerHTML of 'figure1Figcaption' appropriately
                figure1Figcaptions.push(figure1Figcaption); //add 'figure1Figcaption' to the 'figure1FIgcaptions' array
            }
            spotifyTracksRequest(); //invoke the 'spotifyTracksRequest()' function
        }
        else if(this.readyState == 4) { //otherwise, if the Spotify server has not responded in the expected manner
            communicationError.innerHTML = "An error occurred during communication with the Spotify server.  Information relating to the musical artist was not able to be obtained.  Please try again later."; //basic communication error handling
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
            tracksJSON = this.responseText; //set the 'tracksJSON' variable equal to the Spotify server's JSON response
            tracksObj = JSON.parse(tracksJSON); //set the 'tracksObj' variable equal to the JSON.parsed 'tracksJSON' variable
            tracksArray = tracksObj.tracks; //set 'tracksArray' equal to the 'tracks' array of the Spotify response
            for(let i=0; i<tracksArray.length; i++) {  //for as long as there are elements in 'tracksArray'
                artistArray = tracksArray[i].artists; //set 'artistArray' equal to the 'artists' array of the current 'tracksArray' element
                for(let j=0; j<artistArray.length; j++) { //for the length of the 'artistArray'
                    if(j===0) {
                        artistString = artistArray[j].name; //add the artist's name to the 'artistString' if this is the first element of 'artistArray'
                    }
                    else {
                        artistString += " - " + artistArray[j].name; //otherwise, add a space, hyphen, space and then the artist's name
                    }
                }
                artistStrings.push(artistString); //add the 'artistString' to the 'artistStrings' array
                trackTitle = ": <em>" + tracksArray[i].name + "</em>"; //define the current 'trackTitle'
                trackTitles.push(trackTitle); //add 'trackTitle' to the 'trackTitles' array
                trackPopularity = tracksArray[i].popularity; //define the current 'trackPopularity'
                trackPopularities.push(trackPopularity); //add 'trackPopularity' to the 'trackPopularities' array
                duration = calculateDuration(tracksArray[i].duration_ms); //define the current track's duration
                durations.push(duration); //add the current track's duration to the 'durations' array
                tracksImages[i] = tracksArray[i].album.images; //set the current element of the 'tracksImages' array equal to the 'images' array of the current 'tracksArray' element
                for(let index=0, j=1; index<tracksImages[i].length; index++, j++) { //for the length of the 'tracksImages' array
                    tracksFigureImages[i] = document.createElement("IMG"); //initialize the 'i'th element of 'tracksFigureImages' to refer to a new <IMG> element
                    tracksFigureImages[i].setAttribute("height", tracksImages[i][index].height); //set an appropriate height attribute on the 'i'th element of 'tracksFigureImages'
                    tracksFigureImages[i].setAttribute("width", tracksImages[i][index].width); //set an appropriate width attribute on the 'i'th element of 'tracksFigureImages'
                    if(tracksImages[i][index].width > 600) { //if the width of the currently-referenced image is greater than 600...
                        tracksFigureImages[i].setAttribute("class", "sixHundredPlus"); //... set an appropriate class attribute on the 'i'th element of 'tracksFigureImages'
                    }
                    tracksFigureImages[i].setAttribute("src", tracksImages[i][index].url); //set an appropriate src attribute on the 'i'th element of 'tracksFigureImages'
                    tracksFigureImages[i].setAttribute("alt", "Artwork associated with the artist " + artistString); //set an appropriate alt attribute on the 'i'th element of 'tracksFigureImages'
                    tracksFiguresImages[i].push(tracksFigureImages[i]); //store the 'i'th element of 'tracksFigureImages' in the 'tracksFiguresImages' array
                    tracksURL[i] = tracksImages[i][index].url; //store the URL of the currently-referenced image in the 'tracksURL' array
                    tracksURLS[i].push(tracksURL[i]); //add the 'i'th element of 'tracksURL' to the 'tracksURLS' array
                    tracksFigcaption[i] = document.createElement("FIGCAPTION"); //set the 'i'th element of 'tracksFigcaption' equal to a new <FIGCAPTION> element
                    tracksFigcaption[i].innerHTML = artistString + " Image " + j + "/" + tracksImages[i].length + "<br/>(" + tracksURLS[i][index] + ")"; //set the innerHTML of the 'i'th element of 'tracksFigcaption' appropriately
                    tracksFigcaptions[i].push(tracksFigcaption[i]); //store the 'i'th element of 'tracksFigcaption' in the 'tracksFigcaptions' array
                }
            }
            updateTrackElements(); //invoke the 'updateTrackElements()' function
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
function toggleTrack1Images(checked) { //invoked when the User interacts with the toggle that controls the display/hiding of track 1-related images
    if(checked) { //if track 1 images are required
        enabledOrDisabled1.style.color = "#96ca58"; //set the color of the 'enabledOrDisabled1' <SPAN> element to 'success' green
        enabledOrDisabled1.innerHTML = "Enabled "; //set the innerHTML of the 'enabledOrDisabled1' <SPAN> element to "Enabled "
        figure2 = document.createElement("FIGURE"); //set 'figure2' equal to a new <FIGURE> element
        figure2.appendChild(figure2Images[0]); //add the first <IMG> from 'figure2Images' to 'figure2'
        figure2.appendChild(figure2Figcaptions[0]); //add the first <FIGCAPTION> from 'figure2Figcaptions' to 'figure2'
        document.querySelectorAll(".outer")[1].appendChild(figure2); //add 'figure2' to the second <DIV> element whose className is 'outer'
        figure2.scrollIntoView(false); //align the bottom of 'figure2' with the bottom of the visible area of the scrollable ancestor (MDN Docs, https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
    }
    else { //otherwise, if track 1 images are not required
        enabledOrDisabled1.style.color = "#293583"; //set the color of the 'enabledOrDisabled1' <SPAN> element to indigo
        enabledOrDisabled1.innerHTML = "Disabled "; //set the innerHTML of the 'enabledOrDisabled1' <SPAN> element to "Disabled "
        figure2.remove(); //remove 'figure2' from the DOM
    }
    figure2Index = 0; //set 'figure2Index' to 0
}

function track1Previous() { //triggered when the User clicks the 'PREVIOUS' <button> to navigate to the previous track 1 image
    if(figure2Index > 0) { //if 'figure2Index' is greater than 0
        figure2.replaceChild(figure2Images[figure2Index-1], figure2.children[0]); //replace the first child element of 'figure2' with the 'figure2Index-1'th element of 'figure2Images'
        figure2.replaceChild(figure2Figcaptions[figure2Index-1], figure2.children[1]); //replace the second child element of 'figure2' with the 'figure2Index-1'th element of 'figure2Figcaptions'
        figure2Index -= 1; //decrement the 'figure2Index' variable by 1
    }
    else { //otherwise, if 'figure2Index' is equal to 0
        figure2.replaceChild(figure2Images[figure2Images.length-1], figure2.children[0]); //replace the first child element of 'figure2' with the 'figure2Images.length-1'th element of 'figure2Images'
        figure2.replaceChild(figure2Figcaptions[figure2Images.length-1], figure2.children[1]); //replace the second child element of 'figure2' with the 'figure2Images.length-1'th element of 'figure2Figcaptions'
        figure2Index = figure2Images.length - 1; //set the 'figure2Index' variable equal to one less than the length of 'figure2Images'
    }
    figure2.scrollIntoView(false); //align the bottom of 'figure2' with the bottom of the visible area of the scrollable ancestor (MDN Docs, https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
}

function track1Next() { //triggered when the User clicks the 'NEXT' <button> to navigate to the next track 1 image
    if(figure2Index < figure2Images.length-1) { //if 'figure2Index' is less than the length of 'figure2Images' minus 1
        figure2.replaceChild(figure2Images[figure2Index+1], figure2.children[0]); //replace the first child element of 'figure2' with the 'figure2Index+1'th element of 'figure2Images'
        figure2.replaceChild(figure2Figcaptions[figure2Index+1], figure2.children[1]); //replace the second child element of 'figure2' with the 'figure2Index+1'th element of 'figure2Figcaptions'
        figure2Index += 1; //increment the 'figure2Index' variable by 1
    }
    else { //otherwise, if 'figure2Index' is equal to the length of 'figure2Images' minus 1
        figure2.replaceChild(figure2Images[0], figure2.children[0]); //replace the first child element of 'figure2' with the first <IMG> in the 'figure2Images' array
        figure2.replaceChild(figure2Figcaptions[0], figure2.children[1]); //replace the second child element of 'figure2' with the first <FIGCAPTION> in the 'figure2Figcaptions' array
        figure2Index = 0; //set the 'figure2Index' variable to 0
    }
    figure2.scrollIntoView(false); //align the bottom of 'figure2' with the bottom of the visible area of the scrollable ancestor (MDN Docs, https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
}

function toggleTrack2Images(checked) { //invoked when the User interacts with the toggle that controls the display/hiding of track 2-related images
    if(checked) { //if track 2 images are required
        enabledOrDisabled2.style.color = "#96ca58"; //set the color of the 'enabledOrDisabled2' <SPAN> element to 'success' green
        enabledOrDisabled2.innerHTML = "Enabled "; //set the innerHTML of the 'enabledOrDisabled2' <SPAN> element to "Enabled "
        figure3 = document.createElement("FIGURE"); //set 'figure3' equal to a new <FIGURE> element
        figure3.appendChild(figure3Images[0]); //add the first <IMG> from 'figure3Images' to 'figure3'
        figure3.appendChild(figure3Figcaptions[0]); //add the first <FIGCAPTION> from 'figure3Figcaptions' to 'figure3'
        document.querySelectorAll(".outer")[2].appendChild(figure3); //add 'fire3' to the third <DIV> element whose className is 'outer'
        figure3.scrollIntoView(false); //align the bottom of 'figure3' with the bottom of the visible area of the scrollable ancestor (MDN Docs, https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
    }
    else { //otherwise, if track 3 images are not required
        enabledOrDisabled2.style.color = "#293583"; //set the color of the 'enabledOrDisabled3' <SPAN> element to indigo
        enabledOrDisabled2.innerHTML = "Disabled "; //set the innerHTML of the 'enabledOrDisabled3' <SPAN> element to "Disabled "
        figure3.remove(); //remove 'figure3' from the DOM
    }
    figure3Index = 0; //set 'figure3Index' to 0
}

function track2Previous() { //triggered when the User clicks the 'PREVIOUS' <button> to navigate to the previous track 3 image
    if(figure3Index > 0) { //if 'figure3Index' is greater than 0
        figure3.replaceChild(figure3Images[figure3Index-1], figure3.children[0]); //replace the first child element of 'figure3' with the 'figure3Index-1'th element of 'figure3Images'
        figure3.replaceChild(figure3Figcaptions[figure3Index-1], figure3.children[1]); //replace the second child element of 'figure3' with the 'figure3Index-1'th element of 'figure3Figcaptions'
        figure3Index -= 1; //decrement the 'figure3Index' variable by 1
    }
    else { //otherwise, if 'figure3Index' is equal to 0
        figure3.replaceChild(figure3Images[figure3Images.length-1], figure3.children[0]); //replace the first child element of 'figure3' with the 'figure3Images.length-1'th element of 'figure3Images'
        figure3.replaceChild(figure3Figcaptions[figure3Images.length-1], figure3.children[1]); //replace the second child element of 'figure3' with the 'figure3Images.length-1'th element of 'figure3Figcaptions'
        figure3Index = figure3Images.length - 1; //set the 'figure3Index' variable equal to one less than the length of 'figure3Images'
    }
    figure3.scrollIntoView(false); //align the bottom of 'figure3' with the bottom of the visible area of the scrollable ancestor (MDN Docs, https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
}

function track2Next() { //triggered when the User clicks the 'NEXT' <button> to navigate to the next track 3 image
    if(figure3Index < figure3Images.length-1) { //if 'figure3Index' is less than the length of 'figure3Images' minus 1
        figure3.replaceChild(figure3Images[figure3Index+1], figure3.children[0]); //replace the first child element of 'figure3' with the 'figure3Index+1'th element of 'figure3Images'
        figure3.replaceChild(figure3Figcaptions[figure3Index+1], figure3.children[1]); //replace the second child element of 'figure3' with the 'figure3Index+1'th element of 'figure3Figcaptions'
        figure3Index += 1; //increment the 'figure3Index' variable by 1
    }
    else { //otherwise, if 'figure3Index' is equal to the length of 'figure3Images' minus 1
        figure3.replaceChild(figure3Images[0], figure3.children[0]); //replace the first child element of 'figure3' with the first <IMG> in the 'figure3Images' array
        figure3.replaceChild(figure3Figcaptions[0], figure3.children[1]); //replace the second child element of 'figure3' with the first <FIGCAPTION> in the 'figure3Figcaptions' array
        figure3Index = 0; //set the 'figure3Index' variable to 0
    }
    figure3.scrollIntoView(false); //align the bottom of 'figure3' with the bottom of the visible area of the scrollable ancestor (MDN Docs, https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
}

function toggleTrack3Images(checked) { //invoked when the User interacts with the toggle that controls the display/hiding of track 3-related images
    if(checked) { //if track 3 images are required
        enabledOrDisabled3.style.color = "#96ca58"; //set the color of the 'enabledOrDisabled3' <SPAN> element to 'success' green
        enabledOrDisabled3.innerHTML = "Enabled "; //set the innerHTML of the 'enabledOrDisabled3' <SPAN> element to "Enabled "
        figure4 = document.createElement("FIGURE"); //set 'figure4' equal to a new <FIGURE> element
        figure4.appendChild(figure4Images[0]); //add the first <IMG> from 'figure4Images' to 'figure4'
        figure4.appendChild(figure4Figcaptions[0]); //add the first <FIGCAPTION> from 'figure4Figcaptions' to 'figure4'
        document.querySelectorAll(".outer")[3].appendChild(figure4); //add 'figure4' to the fourth <DIV> element whose className is 'outer'
        figure4.scrollIntoView(false); //align the bottom of 'figure4' with the bottom of the visible area of the scrollable ancestor (MDN Docs, https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
    }
    else { //otherwise, if track 3-related images are not required
        enabledOrDisabled3.style.color = "#293583"; //set the color of the 'enabledOrDisabled3' <SPAN> element to indigo
        enabledOrDisabled3.innerHTML = "Disabled "; //set the innerHTML of the 'enabledOrDisabled3' <SPAN> element to "Disabled "
        figure4.remove(); //remove 'figure4' from the DOM
    }
    figure4Index = 0; //set 'figure4Index' to 0
}

function track3Previous() { //triggered when the User clicks the 'PREVIOUS' <button> to navigate to the previous track 3-related image
    if(figure4Index > 0) { //if 'figure4Index' is greater than 0
        figure4.replaceChild(figure4Images[figure4Index-1], figure4.children[0]); //replace the first child element of 'figure4' with the 'figure4Index-1'th element of 'figure4Images'
        figure4.replaceChild(figure4Figcaptions[figure4Index-1], figure4.children[1]); //replace the second child element of 'figure4' with the 'figure4Index-1'th element of 'figure4Figcaptions'
        figure4Index -= 1; //decrement the 'figure4Index' variable by 1
    }
    else { //otherwise, if 'figure4Index' is equal to 0
        figure4.replaceChild(figure4Images[figure4Images.length-1], figure4.children[0]); //replace the first child element of 'figure4' with the 'figure4Images.length-1'th element of 'figure4Images'
        figure4.replaceChild(figure4Figcaptions[figure4Images.length-1], figure4.children[1]); //replace the second child element of 'figure4' with the 'figure4Images.length-1'th element of 'figure4Figcaptions'
        figure4Index = figure4Images.length - 1; //set the 'figure4Index' variable equal to one less than the length of 'figure4Images'
    }
    figure4.scrollIntoView(false); //align the bottom of 'figure4' with the bottom of the visible area of the scrollable ancestor (MDN Docs, https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
}

function track3Next() { //triggered when the User clicks the 'NEXT' <button> to navigate to the next track 3-related image
    if(figure4Index < figure4Images.length-1) { //if 'figure4Index' is less than the length of 'figure4Images' minus 1
        figure4.replaceChild(figure4Images[figure4Index+1], figure4.children[0]); //replace the first child element of 'figure4' with the 'figure4Index+1'th element of 'figure4Images'
        figure4.replaceChild(figure4Figcaptions[figure4Index+1], figure4.children[1]); //replace the second child element of 'figure4' with the 'figure4Index+1'th element of 'figure4Figcaptions'
        figure4Index += 1; //increment the 'figure4Index' variable by 1
    }
    else { //otherwise, if 'figure4Index' is equal to the length of 'figure4Images' minus 1
        figure4.replaceChild(figure4Images[0], figure4.children[0]); //replace the first child element of 'figure4' with the first <IMG> in the 'figure4Images' array
        figure4.replaceChild(figure4Figcaptions[0], figure4.children[1]); //replace the second child element of 'figure4' with the first <FIGCAPTION> in the 'figure4Figcaptions' array
        figure4Index = 0; //set the 'figure4Index' variable to 0
    }
    figure4.scrollIntoView(false); //align the bottom of 'figure4' with the bottom of the visible area of the scrollable ancestor (MDN Docs, https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
}

function toggleTrack4Images(checked) { //invoked when the User interacts with the toggle that controls the display/hiding of track 4-related images
    if(checked) { //if track 4-related images are required
        enabledOrDisabled4.style.color = "#96ca58"; //set the color of the 'enabledOrDisabled4' <SPAN> element to 'success' green
        enabledOrDisabled4.innerHTML = "Enabled "; //set the innerHTML of the 'enabledOrDisabled4' <SPAN> element to "Enabled "
        figure5 = document.createElement("FIGURE"); //set 'figure5' equal to a new <FIGURE> element
        figure5.appendChild(figure5Images[0]); //add the first <IMG> from 'figure5Images' to 'figure5'
        figure5.appendChild(figure5Figcaptions[0]); //add the first <FIGCAPTION> from 'figure5Figcaptions' to 'figure5'
        document.querySelectorAll(".outer")[4].appendChild(figure5); //add 'figure5' to the fifth <DIV> element whose className is 'outer'
        figure5.scrollIntoView(false); //align the bottom of 'figure5' with the bottom of the visible area of the scrollable ancestor (MDN Docs, https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
    }
    else { //otherwise, if track 4-related images are not required
        enabledOrDisabled4.style.color = "#293583"; //set the color of the 'enabledOrDisabled4' <SPAN> element to indigo
        enabledOrDisabled4.innerHTML = "Disabled "; //set the innerHTML of the 'enabledOrDisabled4' <SPAN> element to "Disabled "
        figure5.remove(); //remove 'figure5' from the DOM
    }
    figure5Index = 0; //set the 'figure5Index' variable to 0
}

function track4Previous() { //triggered when the User clicks the 'PREVIOUS' <button> to navigate to the previous track 4-related image
    if(figure5Index > 0) { //if 'figure5Index' is greater than 0
        figure5.replaceChild(figure5Images[figure5Index-1], figure5.children[0]); //replace the first child element of 'figure5' with the 'figure5Index-1'th element of the 'figure5Images' array
        figure5.replaceChild(figure5Figcaptions[figure5Index-1], figure5.children[1]); //replace the second child element of 'figure5' with the 'figure5Index- 1'th element of the 'figure5Figcaptions' array
        figure5Index -= 1; //decrement the 'figure5Index' variable by 1
    }
    else { //otherwise, if 'figure5Index' is equal to 0
        figure5.replaceChild(figure5Images[figure5Images.length-1], figure5.children[0]); //replace the first child element of 'figure5' with the 'figure5Images.length-1' element of the 'figure5Images' array
        figure5.replaceChild(figure5Figcaptions[figure5Images.length-1], figure5.children[1]); //replace the second child element of 'figure5' with the 'figure5Images.length-1'th element of the 'figure5Figcaptions' array
        figure5Index = figure5Images.length - 1; //set the 'figure5Index' variable equal to one less than the length of 'figure5Images'
    }
    figure5.scrollIntoView(false); //align the bottom of 'figure5' with the bottom of the visible area of the scrollable ancestor (MDN Docs, https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
}

function track4Next() { //triggered when the User clicks the 'NEXT' <button> to navigate to the next track 4-related image
    if(figure5Index < figure5Images.length-1) { //if 'figure5Index' is less than the length of 'figure5Images' minus 1
        figure5.replaceChild(figure5Images[figure5Index+1], figure5.children[0]); //replace the first child element of 'figure5' with the 'figure5Index+1'th element of 'figure5Images'
        figure5.replaceChild(figure5Figcaptions[figure5Index+1], figure5.children[1]); //replace the second child element of 'figure5' with the 'figure5Index+1'th element of 'figure5Figcaptions'
        figure5Index += 1; //increment the 'figure5Index' variable by 1
    }
    else { //otherwise, if 'figure5Index' is equal to the length of 'figure5Images' minus 1
        figure5.replaceChild(figure5Images[0], figure5.children[0]); //replace the first child element of 'figure5' with the first <IMG> in the 'figure5Images' array
        figure5.replaceChild(figure5Figcaptions[0], figure5.children[1]); //replace the second child element of 'figure5' with the first <FIGCAPTION> in the 'figure5Figcaptions' array
        figure5Index = 0; //set the 'figure5Index' variable to 0
    }
    figure5.scrollIntoView(false); //align the bottom of 'figure5' with the bottom of the visible area of the scrollable ancestor (MDN Docs, https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
}

function toggleTrack5Images(checked) { //invoked when the User interacts with the toggle that controls the display/hiding of track 5-related images
    if(checked) { //if track 5 images are required
        enabledOrDisabled5.style.color = "#96ca58"; //set the color of the 'enabledOrDisabled5' <SPAN> element to 'success' green
        enabledOrDisabled5.innerHTML = "Enabled "; //set the innerHTML of the 'enabledOrDisabled5' <SPAN> element to "Enabled "
        figure6 = document.createElement("FIGURE"); //set 'figure6' equal to a new <FIGURE> element
        figure6.appendChild(figure6Images[0]); //add the first <IMG> from 'figure6Images' to 'figure6'
        figure6.appendChild(figure6Figcaptions[0]); //add the first <FIGCAPTION> from 'figure6Figcaptions' to 'figure6'
        document.querySelectorAll(".outer")[5].appendChild(figure6); //add 'figure6' to the sixth <DIV> element whose className is 'outer'
        figure6.scrollIntoView(false); //align the bottom of 'figure6' with the bottom of the visible area of the scrollable ancestor (MDN Docs, https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
    }
    else { //otherwise, if track 5 images are not required
        enabledOrDisabled5.style.color = "#293583"; //set the color of the 'enabledOrDisabled5' <SPAN> element to indigo
        enabledOrDisabled5.innerHTML = "Disabled "; //set the innerHTML of the 'enabledOrDisabled5' <SPAN> element to "Disabled "
        figure6.remove(); //remove 'figure6' from the DOM
    }
    figure6Index = 0; //set 'figure6Index' to 0
}

function track5Previous() { //triggered when the User clicks the 'PREVIOUS' <button> to navigate to the previous track 5 image
    if(figure6Index > 0) { //if 'figure6Index' is greater than 0
        figure6.replaceChild(figure6Images[figure6Index-1], figure6.children[0]); //replace the first child element of 'figure6' with the 'figure6Index-1'th element of 'figure6Images'
        figure6.replaceChild(figure6Figcaptions[figure6Index-1], figure6.children[1]); //replace the second child element of 'figure6' with the 'figure6Index-1'th element of 'figure6Figcaptions'
        figure6Index -= 1; //decrement the 'figure6Index' by 1
    }
    else { //otherwise, if 'figure6Index' is equal to 0
        figure6.replaceChild(figure6Images[figure6Images.length-1], figure6.children[0]); //replace the first child element of 'figure6' with the 'figure6Images.length-1'th element of 'figure6Images'
        figure6.replaceChild(figure6Figcaptions[figure6Images.length-1], figure6.children[1]); //replace the second child element of 'figure6' with the 'figure6Images.length-1'th element of 'figure6Figcaptions'
        figure6Index = figure6Images.length - 1; //set the 'figure6Index' variable equal to one less than the length of 'figure6Images'
    }
    figure6.scrollIntoView(false); //align the bottom of 'figure6' with the bottom of the visible area of the scrollable ancestor (MDN Docs, https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
}

function track5Next() { //triggered when the User clicks the 'NEXT' <button> to navigate to the next track 5 image
    if(figure6Index < figure6Images.length-1) { //if 'figure6Index' is less than the length of 'figure6Images.length' minus 1
        figure6.replaceChild(figure6Images[figure6Index+1], figure6.children[0]); //replace the first child element of 'figure6' with the 'figure6Index+1'th element of 'figure6Images'
        figure6.replaceChild(figure6Figcaptions[figure6Index+1], figure6.children[1]); //replace the second child element of 'figure6' with the 'figure6Index+1'th element of 'figure6Figcaptions'
        figure6Index += 1; //increment the 'figure6Index' variable by 1
    }
    else { //otherwise, if 'figure6Index' is equal to the length of 'figure6Images.length' minus 1
        figure6.replaceChild(figure6Images[0], figure6.children[0]); //replace the first child element of 'figure6' with the first <IMG> in the 'figure6Images' array
        figure6.replaceChild(figure6Figcaptions[0], figure6.children[1]); //replace the second child element of 'figure6' with the first <FIGCAPTION> in the 'figure6Figcaptions' array
        figure6Index = 0; //set the 'figure6Index' variable to 0
    }
    figure6.scrollIntoView(false); //align the bottom of 'figure6' with the bottom of the visible area of the scrollable ancestor (MDN Docs, https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
}

function toggleTrack6Images(checked) { //invoked when the User interacts with the toggle that controls the display/hiding of track 6-related images
    if(checked) { //if track 6 images are required
        enabledOrDisabled6.style.color = "#96ca58"; //set the color of the 'enabledOrDisabled6' <SPAN> element to 'success' green
        enabledOrDisabled6.innerHTML = "Enabled "; //set the innerHTML of the 'enabledOrDisabled6' <SPAN> element to "Enabled "
        figure7 = document.createElement("FIGURE"); //set 'figure7' equal to a new <FIGURE> element
        figure7.appendChild(figure7Images[0]); //add the first <IMG> from 'figure7Images' to 'figure7'
        figure7.appendChild(figure7Figcaptions[0]); //add the first <FIGCAPTION> from 'figure7Figcaptions' to 'figure7'
        document.querySelectorAll(".outer")[6].appendChild(figure7); //add 'figure7' to the seventh <DIV> element whose className is 'outer'
        figure7.scrollIntoView(false); //align the bottom of 'figure7' with the bottom of the visible area of the scrollable ancestor (MDN Docs, https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
    }
    else { //otherwise, if track 6 images are not required
        enabledOrDisabled6.style.color = "#293583"; //set the color of the 'enabledOrDisabled6' <SPAN> element to indigo
        enabledOrDisabled6.innerHTML = "Disabled "; //set the innerHTML of the 'enabledOrDisabled6' <SPAN> element to "Disabled "
        figure7.remove(); //remove 'figure7' from the DOM
    }
    figure7Index = 0; //set the 'figure7Index' variable to 0
}

function track6Previous() { //triggered when the User clicks the 'PREVIOUS' <button> to navigate to the previous track 6 image
    if(figure7Index > 0) { //if 'figure7Index' is greater than 0
        figure7.replaceChild(figure7Images[figure7Index-1], figure7.children[0]); //replace the first child element of 'figure7' with the 'figure7Index-1'th element of 'figure7Images'
        figure7.replaceChild(figure7Figcaptions[figure7Index-1], figure7.children[1]); //replace the second child element of 'figure7' with the 'figure7Index-1'th element of 'figure7Figcaptions'
        figure7Index -= 1; //decrement the 'figure7Index' by 1
    }
    else { //otherwise, if 'figure7Index' is equal to 0
        figure7.replaceChild(figure7Images[figure7Images.length-1], figure7.children[0]); //replace the first child element of 'figure7' with the 'figure7Images.length-1'th element of 'figure7Images'
        figure7.replaceChild(figure7Figcaptions[figure7Images.length-1], figure7.children[1]); //replace the second child element of 'figure7' with the 'figure7Images.length-1'th element of 'figure7Figcaptions'
        figure7Index = figure7Images.length - 1; //set the 'figure7Index' variable equal to one less than the length of 'figure7Images'
    }
    figure7.scrollIntoView(false); //align the bottom of 'figure7' with the bottom of the visible area of the scrollable ancestor (MDN Docs, https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
}

function track6Next() { //triggered when the User clicks the 'NEXT' <button> to navigate to the next track 6 image
    if(figure7Index < figure7Images.length-1) { //if 'figure7Index' is less than the length of 'figure7Images' minus 1
        figure7.replaceChild(figure7Images[figure7Index+1], figure7.children[0]); //replace the first child element of 'figure7' with the 'figure7Index+1'th element of 'figure7Images'
        figure7.replaceChild(figure7Figcaptions[figure7Index+1], figure7.children[1]); //replace the second child element of 'figure7' with the 'figure7Index+1'th element of 'figure7Figcaptions'
        figure7Index += 1; //increment the 'figure7Index' variable by 1
    }
    else { //otherwise, if 'figure7Index' is equal to the length of 'figure7Images' minus 1
        figure7.replaceChild(figure7Images[0], figure7.children[0]); //replace the first child element of 'figure7' with the first <IMG> in the 'figure7Images' array
        figure7.replaceChild(figure7Figcaptions[0], figure7.children[1]); //replace the second child element of 'figure7' with the first <FIGCAPTION> in the 'figure7Figcaptions' array
        figure7Index = 0; //set the 'figure7Index' variable to 0
    }
    figure7.scrollIntoView(false); //align the bottom of 'figure7' with the bottom of the visible area of the scrollable ancestor (MDN Docs, https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
}

function toggleTrack7Images(checked) { //invoked when the User interacts with the toggle that controls the display/hiding of track 7-related images
    if(checked) { //if track 7 images are required
        enabledOrDisabled7.style.color = "#96ca58"; //set the color of the 'enabledOrDisabled7' <SPAN> element to 'success' green
        enabledOrDisabled7.innerHTML = "Enabled "; //set the innerHTML of the 'enabledOrDisabled7' <SPAN> element to "Enabled "
        figure8 = document.createElement("FIGURE"); //set 'figure8' equal to a new <FIGURE> element
        figure8.appendChild(figure8Images[0]); //add the first <IMG> from 'figure8Images' to 'figure8'
        figure8.appendChild(figure8Figcaptions[0]); //add the first <FIGCAPTION> from 'figure8Figcaptions' to 'figure8'
        document.querySelectorAll(".outer")[7].appendChild(figure8); //add 'figure8' to the eighth <DIV> element whose className is 'outer'
        figure8.scrollIntoView(false); //align the bottom of 'figure8' with the bottom of the visible area of the scrollable ancestor (MDN Docs, https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
    }
    else { //otherwise, if track 7 images are not required
        enabledOrDisabled7.style.color = "#293583"; //set the color of the 'enabledOrDisabled7' <SPAN> element to indigo
        enabledOrDisabled7.innerHTML = "Disabled "; //set the innerHTML of the 'enabledOrDisabled7' <SPAN> element to "Disabled "
        figure8.remove(); //remove 'figure8' from the DOM
    }
    figure8Index = 0; //set the 'figure8Index' variable equal to 0
}

function track7Previous() { //triggered when the User clicks the 'PREVIOUS' <button> to navigate to the previous track 7 image
    if(figure8Index > 0) { //if 'figure8Index' is greater than 0
        figure8.replaceChild(figure8Images[figure8Index-1], figure8.children[0]); //replace the first child element of 'figure8' with the 'figure8Index-1'th element of 'figure8Images'
        figure8.replaceChild(figure8Figcaptions[figure8Index-1], figure8.children[1]); //replace the second child element of 'figure8' with the 'figure8Index-1'th element of 'figure8Figcaptionss'
        figure8Index -= 1; //decrement the 'figure8Index' variable by 1
    }
    else { //otherwise, if 'figure8Index' is equal to 0
        figure8.replaceChild(figure8Images[figure8Images.length-1], figure8.children[0]); //replace the first child element of 'figure8' with the 'figure8Images.length-1'th element of the 'figure8Images' array
        figure8.replaceChild(figure8Figcaptions[figure8Images.length-1], figure8.children[1]); //replace the second child element of 'figure8' with the 'figure8Images.length-1'th element of the 'figure8Figcaptions' array
        figure8Index = figure8Images.length - 1; //set the 'figure8Index' variable equal to one less than the length of 'figure8Images'
    }
    figure8.scrollIntoView(false); //align the bottom of 'figure8' with the bottom of the visible area of the scrollable ancestor (MDN Docs, https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
}

function track7Next() { //triggered when the User clicks the 'NEXT' <button> to navigate to the next track 7 image
    if(figure8Index < figure8Images.length-1) { //if 'figure8Index' is less than the length of 'figure8Images' minus 1
        figure8.replaceChild(figure8Images[figure8Index+1], figure8.children[0]); //replace the first child element of 'figure8' with the 'figure8Index+1'th element of 'figure8Images'
        figure8.replaceChild(figure8Figcaptions[figure8Index+1], figure8.children[1]); //replace the second child element of 'figure8' with the 'figure8Index+1'th element of 'figure8Figcaptions'
        figure8Index += 1; //increment the 'figure8Index' variable by 1
    }
    else { //otherwise, if 'figure8Index' is equal to the length of 'figure8Images' minus 1
        figure8.replaceChild(figure8Images[0], figure8.children[0]); //replace the first child element of 'figure8' with the first <IMG> in the 'figure8Images' array
        figure8.replaceChild(figure8Figcaptions[0], figure8.children[1]); //replace the second child element of 'figure8' with the first <FIGCAPTION> in 'figure8Figcaptions'
        figure8Index = 0; //set the 'figure8Index' variable to 0
    }
    figure8.scrollIntoView(false); //align the bottom of 'figure8' with the bottom of the visible area of the scrollable ancestor (MDN Docs, https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
}

function toggleTrack8Images(checked) { //invoked when the User interacts with the toggle that controls the display/hiding of track 8-related images
    if(checked) { //if track 8 images are required
        enabledOrDisabled8.style.color = "#96ca58"; //set the color of the 'enabledOrDisabled8' <SPAN> element to 'success' green
        enabledOrDisabled8.innerHTML = "Enabled "; //set the innerHTML of the 'enabledOrDisabled8' <SPAN> element to "Enabled "
        figure9 = document.createElement("FIGURE"); //set 'figure9' equal to a new <FIGURE> element
        figure9.appendChild(figure9Images[0]); //add the first <IMG> from 'figure9Images' to 'figure9'
        figure9.appendChild(figure9Figcaptions[0]); //add the first <FIGCAPTION> from 'figure9Figcaptions' to 'figure9'
        document.querySelectorAll(".outer")[8].appendChild(figure9); //add 'figure9' to the ninth <DIV> element whose className is 'outer'
        figure9.scrollIntoView(false); //align the bottom of 'figure9' with the bottom of the visible area of the scrollable ancestor (MDN Docs, https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
    }
    else { //otherwise, if track 8 images are not required
        enabledOrDisabled8.style.color = "#293583"; //set the color of the 'enabledOrDisabled8' <SPAN> element to indigo
        enabledOrDisabled8.innerHTML = "Disabled "; //set the innerHTML of the 'enabledOrDisabled8' <SPAN> element to "Disabled "
        figure9.remove(); //remove 'figure9' from the DOM
    }
    figure9Index = 0; //set the 'figure9Index' variable equal to 0
}

function track8Previous() { //triggered when the User clicks the 'PREVIOUS' <button> to navigate to the previous track 8 image
    if(figure9Index > 0) { //if 'figure9Index' is greater than 0
        figure9.replaceChild(figure9Images[figure9Index-1], figure9.children[0]); //replace the first child element of 'figure9' with the 'figure9Index-1'th element of 'figure9Images'
        figure9.replaceChild(figure9Figcaptions[figure9Index-1], figure9.children[1]); //replace the second child element of 'figure9' with the 'figure9Index-1'th element of 'figure9Figcaptions'
        figure9Index -= 1; //decrement the 'figure9Index' variable by 1
    }
    else { //otherwise, if 'figure9Index' is equal to 0
        figure9.replaceChild(figure9Images[figure9Images.length-1], figure9.children[0]); //replace the first child element of 'figure9' with the 'figure9Images.length-1'th element of 'figure9Images'
        figure9.replaceChild(figure9Figcaptions[figure9Images.length-1], figure9.children[1]); //replace the second child element of 'figure9' with the 'figure9Images.length-1'th element of 'figure9Figcaptions'
        figure9Index = figure9Images.length - 1; //set the 'figure9Index' variable equal to one less than the length of 'figure9Images'
    }
    figure9.scrollIntoView(false); //align the bottom of 'figure9' with the bottom of the visible area of the scrollable ancestor (MDN Docs, https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
}

function track8Next() { //triggered when the User clicks the 'NEXT' <button> to navigate to the next track 8 image
    if(figure9Index < figure9Images.length-1) { //if 'figure9Index' is less than the length of 'figure9Images' minus 1
        figure9.replaceChild(figure9Images[figure9Index+1], figure9.children[0]); //replace the first child element of 'figure9' with the 'figure9Index+1'th element of 'figure9Images'
        figure9.replaceChild(figure9Figcaptions[figure9Index+1], figure9.children[1]); //replace the second child element of 'figure9' with the 'figure9Index+1'the element of 'figure9Figcaptions'
        figure9Index += 1; //increment the 'figure9Index' variable by 1
    }
    else { //otherwise, if 'figure9Index' is equal to the length of 'figure9Images' minus 1
        figure9.replaceChild(figure9Images[0], figure9.children[0]); //replace the first child element of 'figure9' with the first <IMG> in the 'figure9Images' array
        figure9.replaceChild(figure9Figcaptions[0], figure9.children[1]); //replace the second child element of 'figure9' with the first <FIGCAPTION> in the 'figure9Figcaptions' array
        figure9Index = 0; //set the 'figure9Index' variable equal to 0
    }
    figure9.scrollIntoView(false); //align the bottom of 'figure9' with the bottom of the visible area of the scrollable ancestor (MDN Docs, https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
}

function toggleTrack9Images(checked) { //invoked when the User interacts with the toggle that controls the display/hiding of track 9-related images
    if(checked) { //if track 9 images are required
        enabledOrDisabled9.style.color = "#96ca58"; //set the color of the 'enabledOrDisabled9' <SPAN> element to 'success' green
        enabledOrDisabled9.innerHTML = "Enabled "; //set the innerHTML of the 'enabledOrDisabled9' <SPAN> element to "Enabled "
        figure10 = document.createElement("FIGURE"); //set 'figure10' equal to a new <FIGURE> element
        figure10.appendChild(figure10Images[0]); //add the first <IMG> from 'figure10Images' to 'figure10'
        figure10.appendChild(figure10Figcaptions[0]); //add the first <FIGCAPTION> from 'figure10Figcaptions' to 'figure10'
        document.querySelectorAll(".outer")[9].appendChild(figure10); //add 'figure10' to the tenth <DIV> element whose className is 'outer'
        figure10.scrollIntoView(false); //align the bottom of 'figure10' with the bottom of the visible area of the scrollable ancestor
    }
    else { //otherwise, if track 9 images are not required
        enabledOrDisabled9.style.color = "#293583"; //set the color of the 'enabledOrDisabled9' <SPAN> element to indigo
        enabledOrDisabled9.innerHTML = "Disabled "; //set the innerHTML of the 'enabledOrDisabled9' <SPAN> element to "Disabled "
        figure10.remove(); //remove 'figure10' from the DOM
    }
    figure10Index = 0; //set the 'figure10Index' variable to 0
}

function track9Previous() { //triggered when the User clicks the 'PREVIOUS' <button> to navigate to the previous track 9 image
    if(figure10Index > 0) { //if 'figure10Index' is greater than 0
        figure10.replaceChild(figure10Images[figure10Index-1], figure10.children[0]); //replace the first child element of 'figure10' with the 'figure10Index-1'th element of 'figure10Images'
        figure10.replaceChild(figure10Figcaptions[figure10Index-1], figure10.children[1]); //replace the second child element of 'figure10' with the 'figure10Index-1'th element of 'figure10Figcaptions'
        figure10Index -= 1; //decrement the 'figure10Index' by 1
    }
    else { //otherwise, if 'figure10Index' is equal to 0
        figure10.replaceChild(figure10Images[figure10Images.length-1], figure10.children[0]); //replace the first child element of 'figure10' with the 'figure10Images.length-1'th element of 'figure10Images'
        figure10.replaceChild(figure10Figcaptions[figure10Images.length-1], figure10.children[1]); //replace the second child element of 'figure10' with the 'figure10Images.length-1'th element of 'figure10Figcaptions'
        figure10Index = figure10Images.length - 1; //set the 'figure10Index' variable equal to one less than the length of 'figure10Images'
    }
    figure10.scrollIntoView(false); //align the bottom of 'figure10' with the bottom of the visible area of the scrollable ancestor (MDN Docs, https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
}

function track9Next() { //triggered when the User clicks the 'NEXT' <button> to navigate to the next track 9 image
    if(figure10Index < figure10Images.length-1) { //if 'figure10Index' is less than the length of 'figure10Images' minus 1
        figure10.replaceChild(figure10Images[figure10Index+1], figure10.children[0]); //replace the first child element of 'figure10' with the 'figure10Index+1'th element of 'figure10Images'
        figure10.replaceChild(figure10Figcaptions[figure10Index+1], figure10.children[1]); //replace the second child element of 'figure10' with the 'figure10Index+1'th element of 'figure10Figcaptions'
        figure10Index += 1; //increment the 'figure10Index' variable by 1
    }
    else { //otherwise, if 'figure10Index' is equal to the length of 'figure10Images' minus 1
        figure10.replaceChild(figure10Images[0], figure10.children[0]); //replace the first child element of 'figure10' with the first <IMG> in the 'figure10Images' array
        figure10.replaceChild(figure10Figcaptions[0], figure10.children[1]); //replace the second child element of 'figure10' with the first <FIGCAPTION> in the 'figure10Figcaptions' array
        figure10Index = 0; //set the 'figure10Index' variable to 0
    }
    figure10.scrollIntoView(false); //align the bottom of 'figure10' with the bottom of the visible area of the scrollable ancestor (MDN Docs, https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
}

function toggleTrack10Images(checked) { //invoked when the User interacts with the toggle that controls the display/hiding of track 10-related images
    if(checked) { //if track 10 images are required
        enabledOrDisabled10.style.color = "#96ca58"; //set the color of the 'enabledOrDisabled10' <SPAN> element to 'success' green
        enabledOrDisabled10.innerHTML = "Enabled "; //set the innerHTML of the 'enabledOrDisabled10' <SPAN> element to "Enabled "
        figure11 = document.createElement("FIGURE"); //set 'figure11' equal to a new <FIGURE> element
        figure11.appendChild(figure11Images[0]); //add the first <IMG> from 'figure11Images' to 'figure11'
        figure11.appendChild(figure11Figcaptions[0]); //add the first <FIGCAPTION> from 'figure11Figcaptions' to 'figure11'
        document.querySelectorAll(".outer")[10].appendChild(figure11); //add 'figure11' to the eleventh <DIV> element whose className is 'outer'
        figure11.scrollIntoView(false); //align the bottom of 'figure11' with the bottom of the visible area of the scrollable ancestor (MDN Docs, https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
    }
    else { //otherwise, if track 10 images are not required
        enabledOrDisabled10.style.color = "#293583"; //set the color of the 'enabledOrDisabled10' <SPAN> element to indigo
        enabledOrDisabled10.innerHTML = "Disabled "; //set the innerHTML of the 'enabledOrDisabled10' <SPAN> element to "Disabled "
        figure11.remove(); //remove 'figure11' from the DOM
    }
    figure11Index = 0; //set the 'figure11Index' variable equal to 0
}

function track10Previous() { //triggered when the User clicks the 'PREVIOUS' <button> to navigate to the previous track 10 image
    if(figure11Index > 0) { //if 'figure11Index' is greater than 0
        figure11.replaceChild(figure11Images[figure11Index-1], figure11.children[0]); //replace the first child element of 'figure11' with the 'figure11Index-1'th element of 'figure11Images'
        figure11.replaceChild(figure11Figcaptions[figure11Index-1], figure11.children[1]); //replace the second child element of 'figure11' with the 'figure11Index-1'th element of 'figure11Figcaptions'
        figure11Index -= 1; //decrement the 'figure11Index' variable by 1
    }
    else { //otherwise, if 'figure11Index' is equal to 0
        figure11.replaceChild(figure11Images[figure11Images.length-1], figure11.children[0]); //replace the first child element of 'figure11' with the 'figure11Images.length-1'th element of 'figure11Images'
        figure11.replaceChild(figure11Figcaptions[figure11Images.length-1], figure11.children[1]); //replace the second child element of 'figure11' with the 'figure11Images.length-1'th element of 'figure11Figcaptions'
        figure11Index = figure11Images.length - 1; //set the 'figure11Index' variable equal to one less than the length of 'figure11Images'
    }
    figure11.scrollIntoView(false); //align the bottom of 'figure11' with the bottom of the visible area of the scrollable ancestor (MDN Docs, https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
}

function track10Next() { //triggered when the User clicks the 'NEXT' <button> to navigate to the next track 11-related image
    if(figure11Index < figure11Images.length-1) { //if 'figure11Index' is less than the length of 'figure11Images' minus 1
        figure11.replaceChild(figure11Images[figure11Index+1], figure11.children[0]); //replace the first child element of 'figure11' with the 'figure11Index+1'th element of 'figure11Images'
        figure11.replaceChild(figure11Figcaptions[figure11Index+1], figure11.children[1]); //replace the second child element of 'figure11' with the 'figure11Index+1'th element of 'figure11Figcaptions'
        figure11Index += 1; //increment the 'figure11Index' variable by 1
    }
    else { //otherwise, if 'figure11Index' is equal to the length of 'figure11Images' minus 1
        figure11.replaceChild(figure11Images[0], figure11.children[0]); //replace the first child element of 'figure11' with the first <IMG> in the 'figure11Images' array
        figure11.replaceChild(figure11Figcaptions[0], figure11.children[1]); //replace the second child element of 'figure11' with the first <FIGCAPTION> in the 'figure11Figcaptions' array
        figure11Index = 0; //set the 'figure11Index' variable to 0
    }
    figure11.scrollIntoView(false); //align the bottom of 'figure11' with the bottom of the visible area of the scrollable ancestor (MDN Docs, https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
}

//functions which display/hide track information:
function toggleTrack1Info() { //function triggered when the User clicks the <p> element bearing the Font Awesome right-pointing-hand icon, track 1 artist(s) name(s), and track title
    if(track1.style.display === "none") { //if the 'track1' <section> is not currently displayed
        track1.style.display = "block"; //display the 'track1' <section>
        track1.scrollIntoView(false); //align the bottom of 'track1' with the bottom of the visible area of the scrollable ancestor (MDN Docs, https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
    }
    else { //otherwise, if the 'track1' <section> is currently displayed
        track1.style.display = "none"; //hide the 'track1' <section>
    }
}

function toggleTrack2Info() { //function triggered when the User clicks the <p> element bearing the Font Awesome right-pointing-hand icon, track 2 artist(s) name(s), and track title
    if(track2.style.display === "none") { //if the 'track2' <section> is not currently displayed
        track2.style.display = "block"; //display the 'track2' <section>
        track2.scrollIntoView(false); //align the bottom of 'track2' with the bottom of the visible area of the scrollable ancestor (MDN Docs, https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
    }
    else { //otherwise, if the 'track2' <section> is currently displayed
        track2.style.display = "none"; //hide the 'track2' <section>
    }
}

function toggleTrack3Info() { //function triggered when the User clicks the <p> element bearing the Font Awesome right-pointing-hand icon, track 3 artist(s) name(s), and track title
    if(track3.style.display === "none") { //if the 'track3' <section> is not currently displayed
        track3.style.display = "block"; //display the 'track3' <section>
        track3.scrollIntoView(false); //align the bottom of 'track3' with the bottom of the visible area of the scrollable ancestor (MDN Docs, https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
    }
    else { //otherwise, if the 'track3' <section> is currently displayed
        track3.style.display = "none"; //hide the 'track3' <section>
    }
}

function toggleTrack4Info() { //function triggered when the User clicks the <p> element bearing the Font Awesome right-pointing-hand icon, track 4 artist(s) name(s), and track title
    if(track4.style.display === "none") { //if the 'track4' <section> is not currently displayed
        track4.style.display = "block"; //display the 'track4' <section>
        track4.scrollIntoView(false); //align the bottom of 'track4' with the bottom of the visible area of the scrollable ancestor (MDN Docs, https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
    }
    else { //otherwise, if the 'track4' <section> is currently displayed
        track4.style.display = "none"; //hide the 'track4' <section>
    }
}

function toggleTrack5Info() { //function triggered when the User clicks the <p> element bearing the Font Awesome right-pointing-hand icon, track 5 artist(s) name(s), and track title
    if(track5.style.display === "none") { //if the 'track5' <section> is not currently displayed
        track5.style.display = "block"; //display the 'track5' <section>
        track5.scrollIntoView(false); //align the bottom of 'track5' with the bottom of the visible area of the scrollable ancestor (MDN Docs, https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
    }
    else { //otherwise, if the 'track5' <section> is currently displayed
        track5.style.display = "none"; //hide the 'track5' section
    }
}

function toggleTrack6Info() { //function triggered when the User clicks the <p> element bearing the Font Awesome right-pointing-hand icon, track 6 artist(s) name(s), and track title
    if(track6.style.display === "none") { //if the 'track6' <section> is not currently displayed
        track6.style.display = "block"; //display the 'track6' <section>
        track6.scrollIntoView(false); //align the bottom of 'track6' with the bottom of the visible area of the scrollable ancestor (MDN Docs, https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
    }
    else { //otherwise, if the 'track6' <section> is currently displayed
        track6.style.display = "none"; //hide the 'track6' <section>
    }
}

function toggleTrack7Info() { //function triggered when the User clicks the <p> element bearing the Font Awesome right-pointing-hand icon, track 7 artist(s) name(s), and track title
    if(track7.style.display === "none") { //if the 'track7' <section> is not currently displayed
        track7.style.display = "block"; //display the 'track7' <section>
        track7.scrollIntoView(false); //align the bottom of 'track7' with the bottom of the visible area of the scrollable ancestor (MDN Docs, https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
    }
    else { //otherwise, if the 'track7' <section> is currently displayed
        track7.style.display = "none"; //hide the 'track7' <section>
    }
}

function toggleTrack8Info() { //function triggered when the User clicks the <p> element bearing the Font Awesome right-pointing-hand icon, track 8 artist(s) name(s), and track title
    if(track8.style.display === "none") { //if the 'track8' <section> is not currently displayed
        track8.style.display = "block"; //display the 'track8' <section>
        track8.scrollIntoView(false); //align the bottom of 'track8' with the bottom of the visible area of the scrollable ancestor (MDN Docs, https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
    }
    else { //otherwise, if the 'track8' <section> is currently displayed
        track8.style.display = "none"; //hide the 'track8' <section>
    }
}

function toggleTrack9Info() { //function triggered when the User clicks the <p> element bearing the Font Awesome right-pointing-hand icon, track 9 artist(s) name(s), and track title
    if(track9.style.display === "none") { //if the 'track9' section is not currently displayed
        track9.style.display = "block"; //display the 'track9' <section>
        track9.scrollIntoView(false); //align the bottom of 'track9' with the bottom of the visible area of the scrollable ancestor (MDN Docs, https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
    }
    else { //otherwise, if the 'track9' <section> is currently displayed
        track9.style.display = "none"; //hide the 'track9' <section>
    }
}

function toggleTrack10Info() { //function triggered when the User clicks the <p> element bearing the Font Awesome right-pointing-hand icon, track 10 artist(s) name(s), and track title
    if(track10.style.display === "none") { //if the 'track10' <section> is not currently displayed
        track10.style.display = "block"; //display the 'track10' <section>
        track10.scrollIntoView(false); //align the bottom of 'track10' with the bottom of the visible area of the scrollable ancestor (MDN Docs, https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)
    }
    else { //otherwise, if the 'track10' <section> is currently displayed
        track10.style.display = "none"; //hide the 'track10' <section>
    }
}

//function which formats the track duration:
function calculateDuration(milliseconds) { //function invoked programmatically when processing the Spotify server's response to a request for an artist's popular tracks
    let seconds = Math.round(milliseconds/1000); //let the 'seconds' variable represent the rounded result of the 'milliseconds' argument divided by 1000
    let mins = Math.floor(seconds/60); //let the 'mins' variable represent the rounded-down integer value of seconds divided by 60
    seconds = seconds % 60; //set 'seconds' equal to the remainder of 'seconds' divided by 60
    if(mins < 10) { //if 'mins' is less than 10
        mins = "0" + mins; //set 'mins' equal to "0" + mins
    }
    if (seconds < 10) { //if 'seconds' is less than 10
        seconds = "0" + seconds; //set 'seconds' equal to "0" + seconds
    }
    return mins + ":" + seconds; //return the track duration in the format mm:ss (mins:seconds)
}

//function that updates the elements relating to track information:
function updateTrackElements() { //function invoked programmatically when processing the Spotify server's response to a request for an artist's popular tracks
    for(let i=0; i<trackButtons.length; i++) { //for as long as there are elements in the 'trackButtons' array
        trackButtons[i].innerHTML += artistStrings[i] + trackTitles[i]; //set the innerHTML of the 'i'th element of 'trackButtons' to the concatenation of the 'i'th element of the 'artistStrings' and 'trackTitles' arrays
        trackULs[i].children[0].innerHTML += trackPopularities[i]; //set the innerHTML of the first <li> child element of the 'i'th element of 'trackULs' to its existing innerHTML plus the 'i'th element of the 'trackPopularities' array
        trackULs[i].children[1].innerHTML += durations[i]; //set the innerHTML of the second <li> child element of the 'i'th element of 'trackULs' to its existing innerHTML plus the 'i'th element of the 'durations' array
    }
}

