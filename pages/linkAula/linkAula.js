
var idCount = 0;

var turmas=[];

const data = new Date();
const dia = data.getDay();
const hour = data.getHours();

var dias = {
    1:'Segunda-Feira',
    2:'Terça-Feira',
    3:'Quarta-Feira',
    4:'Quinta-Feira',
    5:'Sexta-Feira',
    6:'Sábado'
};

function teste(){
    console.log("hora: "+hour)
};
teste();
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
        let cardTitle = document.createElement("h2");
        cardTitle.id = ("cardTitle_"+cardID);
        $(cardTitle).text(turma['title']);
        $(cardTitle).addClass("card-title mb-3");
        
        //Card Subtitle
        let cardSubTitleTwo = document.createElement("h3");
        cardSubTitleTwo.id = ("cardSubTitle_"+cardID);
        $(cardSubTitleTwo).text(dias[turma['diaAula']]);
        $(cardSubTitleTwo).addClass("card-subtitle mb-2 text-muted");

        let cardSubTitle = document.createElement("h3");
        cardSubTitle.id = ("cardSubTitle_"+cardID);
        let horaAula = Number(turma['subTitle'].slice(0,2));
        $(cardSubTitle).text(turma['subTitle'].slice(0,5)+ " - " + (horaAula+2)+":00");
        $(cardSubTitle).addClass("card-subtitle mb-2 text-muted");

        //Card Text
        let cardText = document.createElement("p");
        cardText.id = ("cardText_"+cardID);
        $(cardText).text(turma['text']);
        
        //Card link
        let link = document.createElement("a");
        let aulaBtn = document.createElement("button");
        $(link).append(aulaBtn);
        link.id = ("link_"+cardID);
        $(aulaBtn).text("Entrar na Aula");
            if(turma['diaAula'] == dia & (horaAula == hour | (horaAula+1) == hour)){
                console.log(dias[dia]);
                $(innDive).addClass("aulaActive");
                $(aulaBtn).addClass("btn btn-success btn-lg btn-block");
                $(link).attr("target","_blank");
                $(link).attr("href",turma['link']);
            }
            else{
                $(aulaBtn).addClass("btn btn-secondary btn-lg btn-block");
                $(aulaBtn).attr("disabled","disabled");
                $(link).attr("href","#");
            }
        
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
