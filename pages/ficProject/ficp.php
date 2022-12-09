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
                            <h1>Projeto</h1>
                            <p class="mb-5"> Texto do Projeto</p>
                        </div>
                        <h2 >
                            Idealizadores
                        </h2>
                            <p>Alexandre Fiorano Neto</p>
                            <p>Erik</p>
                            <p>Matheus Brocato</p>
                            <p>Allan Vilas Boas</p>
                    </div>
                    <div class="col-sm-0 col-md-2 col-lx-3"></div>
                </article>
            </section>

            <article class="d-flex ">
                <section class="my-5 container-fluid mx-auto mainArticle" >
                    <iframe src="../game/index.html" width="720" height="480" style="border:none;">
                </section>
            </article>


        </main>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>';

    echo '<script>';
        echo 'var x ='. $turmas.';';
        echo 'console.log(x);';
    echo '</script>';
    echo '</body>
     ';
?>