const cargarDatos = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon/ditto";
    const res = await fetch(url);
    const datos = await res.json();
    console.log(datos);
  };
  cargarDatos();


  async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data'); // Espera la respuesta
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json(); // Convierte la respuesta a JSON
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();


function fetchData() {
    fetch('https://api.example.com/data') // Realiza la solicitud
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

