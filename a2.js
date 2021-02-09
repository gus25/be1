

//let n=1; 
  
let div1 = document.getElementById('contenedor1');

 
for (var k = 1 ; k <= 5; k++) {

	div1.innerHTML += 
    '<div class="numero" id="num'+k+'">'+k+'</div>'+
    '<div class="imagen"><img id="img'+k+'" alt="" width="100%" onClick="copy('+k+')"></div>'+
    '<div class="texto" id="txt'+k+'" ></div>'+
    '<div class="cbox"><input class="unpresed" id="checkbox'+n+'#'+k+'" type="checkbox" onClick="clickboton('+k+')"></div>';

 }   
  
  
  

function clickboton(i) { 
    //var cbox = "checkbox"+i;      
    var checkbox = document.getElementById("checkbox"+n+"#"+i);
    localStorage.setItem("checkbox"+n+"#"+i, checkbox.checked);  
  
  
  
  if (document.getElementById("checkbox"+n+"#"+i).checked == true)
  {
    var hoy = new Date();
  	var dia = hoy.getDate();
  	var mes = hoy.getMonth() + 1;
    
    localStorage.setItem("diachecked"+n+"#"+i,dia);
  	localStorage.setItem("meschecked"+n+"#"+i,mes);
    
  	//console.log("diacheckedu"+i+dia);
  }	
  else
  {
  	
  }   
  
 
  
}
  
  
var hoy = new Date();
var dia = hoy.getDate();
var mes = hoy.getMonth() + 1;  
  
for (var j = 1; j <= 5; j++) {
  
	var checked = JSON.parse(localStorage.getItem("checkbox"+n+"#"+j));
    if (checked == true)
    {
    	document.getElementById("checkbox"+n+"#"+j).checked = true;

      
  	}
  	else
    {
    
    	document.getElementById("checkbox"+n+"#"+j).checked = false;
    } 
  
  
	if (checked == true)
    {
          

          
        var diachecked = localStorage.getItem('diachecked'+n+'#'+j);
        var meschecked = localStorage.getItem('meschecked'+n+'#'+j);
          
        /*  
    	if (meschecked == mes)
        {
         	if ( (dia - diachecked) > 10)
            {
              	localStorage.setItem("checkbox"+n+"#"+j,false);
                
            }  
            
        }
        else if (Math.abs(meschecked-mes)==1)
        {
          	//if ( ( (dia + 31) - diachecked ) > 10)
          	if (((31-diachecked)+dia)>10) 
            {
             	localStorage.setItem("checkbox"+n+"#"+j,false);
                
            }             
            
        }
      	else if (Math.abs(meschecked-mes)>1)
	*/
	if (Math.abs(meschecked-mes)>1)	
        {
        	localStorage.setItem("checkbox"+n+"#"+j,false);	
        
        }  
      
      
    		//console.log("dia"+j+"="+localStorage.getItem('diachecked'+n+'#'+j) );
      		//console.log("mes"+j+"="+localStorage.getItem('meschecked'+n+'#'+j) );
    }  
  
  
}

document.getElementById("img1").src= "imgv/1.png"; 
document.getElementById("txt1").innerHTML = "➡✅Como hacer keratina casera para alisar tu cabello de forma natural😮✅<br>"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇<br>"+
												"https://youtu.be/Gk96hYziOpc";

   
document.getElementById("img2").src= "imgv/2.png"; 
document.getElementById("txt2").innerHTML = "✅💥Como hacer crecer el cabello en tiempo record con esta receta!😮<br>"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇<br>"+
												"https://youtu.be/Uyl2EQTjb3k";
  
document.getElementById("img3").src= "imgv/3a.png";
document.getElementById('txt3').innerHTML =	"💥5 Remedios caseros para la piel muy fácil de hacer!️😮💥<br>"+
												"⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️⬇️ <br>"+
												"https://youtu.be/xQmj07N30ls"; 
  
document.getElementById("img4").src= "imgv/4.png"; 
document.getElementById('txt4').innerHTML =	"✅💥Como hacer Gel anti bacterial casero super facil!💥💡😮 <br>"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇 <br>"+
												"https://youtu.be/fyo87tI69j4";  
  
  

document.getElementById("img5").src= "imgv/5.png"; 
document.getElementById('txt5').innerHTML =	"✅💥EL EXPERIMENTO QUE CAMBIO MI CABELLO PARA SIEMPRE! Repolarización!💥💡😮 <br>"+
												"👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇 <br>"+
												"https://youtu.be/RH6uMj0cbNU";  








									
function copy(i) {	
	
var ACopiar = document.getElementById('txt'+i);
var seleccion = document.createRange();
seleccion.selectNodeContents(ACopiar);
window.getSelection().removeAllRanges();
window.getSelection().addRange(seleccion);
var res = document.execCommand('copy');
window.getSelection().removeRange(seleccion);	
alert("Texto copiado video "+i);
}
