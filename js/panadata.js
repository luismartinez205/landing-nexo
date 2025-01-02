const options = {
    method: 'GET',
    headers: {accept: 'application/json', 'X-USER-TOKEN': '6m6ysdZHBtqma_tceD__'}
  };
  
  fetch('https://www.panadata.net/api/v2/cedulas?query=97542395', options)
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.error(err));

// sitio oficial panadata.net (20 consultas) plan basico de 85 dolares mensuales.




