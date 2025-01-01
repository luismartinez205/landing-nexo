
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
            // Generar el HTML para un único objeto
            const html = `
                <div class="country-info">
                    <h1>${data.name}</h1>
                    <img class="flag" src="${data.flags[0]}" alt="Bandera de ${data.name}" />
                    <p><strong>Descripción:</strong> ${data.description}</p>
                    <ul>
                        <li><strong>Capital:</strong> ${data.stateCapital}</li>
                        <li><strong>Superficie:</strong> ${data.surface.toLocaleString()} km²</li>
                        <li><strong>Población:</strong> ${data.population.toLocaleString()} habitantes</li>
                        <li><strong>Zona horaria:</strong> ${data.timeZone}</li>
                        <li><strong>Moneda:</strong> ${data.currency} (${data.currencySymbol})</li>
                        <li><strong>Idiomas:</strong> ${data.languages.join(', ')}</li>
                        <li><strong>Región:</strong> ${data.region} (${data.subRegion})</li>
                        <li><strong>Fronteras:</strong> ${data.borders.join(', ')}</li>
                    </ul>
                    <p><strong>Prefijo telefónico:</strong> ${data.phonePrefix}</p>
                    <p><strong>Dominio de internet:</strong> ${data.internetDomain}</p>
                </div>
            `;

            // Inserta el HTML generado en el contenedor
            document.querySelector('.load').innerHTML = html;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            // Muestra un mensaje de error en el DOM si falla la solicitud
            document.querySelector('.load').innerHTML = `
                <div class="error">Error al cargar los datos. Inténtalo de nuevo más tarde.</div>
            `;
        });
}

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
            data.forEach(empleado){
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
                data.forEach(function(empleado) {
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

document.querySelector('.boton').addEventListener('click', fetchData());

function fetchData(){
fetch('https://api-colombia.com/api/v1/Country/Colombia')
    .then(response => {
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        return response.json();
    })
    .then(data => {
        let html = '';
        if (Array.isArray(data)) {
            // Si data es un array
            data.forEach(function(data) {
                html += `
                    <div class="btnjson">
                        <img class="pyton" src="${data.name}" alt="" />
                        <li><strong>Lenguaje:</strong> </li>
                        <li>Creado por:</li>
                    </div>
                `;
            });
        } else if (data.data && Array.isArray(data.data)) {
            // Si data es un objeto y contiene un array en la propiedad 'data'
            data.data.forEach(function(data) {
                html += `
                    <div class="btnjson">
                        <img class="pyton" src="${data.name}" alt="" />
                        <li><strong>Lenguaje:</strong> </li>
                        <li>Creado por: </li>
                    </div>
                `;
            });
        } else {
            // Si data no es un array ni contiene un array
            html = `
                <div class="btnjson">
                    <img class="pyton" src="${data.name}" alt=" />
                    <li><strong>Lenguaje:</strong> </li>
                    <li>Creado por:</li>
                </div>
            `;
        }
        document.querySelector('.load').innerHTML = html;
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
    }
*/
