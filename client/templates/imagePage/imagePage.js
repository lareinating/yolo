Template.imagePage.rendered = function() {
// $.ajax({
//     url: 'https://ec2-54-77-6-21.eu-west-1.compute.amazonaws.com:8143/flightavailability/1.0/?FlightDate=11%2F10%2F2015&Origin=SFO&Destination=LAX&Class=economy',
//     dataType: 'json',
//     beforeSend: function(xhr) {
//        xhr.setRequestHeader("Authorization", "Bearer cf4522fcaa82c1afbd8b6fe34f56e47c")
//     },
//     success: function(data){
//     	console.log(data)
//     },
//     error: function(jqXHR, textStatus, errorThrown)   {
//         console.log(textStatus);
//     }

// })

var imageName = ['image0_hawaii.jpg','image1_southafrica.jpg','image2_nepal.jpg','image3_france.jpg','image4_newyork.jpg','image5_arizona.jpg','image6_germany.jpg','image7_abudhabi.jpg','image8_newyork.jpg','image9_florida.jpg'];
for(var i=0; i<10; i++){
	 // $('.imagelist').append('<img style=\"margin-top:10px; margin-bottom:10px;width:300px; height:300px;\"
	 // 						 src=\"images/'+ imageName[i] + '\">' +
	 // 						'<p style=\"font-size:25px; color:black; margin-top:10px;\">'+ imageName[i].substring(6)+ '</p>' );
	$('#imageList').append('<p>TEST</p>');
	console.log("TEST");
}

$.ajax({
    url: 'https://api.test.sabre.com/v1/lists/supported/shop/themes',
    dataType: 'json',
    beforeSend: function(xhr) {
  		xhr.setRequestHeader("Authorization", "Bearer T1RLAQKcEFh3DdSjlkME2GnMTKxs27oWUBD2C0v8lCdJ73vcL5TGQO+uAACgc20ATrgQxdfXncgnCkMCP/yNXwj77TuiWyBHWiMI6quybClc3Uwr+UWD+JRLjtJgvnA3LiPnxcvYoSDIBLBjIUlLCbhmbqrgy1n5HjjxwHREoCACzIM4PsEQBxX6MkC54ZppGmc1Jt4C8KgGgYbjmDztQebpWMT0fwtMqrh/2e4OI0bb7Ca3PassAlSPFxYHUgsbwBkTOC/4zusj8YeGSw**")
    },
    success: function(data){
		themesArr=[]
		for (var i=0; i < data.Themes.length; i++ ){
			themesArr.push(data.Themes[i].Theme)
		}
		console.log(themesArr)
        console.log(data)
    },
    error: function(jqXHR, textStatus, errorThrown)   {
        console.log(textStatus);
    }

})

theme=["MOUNTAINS", "BEACH"]
list1 = []
list2 = []

get_list_of_places(theme);

function get_list_of_places(theme){
	for(var i = 0; i < theme.length; i++) {
		$.ajax({
		    url: 'https://api.test.sabre.com/v1/lists/supported/shop/themes/' + theme[i],
		    dataType: 'json',
		    beforeSend: function(xhr) {
		  		xhr.setRequestHeader("Authorization", "Bearer T1RLAQKcEFh3DdSjlkME2GnMTKxs27oWUBD2C0v8lCdJ73vcL5TGQO+uAACgc20ATrgQxdfXncgnCkMCP/yNXwj77TuiWyBHWiMI6quybClc3Uwr+UWD+JRLjtJgvnA3LiPnxcvYoSDIBLBjIUlLCbhmbqrgy1n5HjjxwHREoCACzIM4PsEQBxX6MkC54ZppGmc1Jt4C8KgGgYbjmDztQebpWMT0fwtMqrh/2e4OI0bb7Ca3PassAlSPFxYHUgsbwBkTOC/4zusj8YeGSw**")
		    },
		    success: function(data){
				for (var j=0; j < data.Destinations[i].length; j++ ){
					list[i+1].push(data.Destinations[j].Destination)
				}
		        console.log(data)
		    },
		    error: function(jqXHR, textStatus, errorThrown)   {
		        console.log(textStatus);
		    }

		})
	}
}



function intersection_destructive(a, b){
	var result = new Array();
	  	while( a.length > 0 && b.length > 0 )
	  	{  
	     	if      (a[0] < b[0] ){ a.shift(); }
	     	else if (a[0] > b[0] ){ b.shift(); }
	     	else /* they're equal */
	    {
	       	result.push(a.shift());
	       	b.shift();
	    }
 	}

  return result;
}

};