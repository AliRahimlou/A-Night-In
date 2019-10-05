//Netflix API
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?t=loadvideo&q=60029591",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "unogs-unogs-v1.p.rapidapi.com",
		"x-rapidapi-key": "43acb27062msh71014d2b6f89ea0p19fc0bjsn4d672d238f0f"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});

var ingredients = ["flour%2C", "cheese%2C", "eggs%2C"];

//Recipie API
var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://webknox-recipes.p.rapidapi.com/recipes/findByIngredients?number=5&ingredients="+ingredients,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "webknox-recipes.p.rapidapi.com",
        "x-rapidapi-key": "43acb27062msh71014d2b6f89ea0p19fc0bjsn4d672d238f0f"
    }
}
$.ajax(settings).done(function (response) {
    console.log("meee",response);
});

