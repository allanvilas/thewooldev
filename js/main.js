const A1 = "Allan, aka TheWool";
const A2 = "Hello, It's-a-me";

async function Typing(id,elem,interval) {
    var i=0;
    let A = setInterval(
        () => {
        if(i<elem.length){
            document.getElementById(id).innerHTML += elem.charAt(i);
            i++;
        }
        else{
            clearInterval(A);
            return;
        }
    }, interval);
}

Typing('A1',A1,250).then(Typing('A2',A2,50));
