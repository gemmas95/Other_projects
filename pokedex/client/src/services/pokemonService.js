export async function getPokemons(page) {
  const response = await fetch(`/pokemons?page=${page || 1}&limit=10`);
  if (response.ok) {
    const json = await response.json();
    return json;
  } else {
    throw response;
  }
}
