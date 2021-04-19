import * as MODEL from "../model/model.js"

function init(){
    // let currentHeroImage = "home";


$("nav a").click(function(e){
    let btnId = this.id
    let contentID = btnId + "Content";
    
if(contentID === "homeContent"){
    $('.hero').css("display", "block")
    
    $(".nav-black").css("display", "none")
    MODEL.getPageContent(contentID);
    
    //$(".links-black").css("display", "block"
}else if( contentID === "toursContent"){
    MODEL.getPageContent(contentID);
    $('.hero').css("display", "none")
    $(".nav-black").css("display", "block")

    $(".tourPromo a").click(function(event){

    let tourbtnId = this.id
    let tourContentID = tourbtnId + "Content";
    console.log("pain");
    MODEL.getPageContent(tourContentID);

    });


}else{
    
    MODEL.getPageContent(contentID);

    $('.hero').css("display", "none")
    $(".nav-black").css("display", "block")
}

    console.log("plz");
});



}


$(document).ready(function (){
    init();
    MODEL.getPageContent("homeContent");
});

