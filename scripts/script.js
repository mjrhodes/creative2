var loadPic = function() {
    $.ajax({
	url : "https://api.nasa.gov/planetary/apod?hd=false&api_key=8vsH4AP3lHgsizGZGrwPRBZS0Sk8Hh6yS5b4LrYs",
	dataType : "json",
	success : function(json) {
	    $("#nasaPic").attr("src", json.url);
	}
    });
};

$(document).ready(loadPic);

$(document).ready(function() {
    $("#nasaSubmit").click(function(e) {
    	e.preventDefault();
    	var value = $("#nasaInput").val();
        var myurl= "https://api.nasa.gov/planetary/apod?date=" + value + "&hd=false&api_key=8vsH4AP3lHgsizGZGrwPRBZS0Sk8Hh6yS5b4LrYs";
	$.ajax({
	    url : myurl,
	    dataType : "json",
	    success : function(json) {
		console.log(json.url);
		$("#nasaPic").attr("src", json.url);
	    }
	});
    });
});
