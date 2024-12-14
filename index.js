billammountEl=document.getElementById("billAmt")
tippercentEl=document.getElementById("tipper")
showtiptEl=document.getElementById("showtip")
showamtEl=document.getElementById("showamt")
 
errorMsgE1=document.getElementById("errorMsg")


function submitB(){

 if(billammountEl.value==="" || tippercentEl.value===""){

    errorMsgE1.textContent="PLease fill all the field";
 }
 else{
    let  billAmt= parseInt(billammountEl.value);
    let  tipPercent=parseInt(tippercentEl.value);
   
    let tipAmt = tipPercent*billAmt/100;
   
    let total= billAmt+tipAmt;
   
    showtiptEl.value=tipAmt;
   
    showamtEl.value=total;

    errorMsgE1.textContent="";
 }
    


}
