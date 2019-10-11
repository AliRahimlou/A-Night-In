function aj() {
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.themoviedb.org/3/discover/movie?api_key=7d6ffce18f969b08bd5c2c662d3ddaa8&language=en-US&page=1&primary_release_year=2019&with_genres=" + genre,
    "method": "GET",
    "headers": {},
    "data": "{}"
  }
  $.ajax(settings).done(function (response) {
    //console.log(response);
    var jsonContent = response.results;
    var random = jsonContent[Math.random(Math.random() * jsonContent.length)];
    console.log(random.title);

  })
};
function empty() {
  genre = [];
}
// action = 28, comedy = 35, horror = 27, romance = 10749
var genreIds = [];
var genres = ["action", "comedy", "horror", "romance"];
var genre = [];
// function renderMovieButtons() {
// //   $("#movieGenres").empty();
//   for (var i = 0; i < genre.length; i++) {
//       var b = $("<button>");
//       b.addClass("movieButton");
//       b.attr("data-state", genre[i]);
//       b.text(genre[i]);
//       $("#movieGenres").append(b);
//   }
// }
// renderMovieButtons();
$(".genreSearch").on("click", function () {
  genre.push($(this).attr("data-state"));
  
  //$(this).attr("data-state")
  // console.log(genreLookUp)
  aj();
  
  //   console.log("movies", response);
  empty();


  // genre();
});







// //Netflix API

// function genre() {
//     var netflixApi = {
//         "async": true,
//         "crossDomain": true,
//         "url": "https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?t=genres" ,
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "unogs-unogs-v1.p.rapidapi.com",
//             "x-rapidapi-key": "43acb27062msh71014d2b6f89ea0p19fc0bjsn4d672d238f0f"
//         }
//     }

//     $.ajax(netflixApi).done(function (response) {
//         console.log("hey",response.ITEMS[0])
//         // var action = response.ITEMS[0];
//         // var comedy = response.ITEMS[4];
//         // var horror = response.ITEMS[10];
//         // var romance = response.ITEMS[15];
//         // console.log("hey", action);
//         // var titleList = action;
//         // var queryURL = "https://unogs-unogs-v1.p.rapidapi.com/api.cgi?t=genres&t=genres&t=loadvideo&q="+ titleList

//     });



// }


// function title() {
//     var netflixApi = {
//         "async": true,
//         "crossDomain": true,
//         "url": "https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?t=loadvideo&q=" ,
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "unogs-unogs-v1.p.rapidapi.com",
//             "x-rapidapi-key": "43acb27062msh71014d2b6f89ea0p19fc0bjsn4d672d238f0f"
//         }
//     }

//     $.ajax(netflixApi).done(function (response) {
//         console.log("hewy",response)
//         // var action = response.ITEMS[0];
//         // var comedy = response.ITEMS[4];
//         // var horror = response.ITEMS[10];
//         // var romance = response.ITEMS[15];
//         // console.log("hey", action);
//         // var titleList = action;
//         // var queryURL = "https://unogs-unogs-v1.p.rapidapi.com/api.cgi?t=genres&t=genres&t=loadvideo&q="+ titleList

//     });



// }



// var genreLookUp = [];
// var genres = ["comedy", "action", "horror", "romance"];

// function renderMovieButtons() {
//     $("#movieGenres").empty();
//     for (var i = 0; i < genres.length; i++) {
//         var b = $("<button>");
//         b.addClass("movieButton");
//         b.attr("data-state", genres[i]);
//         b.text(genres[i]);
//         $("#movieGenres").append(b);
//     }
// }
// renderMovieButtons();

// $(".movieButton").on("click", function() {
//     genreLookUp.push($(this).attr("data-state"));
//     console.log("movies", genreLookUp);
//     // genre();
//     title();
// });