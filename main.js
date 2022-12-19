var snames = [];

function Sub(){
   var n1= document.getElementById("S1").value;
   var n2= document.getElementById("S2").value;
   var n3= document.getElementById("S3").value;
   var n4= document.getElementById("S4").value;

   snames.push(n1);
   snames.push(n2);
   snames.push(n3);
   snames.push(n4);

   document.getElementById("display_names").innerHTML=snames;
   document.getElementById("Sub").style.display="none";
   document.getElementById("Sor").style.display="inline";
  
}

function Sor(){
    snames.sort();
    document.getElementById("display_names").innerHTML=snames;

}
