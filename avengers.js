var number=10;

function eleMaker(name,val){
    var ele = document.createElement (  "div");
    ele.innerHTML=name;
    ele.addEventListener("click",function (){
        increase(val);
    })
    document.body.querySelector(".main").appendChild(ele);
}

function increase(val){
    number=number+val;
    document.body.querySelector(".number").innerHTML=number;
}


document.body.querySelector( ".clicker").addEventListener("click",function (){
    document.body.querySelector(".main").innerHTML="";

    eleMaker("I am IronMan.",0);
    eleMaker( "Hits on Thanos:",10);

});


document.body.querySelector( ".clicker2").addEventListener("click",function (){
    document.body.querySelector(".main").innerHTML="";

    eleMaker( "I knew it!",0);
    eleMaker( "Hits on Thanos:",20);

});

document.body.querySelector( ".clicker3").addEventListener("click",function (){
    document.body.querySelector(".main").innerHTML="";

    eleMaker( "Don't Make Me Angry",0);
    eleMaker( "Hits on Thanos:",30);

});

document.body.querySelector( ".clicker4").addEventListener("click",function (){
    document.body.querySelector(".main").innerHTML="";

    eleMaker( "Avengers Assemble!",0);
    eleMaker( "Hits on Thanos",40);

});