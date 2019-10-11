




function recipeAPI() {
    var recipeApi = {
        "async": true,
        "crossDomain": true,
        "url": "https://webknox-recipes.p.rapidapi.com/recipes/findByIngredients?number=5&ingredients="+ingredients,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "webknox-recipes.p.rapidapi.com",
            "x-rapidapi-key": "43acb27062msh71014d2b6f89ea0p19fc0bjsn4d672d238f0f"
        }
    }
    $.ajax(recipeApi).done(function (response) {
        console.log("food", response);
    });

}


var ingredients = [];
var foodButtons = ["eggs", "milk", "bread", "cheese"]


function renderButtons() {
    $("#commonFoodOptions").empty();
    for (var i = 0; i < foodButtons.length; i++) {
        var a = $("<button>");
        a.addClass("foodOptionButtons");
        a.attr("data-state", foodButtons[i]);
        a.text(foodButtons[i]);
        $("#commonFoodOptions").append(a);
    }
}
renderButtons();


$(".foodOptionButtons").on("click", function() {
    ingredients.push($(this).attr("data-state"));
    console.log("ing", ingredients)
    recipeAPI();



});

$("#foodSearch").on("click", function(){
    ingredients.push($("#addedIngredients").val());
    console.log(ingredients);
    recipeAPI();
    
    
});







