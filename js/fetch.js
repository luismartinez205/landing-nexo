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
