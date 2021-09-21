
var idCount = 0;

var obj = {
    title: "Teste",
    subTitle: "Teste",
    text: "Teste",
    link: "Teste"
};

function addCard(){
    idCount += 1;

    //stepOne
    let divBase = document.createElement("div");
    let cardID = ("card_" + idCount);
    divBase.id = cardID;
    divBase.style.width = '18rem';
    $(cardID).addClass("card");

    //StepTwo
    let innDive = document.createElement("div");
    $(innDive).addClass("card-body");
    
    //Card Title
    let cardTitle = $("<h5></h5>");
    $(cardTitle).text(obj['title']);
    $(cardTitle).addClass("card-title");
    
    //Card Subtitle
    let cardSubTitle = $("<h6></h6>");
    $(cardSubTitle).text(obj['subTitle']);
    $(cardSubTitle).addClass("card-subtitle mb-2 text-muted");

    //Card Text
    let cardText = $("<p></p>");
    $(cardText).text(obj['text']);
    
    //Card link
    let link = $("<a><a/>");
    $(link).addClass("card-link");
    $(link).attr("href",obj['link']);

    let elements = [cardTitle,cardSubTitle,cardText,link];

    $(divBase).append(innDive);

    elements.forEach( function(elem){
        $(innDive).append(elem);
    });

    $("#cards").append(divBase);
};

addCard();
addCard();
addCard();
addCard();
addCard();