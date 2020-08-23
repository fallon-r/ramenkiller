$("#add").click(()=>{
    console.log("worked");
    if( $("#main").contains($("#list"))=== false ){
    $("#main").append("<ul class='collection' id='list'>");
    $("#list").append("<li class='collection-header'><h2>Ingredients List</h2></li>");
    }
});