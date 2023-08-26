function myf(){
    let x=document.getElementById("form2Example17").value;
    let y=document.getElementById("form2Example27").value;
    if (x=="user1" && y=="user1"){
        location.replace("abha.html");
    }
    else{
        document.getElementById("Demo").innerHTML="ERROR";
    }
}

function abhaf(){
    let z=document.getElementById("form2Example37").value;{
    // let leng = z.length;
        if(z.length==10){
            location.replace("home.html");
        }
        else{
            document.getElementById("Demo").innerHTML="ERROR";
        }
    }
}

function enterdet(){
    location.replace("entDet.html");
}

function viewdet(){
    location.replace("viewDet.html");
}

function reco(){
    location.replace("record.html");
}
let d1=0;
let d2=0;
let d3=0;
let d4=0;
function myrepo(){
    d1 = document.getElementById("form2Example1").value;
    d2 = document.getElementById("form2Example2").value;
    d3 = document.getElementById("form2Example3").value;
    d4 = document.getElementById("form2Example4").value;
    if(d1<65 || d1>165){
        document.getElementById("dang1").innerHTML = "<br>GLUCOSE: "+d1;
    }
    if(d2<136 || d2>144){
        document.getElementById("dang2").innerHTML = "<br>SODIUM: "+d2;
    }
    if(d3<3.6 || d3>5.1){
        document.getElementById("dang3").innerHTML = "<br>POTASSIUM: "+d3;
    }
    if(d4<8.8 || d4>10.3){
        document.getElementById("dang4").innerHTML = "<br>CALCIUM: "+d4;
    }
    
}

function backHome(){
    location.replace("home.html");
}

function reco(){
    location.replace("reco.html");
}