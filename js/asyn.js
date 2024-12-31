async function fetchData() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto'); // Espera la respuesta
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json(); // Convierte la respuesta a JSON
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();