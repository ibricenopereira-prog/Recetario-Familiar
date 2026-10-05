const recipes = [
  { id: 'ven-pabellon', name: 'Pabellón criollo', country: 'Venezuela', category: 'Plato principal', minutes: 90, difficulty: 'Media', description: 'El plato nacional: caraotas, carne mechada, arroz blanco y tajadas dulces.', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e5/Pabell%C3%B3n_Criollo_Venezolano.jpg/960px-Pabell%C3%B3n_Criollo_Venezolano.jpg', imageSource: 'https://commons.wikimedia.org/wiki/File:Pabell%C3%B3n_Criollo_Venezolano.jpg', ingredients: ['500 g de falda de res', '2 tazas de caraotas negras cocidas', '2 tazas de arroz blanco', '2 plátanos maduros', '1 cebolla y 1 pimentón', 'Ajo, comino, sal y aceite'], instructions: ['Cocina la carne en agua con sal hasta que esté tierna; desméchala y reserva un poco del caldo.', 'Sofríe cebolla, pimentón y ajo. Agrega la carne, comino y un chorrito de caldo; cocina 15 minutos.', 'Calienta las caraotas con su sofrito y prepara el arroz blanco por separado.', 'Corta los plátanos en tajadas y dóralos. Sirve cada preparación junta en el plato.'] },
  { id: 'ven-reina', name: 'Arepas reina pepiada', country: 'Venezuela', category: 'Desayuno', minutes: 45, difficulty: 'Fácil', description: 'Arepa dorada rellena de pollo desmechado, aguacate y un toque de limón.', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bc/Arepa-reina-pepiada-arepasdelgringo.jpg/960px-Arepa-reina-pepiada-arepasdelgringo.jpg', imageSource: 'https://commons.wikimedia.org/wiki/File:Arepa-reina-pepiada-arepasdelgringo.jpg', ingredients: ['2 tazas de harina de maíz precocida', '2½ tazas de agua tibia', '1 pechuga de pollo cocida', '1 aguacate maduro', '2 cucharadas de mayonesa', 'Sal y jugo de limón'], instructions: ['Mezcla el agua y la sal; incorpora la harina poco a poco y amasa hasta tener una masa suave.', 'Forma arepas y cocínalas en una plancha aceitada, 6–8 minutos por lado.', 'Desmecha el pollo y mézclalo con aguacate, mayonesa, limón y sal.', 'Abre las arepas calientes y rellénalas generosamente.'] },
  { id: 'ven-cachapa', name: 'Cachapas con queso', country: 'Venezuela', category: 'Desayuno', minutes: 30, difficulty: 'Fácil', description: 'Tortitas tiernas de maíz dulce, recién hechas y con queso blanco derretido.', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/74/Cachapa_Venezolana.JPG/960px-Cachapa_Venezolana.JPG', imageSource: 'https://commons.wikimedia.org/wiki/File:Cachapa_Venezolana.JPG', ingredients: ['4 tazas de granos de maíz tierno', '½ taza de leche', '1 huevo', '2 cucharadas de harina de maíz', '1 cucharadita de azúcar', 'Queso blanco para rellenar'], instructions: ['Licúa el maíz con la leche, el huevo, la harina, el azúcar y una pizca de sal; deja una mezcla algo rústica.', 'Calienta una sartén antiadherente y vierte porciones de masa.', 'Cocina a fuego medio hasta que aparezcan burbujas; voltea y dora el otro lado.', 'Rellena con queso mientras aún están calientes y dobla por la mitad.'] },
  { id: 'ven-hallaca', name: 'Hallacas navideñas', country: 'Venezuela', category: 'Plato principal', minutes: 180, difficulty: 'Avanzada', description: 'Masa de maíz teñida de onoto, guiso abundante y hojas de plátano.', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f7/Hallaca%2C_Venezuelan_Christmas_food.jpg/960px-Hallaca%2C_Venezuelan_Christmas_food.jpg', imageSource: 'https://commons.wikimedia.org/wiki/File:Hallaca,_Venezuelan_Christmas_food.jpg', ingredients: ['1 kg de harina de maíz precocida', '500 g de carne de res, cerdo y pollo', '2 cebollas y 2 pimentones', 'Onoto y caldo de pollo', 'Aceitunas, pasas y alcaparras', 'Hojas de plátano y pabilo'], instructions: ['Prepara un guiso cocinando las carnes con cebolla, pimentón y condimentos; deja enfriar.', 'Amasa la harina con caldo, sal y aceite coloreado con onoto hasta que quede suave.', 'Extiende una porción de masa sobre una hoja de plátano; coloca guiso y adorna con aceituna, pasas y alcaparras.', 'Envuelve, amarra con pabilo y hierve las hallacas durante una hora.'] },
  { id: 'cl-pastel', name: 'Pastel de choclo', country: 'Chile', category: 'Plato principal', minutes: 75, difficulty: 'Media', description: 'Pino jugoso bajo una cubierta dorada de choclo fresco y albahaca.', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/40/Pastel_de_choclo_dish.jpg/960px-Pastel_de_choclo_dish.jpg', imageSource: 'https://commons.wikimedia.org/wiki/File:Pastel_de_choclo_dish.jpg', ingredients: ['6 choclos grandes desgranados', '500 g de carne molida', '2 cebollas', '2 huevos cocidos', '8 aceitunas negras', 'Leche, albahaca, comino y azúcar'], instructions: ['Sofríe la cebolla, agrega la carne y condimenta con comino, sal y pimienta.', 'Procesa el choclo con hojas de albahaca; cocina la pasta con un poco de leche hasta espesar.', 'Reparte el pino en una fuente y añade huevo en cuartos y aceitunas.', 'Cubre con la mezcla de choclo, espolvorea azúcar y hornea a 200 °C hasta dorar.'] },
  { id: 'cl-cazuela', name: 'Cazuela chilena', country: 'Chile', category: 'Sopa', minutes: 70, difficulty: 'Fácil', description: 'Caldo casero con pollo, zapallo, choclo y papa: reconfortante de principio a fin.', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f9/Cazuela_de_pollo_chilena_%282021%29.jpg/960px-Cazuela_de_pollo_chilena_%282021%29.jpg', imageSource: 'https://commons.wikimedia.org/wiki/File:Cazuela_de_pollo_chilena_(2021).jpg', ingredients: ['4 presas de pollo', '4 papas medianas', '4 trozos de zapallo', '2 choclos cortados en trozos', '½ taza de arroz', 'Zanahoria, cebolla, cilantro y sal'], instructions: ['Dora ligeramente el pollo en una olla y cúbrelo con agua; retira la espuma al hervir.', 'Añade cebolla y zanahoria picadas, sal y orégano; cocina 20 minutos.', 'Incorpora papas, zapallo y choclo. Cuando estén casi listos, agrega el arroz.', 'Sirve bien caliente con cilantro fresco picado.'] },
  { id: 'cl-empanada', name: 'Empanadas de pino', country: 'Chile', category: 'Entrada', minutes: 100, difficulty: 'Media', description: 'Masa horneada y dorada que guarda pino de carne, huevo y aceituna.', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7e/Empanada_de_pino.jpg/960px-Empanada_de_pino.jpg', imageSource: 'https://commons.wikimedia.org/wiki/File:Empanada_de_pino.jpg', ingredients: ['500 g de harina', '100 g de manteca', '300 g de carne de res picada', '2 cebollas', '2 huevos cocidos', 'Aceitunas, comino y pimentón'], instructions: ['Prepara el pino sofriendo la cebolla con la carne y los aliños; enfría antes de usar.', 'Mezcla harina, manteca, sal y agua tibia hasta lograr una masa lisa; deja reposar 20 minutos.', 'Estira la masa, corta círculos y rellena con pino, un trozo de huevo y una aceituna.', 'Cierra en forma de empanada, pinta con huevo batido y hornea a 200 °C por 25 minutos.'] },
  { id: 'cl-charquican', name: 'Charquicán', country: 'Chile', category: 'Plato principal', minutes: 55, difficulty: 'Fácil', description: 'Guiso de papas y zapallo majados con verduras, coronado con huevo frito.', image: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Charquic%C3%A1n.jpg', imageSource: 'https://commons.wikimedia.org/wiki/File:Charquic%C3%A1n.jpg', ingredients: ['400 g de carne molida', '4 papas', '300 g de zapallo', '1 taza de choclo', '1 taza de porotos verdes', 'Cebolla, ajo, comino y orégano'], instructions: ['Sofríe cebolla y ajo; añade la carne y condimenta con comino, orégano y sal.', 'Agrega papas y zapallo en cubos con agua hasta cubrir; cocina hasta que estén blandos.', 'Incorpora choclo y porotos verdes. Maja parte de las verduras para espesar el guiso.', 'Sirve caliente, tradicionalmente con un huevo frito encima.'] },
  { id: 'bo-silpancho', name: 'Silpancho cochabambino', country: 'Bolivia', category: 'Plato principal', minutes: 65, difficulty: 'Media', description: 'Carne apanada fina sobre arroz y papa, con huevo y ensalada fresca.', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5a/Silpancho.jpg/960px-Silpancho.jpg', imageSource: 'https://commons.wikimedia.org/wiki/File:Silpancho.jpg', ingredients: ['4 filetes finos de res', '1 taza de arroz', '4 papas', '2 huevos', '1 tomate y 1 cebolla morada', 'Pan molido, limón y perejil'], instructions: ['Cuece el arroz y las papas; corta las papas en rodajas y dóralas en una sartén.', 'Aplana la carne, sazona y pásala por pan molido hasta cubrirla por ambos lados.', 'Fríe los filetes hasta que estén dorados y crujientes.', 'Sirve sobre arroz con papas, huevo frito y una ensalada picada de tomate y cebolla con limón.'] },
  { id: 'bo-saltenas', name: 'Salteñas bolivianas', country: 'Bolivia', category: 'Entrada', minutes: 150, difficulty: 'Avanzada', description: 'Empanadas jugosas de horno, con un relleno especiado que se sirve bien caliente.', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2c/Salte%C3%B1as_%28Plaza_Mayor%29-2011-01.JPG/960px-Salte%C3%B1as_%28Plaza_Mayor%29-2011-01.JPG', imageSource: 'https://commons.wikimedia.org/wiki/File:Salte%C3%B1as_(Plaza_Mayor)-2011-01.JPG', ingredients: ['500 g de harina', '100 g de mantequilla', '400 g de carne de res picada', '2 papas cocidas en cubos', 'Caldo, gelatina sin sabor y ají amarillo', 'Aceitunas, pasas, comino y huevo duro'], instructions: ['Cocina la carne con cebolla, ají y especias; agrega papa, aceitunas y huevo.', 'Integra caldo con gelatina al relleno y refrigera hasta que esté firme.', 'Prepara una masa con harina, mantequilla, azúcar, sal y agua; estira y corta discos.', 'Rellena cada disco, repulga bien cerrado y hornea a 220 °C hasta que estén doradas.'] },
  { id: 'bo-sopa-mani', name: 'Sopa de maní', country: 'Bolivia', category: 'Sopa', minutes: 80, difficulty: 'Media', description: 'Sopa espesa y aromática de maní, con papa, verduras y perejil fresco.', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/Sopa_de_Man%C3%AD_de_Bolivia.jpg/960px-Sopa_de_Man%C3%AD_de_Bolivia.jpg', imageSource: 'https://commons.wikimedia.org/wiki/File:Sopa_de_Man%C3%AD_de_Bolivia.jpg', ingredients: ['1 taza de maní crudo pelado', '500 g de carne de res o pollo', '3 papas', '1 zanahoria', '½ taza de arvejas', 'Cebolla, ajo, comino y perejil'], instructions: ['Remoja el maní y licúalo con agua hasta obtener una crema fina.', 'Dora la carne con cebolla y ajo; añade agua y cocina hasta que esté tierna.', 'Agrega la crema de maní, zanahoria, arvejas y papas en cubos.', 'Cocina a fuego bajo, revolviendo para que no se pegue, hasta que las papas estén listas. Termina con perejil.'] },
  { id: 'bo-pique', name: 'Pique macho', country: 'Bolivia', category: 'Plato principal', minutes: 50, difficulty: 'Fácil', description: 'Un plato abundante de carne, salchicha y papas con locoto y tomate.', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9e/Pique_macho.jpg/960px-Pique_macho.jpg', imageSource: 'https://commons.wikimedia.org/wiki/File:Pique_macho.jpg', ingredients: ['500 g de carne de res en cubos', '3 salchichas', '4 papas grandes', '2 tomates', '1 cebolla morada', 'Locoto, mostaza, mayonesa y ketchup'], instructions: ['Corta las papas en bastones y fríelas hasta que queden doradas.', 'Saltea la carne a fuego alto con sal y pimienta; añade las salchichas en rodajas.', 'Coloca las papas como base y distribuye encima carne y salchicha.', 'Termina con tomate, cebolla y locoto en rodajas; acompaña con las salsas.'] }
];

const STORAGE_KEYS = { favorites: 'sabor-en-casa:favorites', customRecipes: 'sabor-en-casa:custom-recipes' };
const countryImages = {
  Venezuela: recipes.find((recipe) => recipe.country === 'Venezuela').image,
  Chile: recipes.find((recipe) => recipe.country === 'Chile').image,
  Bolivia: recipes.find((recipe) => recipe.country === 'Bolivia').image
};
const grid = document.querySelector('#recipe-grid');
const searchInput = document.querySelector('#recipe-search');
const emptyState = document.querySelector('#empty-state');
const resultsCount = document.querySelector('#results-count');
const favoriteCount = document.querySelector('#favorite-count');
const favoritesToggle = document.querySelector('#favorites-toggle');
const recipeDialog = document.querySelector('#recipe-dialog');
const formDialog = document.querySelector('#form-dialog');
const recipeDetail = document.querySelector('#recipe-detail');
const recipeForm = document.querySelector('#recipe-form');
const formMessage = document.querySelector('#form-message');
let customRecipes = loadStorage(STORAGE_KEYS.customRecipes, []);
let favorites = loadStorage(STORAGE_KEYS.favorites, []);
let selectedCountry = 'Todos';
let showFavorites = false;

function loadStorage(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; }
}
function saveStorage(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* Keep the page usable without storage. */ }
}
function escapeHTML(value = '') {
  return String(value).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]);
}
function normalize(value = '') {
  return String(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}
function allRecipes() { return [...customRecipes, ...recipes]; }

function cardTemplate(recipe) {
  const isFavorite = favorites.includes(recipe.id);
  return `<article class="recipe-card"><div class="card-image-wrap"><img class="card-image" src="${escapeHTML(recipe.image)}" alt="${escapeHTML(recipe.name)}" loading="lazy" /><span class="country-label">${escapeHTML(recipe.country)}</span><button class="favorite-button ${isFavorite ? 'is-favorite' : ''}" type="button" data-favorite="${escapeHTML(recipe.id)}" aria-pressed="${isFavorite}" aria-label="${isFavorite ? 'Quitar de' : 'Agregar a'} favoritos: ${escapeHTML(recipe.name)}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 8.7c0 5.4-8.8 11-8.8 11s-8.8-5.6-8.8-11a4.5 4.5 0 0 1 8.8-1.3 4.5 4.5 0 0 1 8.8 1.3Z" /></svg></button></div><div class="card-info"><div class="card-meta"><span>${recipe.minutes} min</span><span class="difficulty">${escapeHTML(recipe.difficulty)}</span></div><h3 class="card-title">${escapeHTML(recipe.name)}</h3><p class="card-description">${escapeHTML(recipe.description)}</p><div class="card-bottom"><span class="card-category">${escapeHTML(recipe.category)}</span><button class="view-recipe" type="button" data-recipe="${escapeHTML(recipe.id)}">Ver receta <span aria-hidden="true">↗</span></button></div></div></article>`;
}

function renderRecipes() {
  const query = normalize(searchInput.value.trim());
  const visibleRecipes = allRecipes().filter((recipe) => {
    const matchesCountry = selectedCountry === 'Todos' || recipe.country === selectedCountry;
    const matchesFavorites = !showFavorites || favorites.includes(recipe.id);
    const searchable = normalize(`${recipe.name} ${recipe.country} ${recipe.category} ${recipe.description} ${recipe.ingredients.join(' ')}`);
    return matchesCountry && matchesFavorites && searchable.includes(query);
  });
  grid.innerHTML = visibleRecipes.map(cardTemplate).join('');
  grid.hidden = visibleRecipes.length === 0;
  emptyState.hidden = visibleRecipes.length > 0;
  const count = visibleRecipes.length;
  resultsCount.textContent = `${count} ${count === 1 ? 'receta' : 'recetas'}${showFavorites ? ' favoritas' : ''}`;
  favoriteCount.textContent = favorites.length;
  favoritesToggle.setAttribute('aria-pressed', String(showFavorites));
  document.querySelector('#clear-filters').hidden = !query && selectedCountry === 'Todos' && !showFavorites;
}

function toggleFavorite(id) {
  favorites = favorites.includes(id) ? favorites.filter((favoriteId) => favoriteId !== id) : [...favorites, id];
  saveStorage(STORAGE_KEYS.favorites, favorites);
  renderRecipes();
  if (recipeDialog.open) openRecipe(id);
}

function openRecipe(id) {
  const recipe = allRecipes().find((item) => item.id === id);
  if (!recipe) return;
  const isFavorite = favorites.includes(recipe.id);
  recipeDetail.innerHTML = `<div class="detail-layout"><div class="detail-photo-wrap"><img class="detail-photo" src="${escapeHTML(recipe.image)}" alt="${escapeHTML(recipe.name)}" /><span class="detail-photo-credit">Imagen: <a href="${escapeHTML(recipe.imageSource || recipe.image)}" target="_blank" rel="noreferrer">Wikimedia Commons</a></span></div><div class="detail-content"><p class="eyebrow">${escapeHTML(recipe.country)} · ${escapeHTML(recipe.category)}</p><h2 id="dialog-title">${escapeHTML(recipe.name)}</h2><p class="detail-description">${escapeHTML(recipe.description)}</p><div class="detail-stats"><span class="detail-stat">Preparación<strong>${recipe.minutes} min</strong></span><span class="detail-stat">Dificultad<strong>${escapeHTML(recipe.difficulty)}</strong></span></div><div class="detail-columns"><section><h3>Ingredientes</h3><ul class="ingredient-list">${recipe.ingredients.map((ingredient) => `<li>${escapeHTML(ingredient)}</li>`).join('')}</ul></section><section><h3>Preparación</h3><ol class="instruction-list">${recipe.instructions.map((step) => `<li>${escapeHTML(step)}</li>`).join('')}</ol></section></div><div class="detail-bottom"><span class="detail-source">Receta para compartir</span><button class="detail-favorite ${isFavorite ? 'is-favorite' : ''}" type="button" data-favorite="${escapeHTML(recipe.id)}">${isFavorite ? '♥ En favoritos' : '♡ Guardar en favoritos'}</button></div></div></div>`;
  if (!recipeDialog.open) recipeDialog.showModal();
}

function setCountry(country) {
  selectedCountry = country;
  showFavorites = false;
  favoritesToggle.setAttribute('aria-pressed', 'false');
  document.querySelectorAll('.country-filter').forEach((button) => {
    const active = button.dataset.country === country;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  renderRecipes();
}

grid.addEventListener('click', (event) => {
  const favoriteButton = event.target.closest('[data-favorite]');
  if (favoriteButton) { toggleFavorite(favoriteButton.dataset.favorite); return; }
  const recipeButton = event.target.closest('[data-recipe]');
  if (recipeButton) openRecipe(recipeButton.dataset.recipe);
});
recipeDetail.addEventListener('click', (event) => {
  const favoriteButton = event.target.closest('[data-favorite]');
  if (favoriteButton) toggleFavorite(favoriteButton.dataset.favorite);
});
document.querySelectorAll('.country-filter').forEach((button) => button.addEventListener('click', () => setCountry(button.dataset.country)));
document.querySelectorAll('[data-origin]').forEach((link) => link.addEventListener('click', () => setCountry(link.dataset.origin)));
searchInput.addEventListener('input', renderRecipes);

favoritesToggle.addEventListener('click', () => {
  showFavorites = !showFavorites;
  selectedCountry = 'Todos';
  document.querySelectorAll('.country-filter').forEach((button) => {
    const active = button.dataset.country === 'Todos';
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  renderRecipes();
  document.querySelector('#recetas').scrollIntoView({ behavior: 'smooth' });
});
function resetFilters() { searchInput.value = ''; setCountry('Todos'); }
document.querySelector('#clear-filters').addEventListener('click', resetFilters);
document.querySelector('#empty-reset').addEventListener('click', resetFilters);

function openForm() { formMessage.textContent = ''; formDialog.showModal(); }
document.querySelector('#open-recipe-form').addEventListener('click', openForm);
document.querySelector('#open-recipe-form-mobile').addEventListener('click', openForm);
document.querySelectorAll('[data-close-dialog]').forEach((button) => button.addEventListener('click', () => button.closest('dialog').close()));
[recipeDialog, formDialog].forEach((dialog) => dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); }));

recipeForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(recipeForm);
  const ingredients = String(data.get('ingredients')).split('\n').map((item) => item.trim()).filter(Boolean);
  const instructions = String(data.get('instructions')).split('\n').map((item) => item.trim()).filter(Boolean);
  if (!ingredients.length || !instructions.length) { formMessage.textContent = 'Agrega al menos un ingrediente y un paso de preparación.'; return; }
  const country = String(data.get('country'));
  const image = String(data.get('image')).trim() || countryImages[country];
  customRecipes = [{
    id: `custom-${Date.now()}`, name: String(data.get('name')).trim(), country,
    category: String(data.get('category')), minutes: Number(data.get('minutes')),
    difficulty: String(data.get('difficulty')),
    description: `${String(data.get('category'))} tradicional de ${country}, compartido desde tu cocina.`,
    image, imageSource: image, ingredients, instructions
  }, ...customRecipes];
  saveStorage(STORAGE_KEYS.customRecipes, customRecipes);
  recipeForm.reset();
  formDialog.close();
  resetFilters();
  document.querySelector('#recetas').scrollIntoView({ behavior: 'smooth' });
});

renderRecipes();