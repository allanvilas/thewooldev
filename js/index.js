var obj =[
    [
    "devicon-debian-plain-wordmark",
    "devicon-windows8-original",
    "System that i'm use to work.",
    "system"
],
[
    "devicon-javascript-plain",
    "devicon-jquery-plain-wordmark",
    "devicon-html5-plain-wordmark",
    "devicon-css3-plain-wordmark",
    "devicon-bootstrap-plain-wordmark",
    "Front End technologies",
    "frontEnd"
],
 [
    "devicon-php-plain",
    "devicon-postgresql-plain-wordmark",
    "devicon-python-plain-wordmark",
    "devicon-apache-plain-wordmark",
    "Back End technologies",
    "backEnd"
],
 [
    "devicon-gitlab-plain-wordmark",
    "devicon-git-plain-wordmark",
    "devicon-trello-plain",
    "devicon-vscode-plain",
    "devicon-markdown-original",
    "Tools to help manage",
    "projectAdm"
],
 [
    "devicon-godot-plain-wordmark",
    "Engine that i'm develop on today",
    "engine"
],
  [
    "devicon-java-plain-wordmark",
    "devicon-csharp-line-wordmark",
    "devicon-laravel-plain-wordmark",
    "devicon-sass-original",
    "devicon-unity-original",
    "Tecnologies that i'm studying",
    "larnFuture"
]
];

for(i=0;i<=obj.length;i++){
    var jumbo = document.createElement("div");
    var container = document.createElement("div");
    var title = document.createElement("h2");
    var div = document.createElement("div");

    $(jumbo).addClass("jumbotron");
    $(jumbo).addClass("jumbotron-fluid");
    $(jumbo).addClass("col-sm-12 col-md-12 col-lg-12");

    $(container).addClass("container-fluid");
    

    let titleVar = obj[i][((obj[i].length)-2)];

    $(title).addClass("display-4");
    $(title).addClass("p-3");
    $(title).text(titleVar);
    
    $(div).addClass(obj[i][((obj[i].length)-1)]);

    for(k=0;k<=(obj[i].length-2);k++){
        var dom = document.createElement("i");
        $(dom).addClass(obj[i][k]);
        $(dom).addClass("devIcons");
        $(dom).addClass("m-3");
        console.log(obj[i][k]);
        $(div).append(dom);
    };

    if(i%2 == 0){
        $(jumbo).attr("data-aos","fade-left");
        $(jumbo).addClass("text-end");
        $(div).addClass("d-flex flex-wrap justify-content-end");
        $(title).addClass("jumboRight");
    }
    else{
        $(jumbo).attr("data-aos","fade-right");
        $(div).addClass("d-flex flex-wrap justify-content-start");
        $(title).addClass("jumbo");
    }
    $(jumbo).attr("data-aos-duration","1500");
    $(container).append(title);
    $(container).append(div);
    $(jumbo).append(container);
    $(jumbo).addClass("mb-5");
    $(jumbo).addClass("mt-5");
    $("#jumboSkills").append(jumbo);
   
};
