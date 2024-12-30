document.querySelector('.boton').addEventListener('click', cargarJson);

function cargarJson() {
    fetch ('prueba.json')
    .then(function(res){
       return res.json() ;

    })
    .then(function(data){
        let html= '';
        data.forEach(function(empleado){
            html += `
             <div class="btnjson">
             <img class="pyton" src="${empleado.img}"/>
             <li><strong>Lenguaje:<strong/> ${empleado.nombre}</li>
             
             <li>Creado por: ${empleado.creador}</li>
              
             <div/>
             `

        })
        document.querySelector('.load').innerHTML=html;        
    })
    .catch(function(error){
     console.log(error);
    });
    
}