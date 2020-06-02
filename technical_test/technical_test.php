<?php
    header("Accept: application/json"); #advertise which content type - expressed as a MIME type - this client is able to understand (MDNDocs, https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept)
 ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Full Stack Developer Technical Test</title>
    <link rel="stylesheet" type="text/css" href="stylesheet/stylesheet.css" />
    <script src="https://use.fontawesome.com/948edc34fa.js"></script>
  </head>
  <body onload="requestSpotifyToken()">
    <span id="communicationError"></span>
    <section id="artistInfo" style="display:none;">
    	<h1>SIA</h1>
    	<p>The following information has been provided by the <a href="https://developer.spotify.com/documentation/web-api/" target="_blank">Spotify API</a> (<?php date_default_timezone_set('UTC'); echo "correct as of " . date('Y-m-d H:i:s') . " UTC"; ?>) and relates to the popular contemporary music artist Sia.</p>
    	<h2>ARTIST INFORMATION</h2>
    	<ul>
    	  <li id="followers">Total followers on Spotify: </li>
    	  <li><span id="popularity">Spotify popularity: </span></li>
    	  <li id="genres">Musical genres</li>
    	</ul>
    	<label>View images of Sia</label>
    	<br><span id="enabledOrDisabled">Disabled </span><label class="switch"><input type="checkbox" onclick="toggleImages(this.checked)"><span class="slider round"></span></label>
    	<div class="outer">
    	  <button class="previousBtn" onclick="artistPrevious()">PREVIOUS</button>
    	  <button class="nextBtn" onclick="artistNext()">NEXT</button>
    	</div>
    </section>
    <section id="tracksInfo" style="display:none;">
    	<h2>POPULAR TRACKS</h2>
    	<p class="BUTTON" onclick="toggleTrack1Info()"><i class="fa fa-hand-o-right"></i> </p>
    	<section id="track1" style="display:none;">
    	  <ul class="UL">
    	    <li>Spotify popularity: </li>
    	    <li>Duration (mm:ss): </li>
    	  </ul>
    	  <label>View track artwork</label>
    	  <br><span id="enabledOrDisabled1">Disabled </span><label class="switch"><input type="checkbox" onclick="toggleTrack1Images(this.checked)"><span class="slider round"></span></label>
    	  <div class="outer">
    	    <button class="previousBtn1" onclick="track1Previous()">PREVIOUS</button>
    	    <button class="nextBtn1" onclick="track1Next()">NEXT</button>
    	  </div>
    	</section>
    	<p class="BUTTON" onclick="toggleTrack2Info()"><i class="fa fa-hand-o-right"></i> </p>
    	<section id="track2" style="display:none;">
    	  <ul class="UL">
    	    <li>Spotify popularity: </li>
    	    <li>Duration (mm:ss): </li>
    	  </ul>
    	  <label>View track artwork</label>
    	  <br><span id="enabledOrDisabled2">Disabled </span><label class="switch"><input type="checkbox" onclick="toggleTrack2Images(this.checked)"><span class="slider round"></span></label>
    	  <div class="outer">
    	    <button class="previousBtn2" onclick="track2Previous()">PREVIOUS</button>
    	    <button class="nextBtn2" onclick="track2Next()">NEXT</button>
    	  </div>
    	</section>
    	<p class="BUTTON" onclick="toggleTrack3Info()"><i class="fa fa-hand-o-right"></i> </p>
    	<section id="track3" style="display:none;">
    	  <ul class="UL">
    	    <li>Spotify popularity: </li>
    	    <li>Duration (mm:ss): </li>
    	  </ul>
    	  <label>View track artwork</label>
    	  <br><span id="enabledOrDisabled3">Disabled </span><label class="switch"><input type="checkbox" onclick="toggleTrack3Images(this.checked)"><span class="slider round"></span></label>
    	  <div class="outer">
    	    <button class="previousBtn3" onclick="track3Previous()">PREVIOUS</button>
    	    <button class="nextBtn3" onclick="track3Next()">NEXT</button>
    	  </div>
    	</section>
    	<p class="BUTTON" onclick="toggleTrack4Info()"><i class="fa fa-hand-o-right"></i> </p>
    	<section id="track4" style="display:none;">
    	  <ul class="UL">
    	    <li>Spotify popularity: </li>
    	    <li>Duration (mm:ss): </li>
    	  </ul>
    	  <label>View track artwork</label>
    	  <br><span id="enabledOrDisabled4">Disabled </span><label class="switch"><input type="checkbox" onclick="toggleTrack4Images(this.checked)"><span class="slider round"></span></label>
    	  <div class="outer">
    	    <button class="previousBtn4" onclick="track4Previous()">PREVIOUS</button>
    	    <button class="nextBtn4" onclick="track4Next()">NEXT</button>
    	  </div>
    	</section>
    	<p class="BUTTON" onclick="toggleTrack5Info()"><i class="fa fa-hand-o-right"></i> </p>
    	<section id="track5" style="display:none;">
    	  <ul class="UL">
    	    <li>Spotify popularity: </li>
    	    <li>Duration (mm:ss): </li>
    	  </ul>
    	  <label>View track artwork</label>
    	  <br><span id="enabledOrDisabled5">Disabled </span><label class="switch"><input type="checkbox" onclick="toggleTrack5Images(this.checked)"><span class="slider round"></span></label>
    	  <div class="outer">
    	    <button class="previousBtn5" onclick="track5Previous()">PREVIOUS</button>
    	    <button class="nextBtn5" onclick="track5Next()">NEXT</button>
    	  </div>
    	</section>
    	<p class="BUTTON" onclick="toggleTrack6Info()"><i class="fa fa-hand-o-right"></i> </p>
    	<section id="track6" style="display:none;">
    	  <ul class="UL">
    	    <li>Spotify popularity: </li>
    	    <li>Duration (mm:ss): </li>
    	  </ul>
    	  <label>View track artwork</label>
    	  <br><span id="enabledOrDisabled6">Disabled </span><label class="switch"><input type="checkbox" onclick="toggleTrack6Images(this.checked)"><span class="slider round"></span></label>
    	  <div class="outer">
    	    <button class="previousBtn6" onclick="track6Previous()">PREVIOUS</button>
    	    <button class="nextBtn6" onclick="track6Next()">NEXT</button>
    	  </div>
    	</section>
    	<p class="BUTTON" onclick="toggleTrack7Info()"><i class="fa fa-hand-o-right"></i> </p>
    	<section id="track7" style="display:none;">
    	  <ul class="UL">
    	    <li>Spotify popularity: </li>
    	    <li>Duration (mm:ss): </li>
    	  </ul>
    	  <label>View track artwork</label>
    	  <br><span id="enabledOrDisabled7">Disabled </span><label class="switch"><input type="checkbox" onclick="toggleTrack7Images(this.checked)"><span class="slider round"></span></label>
    	  <div class="outer">
    	    <button class="previousBtn7" onclick="track7Previous()">PREVIOUS</button>
    	    <button class="nextBtn7" onclick="track7Next()">NEXT</button>
    	  </div>
    	</section>
    	<p class="BUTTON" onclick="toggleTrack8Info()"><i class="fa fa-hand-o-right"></i> </p>
    	<section id="track8" style="display:none;">
    	  <ul class="UL">
    	    <li>Spotify popularity: </li>
    	    <li>Duration (mm:ss): </li>
    	  </ul>
    	  <label>View track artwork</label>
    	  <br><span id="enabledOrDisabled8">Disabled </span><label class="switch"><input type="checkbox" onclick="toggleTrack8Images(this.checked)"><span class="slider round"></span></label>
    	  <div class="outer">
    	    <button class="previousBtn8" onclick="track8Previous()">PREVIOUS</button>
    	    <button class="nextBtn8" onclick="track8Next()">NEXT</button>
    	  </div>
    	</section>
    	<p class="BUTTON" onclick="toggleTrack9Info()"><i class="fa fa-hand-o-right"></i> </p>
    	<section id="track9" style="display:none;">
    	  <ul class="UL">
    	    <li>Spotify popularity: </li>
    	    <li>Duration (mm:ss): </li>
    	  </ul>
    	  <label>View track artwork</label>
    	  <br><span id="enabledOrDisabled9">Disabled </span><label class="switch"><input type="checkbox" onclick="toggleTrack9Images(this.checked)"><span class="slider round"></span></label>
    	  <div class="outer">
    	    <button class="previousBtn9" onclick="track9Previous()">PREVIOUS</button>
    	    <button class="nextBtn9" onclick="track9Next()">NEXT</button>
    	  </div>
    	</section>
    	<p class="BUTTON" onclick="toggleTrack10Info()"><i class="fa fa-hand-o-right"></i> </p>
    	<section id="track10" style="display:none;">
    	  <ul class="UL">
    	    <li>Spotify popularity: </li>
    	    <li>Duration (mm:ss): </li>
    	  </ul>
    	  <label>View track artwork</label>
    	  <br><span id="enabledOrDisabled10">Disabled </span><label class="switch"><input type="checkbox" onclick="toggleTrack10Images(this.checked)"><span class="slider round"></span></label>
    	  <div class="outer">
    	    <button class="previousBtn10" onclick="track10Previous()">PREVIOUS</button>
    	    <button class="nextBtn10" onclick="track10Next()">NEXT</button>
    	  </div>
    	</section>
    </section>
    <script src="scripts/authorization.js"></script>
    <script src="scripts/logic.js"></script>
  </body>
</html>