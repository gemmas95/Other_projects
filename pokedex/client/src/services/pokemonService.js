export async function getPokemons() {
  const response = await fetch(`/pokemons?page=2&limit=10`);
  if (response.ok) {
    const json = await response.json();
    return json;
  } else {
    throw response;
  }
}
