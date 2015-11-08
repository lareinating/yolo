
$.getScript( "http://api.skyscanner.net/api.ashx?key=19166618-691a-4628-a1d0-f6fbc46f8931", function( data, textStatus, jqxhr ) { skyscanner.load("snippets","2");
   function main(){
       var snippet = new skyscanner.snippets.SearchPanelControl();
       snippet.setShape("box300x250");
       snippet.setCulture("en-GB");
       snippet.setCurrency("USD");
       snippet.setMarket("US");
       snippet.setColourScheme("classicbluelight");
       snippet.setProduct("hotels","1");
       snippet.setProduct("carhire","2");

       snippet.draw(document.getElementById("snippet_searchpanel"));
   }
   skyscanner.setOnLoadCallback(main);
});