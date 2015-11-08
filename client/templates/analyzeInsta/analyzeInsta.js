var api_key = '2070139335.b6f7db4.d9b05f00c8f349358219f0a7a965bd00';
var imageArray;
var tagArray;

var getLatestIGPhoto = function(api_key){
    var url = "https://api.instagram.com/v1/users/self/media/recent/?access_token=" + api_key;
    var tagArray = [];
    $.ajax({
        dataType: "jsonp",
        url: url,
        success: function(data) {
            var imageKeyWords = groupMultipleAlchemyTags(data.data);
        }
    });
}

var getSingleAlchemyTags = function(imageURL){
    var alchemyEndPoint = "https://gateway-a.watsonplatform.net/calls/url/URLGetRankedImageKeywords";
    $.ajax({
       url: alchemyEndPoint,
       dataType: 'json',
       type: 'GET',
       data: {
           format: 'json',
           url: imageURL,
           apikey: '75b4cc895c87c2854fb066f0e99514f762d5c819',
           outputMode: 'json',
       },
       success: function(data) {
           return data.imageKeywords.text;
       }
    });
}

var groupMultipleAlchemyTags = function (igData) {
    var alchemyEndPoint = "https://gateway-a.watsonplatform.net/calls/url/URLGetRankedImageKeywords";
    var tagArray = [];
    var internal_index = 0;
    var photo_count = 0;
    
    for (var i=0; i< igData.length; i++){
        media = igData[i];
        if (media.type == 'image'){
            photo_count += 1;
            $.ajax({
               url: alchemyEndPoint,
               dataType: 'json',
               type: 'GET',
               data: {
                   format: 'json',
                   url: igData[i].images.standard_resolution.url,
                   apikey: 'be39ddc9e6982581f885815e8e5636b38b5b9a37',
                   outputMode: 'json',
               },
               success: function(data) {
                   console.log(data);
                   var keywords = data.imageKeywords;
                   internal_index += 1;
                   console.log(keywords);
                   for ( var j=0; j<keywords.length; j++){
                       if (tagArray.indexOf(keywords[j].text) == -1){
                           tagArray.push(keywords[j].text);
                       }
                   }
                   console.log(internal_index)
                   if (internal_index == photo_count){
                       getCategory(tagArray);
                   }
               }
            });
        }
    }
}

getLatestIGPhoto(api_key);

var getCategory = function(tagArray){

  // tagArray is the  array of tags returned by bluemix(alchemy)
    console.log(tagArray);
}


