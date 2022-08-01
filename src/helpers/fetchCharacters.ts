export async function fetchCharacters(show: string) {
	try {
		const response = await fetch(
			`https://api.sampleapis.com/${show}/characters`
		);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error);
	}
}
