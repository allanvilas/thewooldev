<?php 
    
    require_once '../../php/header.php';

    echo '
        <body class="container-fluid">';

    require_once '../../php/menu.php';

    echo'
        <main class="mx-auto">
            <section class="my-5 container-fluid mx-auto ">
                <article class="d-flex">
                    <div class="col-sm-0 col-md-2 col-lx-3">
                    </div>
                    <div class="col-sm-12 col-md-8 col-lx-6">
                        <div class="container-fluid">
                            <h1>Projeto AGA.INNST</h1>
                            <p class="mb-5">De forma geral, a temática da mitologia nórdica tem se tornado cada vez mais popular entre o público jovem. São diversos os conteúdos midiáticos que fazem referência a esse assunto, como filmes de super-heróis, jogos de videogame, séries de televisão e livros. Apesar disso, no que tange a área de jogos físicos, como os de tabuleiro, essa adesão não é das maiores. 
                            Outro problema recorrente, é a falta de embasamento que muitos desses conteúdos apresentam, por vezes, os seres fantásticos que aparecem nessa literatura só possuem o nome como aspecto original de seu conteúdo. Associando os motivos apontados anteriormente, decidimos pôr em prática a ideia de produzir um projeto com tema proposto (viagem), relacionando com o sincretismo e a cultura dos povos que originaram essas histórias.
                            </p>
                        </div>
                        <!-- Video -->
                        <div class="col-12 text-center" style="">
                            <iframe class="rounded mx-auto mb-5" width="80%" height="50%" src="https://www.youtube.com/embed/gpRT6pxz-fE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        
                        <h2>
                            Diferenciais do Jogo
                        </h2>
                        <p>
                            O game traz uma proposta diferente para um jogo clássico jogo de tabuleiro: a identidade de mitologia nórdica, que tem se tornado cada vez mais popular nas mídias digitais e com a preocupação de trazer isso de forma lúdica e bem embasada, tendo critérios que estejam bastante solidificados com o que existe de material original sobre essa temática.
                        </p>
                        <h2>
                            Objetivos do jogo
                        </h2>
                        <p>
                        Passar pelos nove reinos da Yggdrasil e chegar ao final, tomando o cuidado para não cair nas armadilhas, se vendo obrigado a voltar para um determinado estágio do jogo.
                        </p>
                        <h2 >
                            Idealizadores
                        </h2>
                            <p>Alexandre Fiorano Neto</p>
                            <p>Gabriela Graciani </p>
                            <p>Nayumi Menuzzo Akutagawa</p>
                            <p>Allan Vilas Boas</p>
                    </div>
                    <div class="col-sm-0 col-md-2 col-lx-3"></div>
                </article>
            </section>
            <section style="padding-top:400px;">
                <div class="container-fluid">
                <h2 class="p-5">
                    Algumas imagens do projeto
                </h2>
                <div class="col-10  d-flex justify-content-center flex-wrap mx-auto" id="img-galery">'
                ;
                    $pasta = "./img/";
                    if (is_dir($pasta)){
                        if ($pastaAberta = opendir($pasta)){{
                            while (($imagem = readdir($pastaAberta)) !== FALSE){
                                    if(($imagem !== '.') && ($imagem !== '..')){
                                        echo '
                                            <img style="max-width:400px;" class="p-4 rounded" src="img/'.$imagem.'">
                                        ';
                                    }
                                }
                            }

                        }
                    }
            echo'
                </div>
            </div>
            </section>
        </main>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
        <script src="https://www.thewool.dev.br/js/main.js"></script>
        <script src="https://www.thewool.dev.br/js/index.js"></script>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    </body>
     ';
?>