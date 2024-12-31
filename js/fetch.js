function fetchData() {
    fetch('https://rickandmortyapi.com/api/character') // Realiza la solicitud
        .then(response => {
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            return response.json(); // Convierte la respuesta a JSON
        })
        .then(data => {
            console.log(data); // Maneja los datos obtenidos
        })
        .catch(error => {
            console.error('Error fetching data:', error); // Maneja errores
        });
}

fetchData();