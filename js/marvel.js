const crypto =import('crypto');

// Configura tus claves y timestamp
const ts = new Date().getTime().toString(); // Marca de tiempo actual
const publicKey = '9beb2d579e4b4399f8e023b066be5646';
const privateKey = '31125e7776a029a28d6866ff71ad4b6eccffdc30';

// Generar el hash MD5
const hash = crypto.createHash('md5').update(ts + privateKey + publicKey).digest('hex');

// Construir la URL de la API
const url = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

// Hacer la solicitud a la API
const fetch = import('node-fetch');

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Datos obtenidos de la API de Marvel:', data);
  })
  .catch(error => {
    console.error('Error al realizar la solicitud:', error);
  });
