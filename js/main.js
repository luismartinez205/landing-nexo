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
             <li>${empleado.nombre} ${empleado.apellido}</li> `

        })
        document.querySelector('.load').innerHTML=html;        
    })
    .catch(function(error){
     console.log(error);
    });
    
}