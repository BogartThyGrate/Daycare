var homeb = document.getElementById('Homeb');
var annb = document.getElementById('Annb');
var abtb= document.getElementById('Abtb');


function myhomeB(){
    window.scrollTo(0,1);
    $("#Homeb").css("color","black");
    $("#Annb").css("color","gray");
    $("#Abtb").css("color","gray");
};

function myAnnB(){
    window.scrollTo(0,850);
    $("#Homeb").css("color","gray");
    $("#Annb").css("color","black");
    $("#Abtb").css("color","gray");
}
function myAbtB(){
    window.scrollTo(0,1800);
    $("#Homeb").css("color","gray");
    $("#Annb").css("color","gray");
    $("#Abtb").css("color","black");
}
