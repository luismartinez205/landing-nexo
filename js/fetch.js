/*
document.querySelector('.boton').addEventListener('click', fetchData);

function fetchData() {
    fetch('https://api-colombia.com//api/v1/Country/Colombia') // Realiza la solicitud
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return response.json(); // Convierte la respuesta a JSON
        })
        .then(data => {
            let html= '';
            data.data.forEach(function(empleado){
                html += `
                 <div class="btnjson">
                 <img class="pyton" src="${empleado.name}"/>
                 <li><strong>Lenguaje:<strong/> ${empleado.currency}</li>
                 
                 <li>Creado por: ${empleado.surface}</li>
                  
                 <div/>
                 `
    
            })
            document.querySelector('.load').innerHTML=html;  
        })
        
}
 probando codigo corregido por ia
document.querySelector('.boton').addEventListener('click', fetchData);

function fetchData() {
    fetch('https://api-colombia.com/api/v1/Country/Colombia') // Corrige la URL
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return response.json(); // Convierte la respuesta a JSON
        })
        .then(data => {
            if (!Array.isArray(data)) {
                throw new Error('La respuesta no es un array');
            }

            let html = '';
            data.forEach(function(empleado) {
                html += `
                <div class="btnjson">
                    <img class="pyton" src="${empleado.img}" alt="${empleado.nombre}" />
                    <li><strong>Lenguaje:</strong> ${empleado.nombre}</li>
                    <li>Creado por: ${empleado.creador}</li>
                </div>
                `;
            });
            document.querySelector('.load').innerHTML = html;  
        })
        .catch(error => {
            console.error('Error fetching data:', error); // Maneja errores
        });
}
        */
document.querySelector('.boton').addEventListener('click', fetchData);

function fetchData() {
    fetch('https://api-colombia.com/api/v1/Country/Colombia') // Ajusta la URL si es necesario
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); // Convierte la respuesta a JSON
        })
        .then(data => {
            // Verifica si la propiedad "data" existe y es un array
            if (data.data && Array.isArray(data.data)) {
                let html = '';
                // Recorre el array de la propiedad "data"
                data.data.forEach(function(empleado) {
                    html += `
                        <div class="btnjson">
                            <img class="pyton" src="${empleado.img}" alt="${empleado.nombre}" />
                            <li><strong>Lenguaje:</strong> ${empleado.nombre}</li>
                            <li>Creado por: ${empleado.creador}</li>
                        </div>
                    `;
                });
                // Inserta el HTML generado en el contenedor
                document.querySelector('.load').innerHTML = html;
            } else {
                throw new Error('La propiedad "data" no contiene un array válido');
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Muestra un mensaje de error en el DOM si falla la solicitud
            document.querySelector('.load').innerHTML = `
                <div class="error">Error al cargar los datos. Inténtalo de nuevo más tarde.</div>
            `;
        });
}

