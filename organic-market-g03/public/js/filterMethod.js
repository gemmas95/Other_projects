const input = document.querySelector('.selectRecipes');
let originalArray;
let originallisRecipes;

setTimeout(() => {
	originalArray = document.querySelector('.heroes');
	originallisRecipes = originalArray.childNodes;
}, 1000);

function changeArray(e) {
	const { value } = e.target;
	const acceptedword = new RegExp(value);

	const recipesContainer = document.querySelector('.heroes');
	const lisRecipes = recipesContainer.querySelectorAll('li');
	const lisRecipesArray = Array.from(lisRecipes);
	const lisRecipesArrayFiltered = lisRecipesArray.filter(
		(elem) => acceptedword.test(elem.innerText.toLowerCase()) === true
	);

	recipesContainer.innerHTML = '';

	lisRecipesArrayFiltered.forEach((liRecipe) => {
		const newLi = document.createElement('li');
		newLi.setAttribute('class', 'jumbotron li-product');
		const liContent = liRecipe.innerHTML;
		newLi.innerHTML = liContent;
		recipesContainer.appendChild(newLi);
	});
}

function deleteArray(e) {
	const keyName = e.key;

	if (keyName === 'Backspace') {
		originallisRecipes.innerHTML = '';
		window.location.href = '';

		setTimeout(() => {
			document.getElementById('selectRecipe').click();
		}, 20);
	}
}

input.addEventListener('input', changeArray);
input.addEventListener('keydown', deleteArray);
