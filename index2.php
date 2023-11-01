<!doctype html>

<html lang="en">
<head>
  <meta charset="utf-8">

  <title>TechnologyRec.org</title>
  <meta name="description" content="HTML2 template">
  <meta name="author" content="Productive-Technology.com">

	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>

  <link rel="stylesheet" href="./styles.css">

  <script>
  //images preload
  var arrImg = ["whiteface.jpg","m6.jpg","disc_golf.jpg","climbing.jpg"];
  var arrTxt = ["Snowboarding Whiteface","Driving ridiculously fast hi-tech cars","Playing Disc Golf", "Rock climbing in the Adirondacks"]
  var loadedSoFar = 0;

	function loaded( ) {
	    // do stuff
	}

	function updateProgress( ) {

	    loadedSoFar++;

	    var newWidth = $("#progress").width() * ( loadedSoFar / arrImg.length );
	    $("#bar").stop( true, true );
	    $("#bar").animate({ width: newWidth }, 500, function( ) {
	        if( loadedSoFar === arrImg.length ) { loaded() }
	    });
	}

	for( var i = 0; i < arrImg.length; i++ ) {
	    var img = new Image();
	    img.src = "./images/" + arrImg[ i ];

	    img.onload = function( ) {
	        updateProgress();
	    }
	}

	i=1;
	var oImgSwitch = setInterval ( 
		function () {
			if (i < (arrImg.length -1 )) {
				i++ ;
			} else {
				i=0;
			}
		document.getElementById('show').src= "./images/" + arrImg[i];
		document.getElementById('bar').innerHTML="<h2>Technology Recreation is about " + arrTxt[i] + "</h2>";
	}, 7000);

  </script>
</head>

<body>
	<div id="header">
	</div>
	<div id="nav">
		<br/>
	</div>
	<div id="main">
		<img id="show" src="./images/whiteface.jpg" width="663px" height="463px">
		<div id="bar"><h2>Technology Recreation is about</h2></div>
		<p>Much more to come in the, not so distant future</p>
	</div>
</body>
</html>