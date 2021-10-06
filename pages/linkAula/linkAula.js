
var idCount = 0;

var turmas=[];

var dias = {
    1:'Segunda-Feira',
    2:'Terça-Feira',
    3:'Quarta-Feira',
    4:'Quinta-Feira',
    5:'Sexta-Feira',
    6:'Sábado'
}

function addCard(data){

    data.forEach(function(turma,index) {
        index = (index+1);
       // console.log(turma['subTitle']);
        console.log(Number(turma['subTitle'].slice(0,2)));
        //stepOne
        let divBase = document.createElement("div");
        let cardID = ("card_" + index);
        divBase.id = cardID;
        divBase.style.width = '18rem';
        $(cardID).addClass("card animated fadeIn slow");

        //StepTwo

        let innDive = document.createElement("div");
        innDive.id = ("innDIve_"+cardID);
        $(innDive).addClass("card-body bg-light m-3 animated");
        
        //Card Title
        let cardTitle = document.createElement("h5");
        cardTitle.id = ("cardTitle_"+cardID);
        $(cardTitle).text(turma['title']);
        $(cardTitle).addClass("card-title mb-3");
        
        //Card Subtitle
        let cardSubTitleTwo = document.createElement("h6");
        cardSubTitleTwo.id = ("cardSubTitle_"+cardID);
        $(cardSubTitleTwo).text(dias[turma['diaAula']]);
        $(cardSubTitleTwo).addClass("card-subtitle mb-2 text-muted");

        let cardSubTitle = document.createElement("h6");
        cardSubTitle.id = ("cardSubTitle_"+cardID);
        $(cardSubTitle).text(turma['subTitle'].slice(0,5)+ " - " + (Number(turma['subTitle'].slice(0,2))+2)+":00");
        $(cardSubTitle).addClass("card-subtitle mb-2 text-muted");

        //Card Text
        let cardText = document.createElement("p");
        cardText.id = ("cardText_"+cardID);
        $(cardText).text(turma['text'].slice(0,12));
        
        //Card link
        let link = document.createElement("a");
        link.id = ("link_"+cardID);
        $(link).text("Entrar na Aula");
        $(link).addClass("card-link");
        $(link).attr("target","_blank");
        $(link).attr("href",turma['link']);

        let elements = [cardTitle,cardSubTitleTwo,cardSubTitle,cardText,link];

        $(divBase).append(innDive);
        elements.forEach( function(elem){
            $(innDive).append(elem);
        });

        $("#cards").append(divBase);
    });
};

$.getJSON('getTurmasData.php', function(data) {
    data.forEach(function(turma,index) {
        var newTurma = {
            "title": turma[0]['turma'],
             "diaAula": turma[0]['dia'],
             "subTitle": turma[0]['horario'],
             "text": turma[0]['professor'],
             "link": turma[0]['link']};
        turmas.push(index);  
        turmas[index] = newTurma;
    });
    addCard(turmas);
});
