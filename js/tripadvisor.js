async function fetchHotels() {
    const url = 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants?locationId=304170';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '0263fa9726msh2076953cc368bd9p19586ejsnac9be653190b',
		'x-rapidapi-host': 'tripadvisor16.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
} catch (error) {
	console.error(error);
}

}

fetchHotels();
