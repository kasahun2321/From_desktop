
function display()
{
  document.getElementById('selam').innerHTML="habeshe belome the beshasha";
}
function helo()
{
  alert("hello java script");
}

function avgg()
{
  let n1=parseFloat( document.getElementById('num1').value);
  let n2=parseFloat( document.getElementById('num2').value);
  let n3=parseFloat( document.getElementById('num3').value);
  let n4=parseFloat( document.getElementById('num4').value);
  let n5=parseFloat( document.getElementById('num5').value);
  let n6=parseFloat( document.getElementById('num6').value);
  let n7=parseFloat( document.getElementById('num7').value);
  let n8=parseFloat( document.getElementById('num8').value);
  let n9=parseFloat( document.getElementById('num9').value);
  let n10=parseFloat( document.getElementById('num10').value);
  let n11=document.getElementById("num1").value;
  n11=parseFloat(n11);


  let avi=(n1+n2+n3+n4+n5+n6+n7+n8+n9+n10)/10;
  
  
  document.getElementById('summ').innerHTML = avi;


  


}
function login()
{

  let k=document.getElementById('email').value;
  let p=document.getElementById('pwd').value;

  if(k=="kas" && p=="2300")
  {

    document.getElementById('login').value=alert("username correct");
  }
  else
  {
    document.getElementById('login').value=alert("wrong password and email");
  }

}
///
window.onload = () => {

  /*
  <!--
  🍧 Foody-Foods.in 😳💕
  
  🍧 Coded by: Aakaanksha Vashisht💕
  🍧
  🍧 Date of submission: 23-Aug-2020
  🍧
  ❌ Don't copy(❌) without permission
  🍧 Owner: Aakaanksha💕©️
  🍧
  🍧 Made with alot of hardwork & love♥️😍
  🍧 Hope you'll love it:   
     (🍧🍰🍬🍨🍦🍭🍧🍰🍨🍬🍭🍦)
     ----------------------------
  -->
  */
    
    const navBtn = document.getElementById("navBtn");
    const navContents = document.getElementById("navContents");
    
    
    navBtn
      .addEventListener("click", () => {
         navContents
           .classList
             .toggle("toggleNav");
      });
    
  }

