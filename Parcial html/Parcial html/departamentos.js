document.addEventListener('DOMContentLoaded', TraerDatos);
function TraerDatos(){
    var xhttp = new XMLHttpRequest();
    xhttp.open('GET', 'departamentos.json', true);
    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);
            let info =document.querySelector('#info')
            info.innerHTML = "";
            for(let item of datos){
               //console.log(item)
               info.innerHTML += `
               <div class="contenedor-principal">
               <div class="precio-info">
               <img src="${item.img}" width="300px" alt="imagen2" class="img-articulo"> 
               
               <p>
                   ${item.info}
               </p>
           </div>
           </div>    
               `
            };
            info.appendChild(div);
        }

    }
}
