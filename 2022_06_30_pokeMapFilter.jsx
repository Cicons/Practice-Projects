let pokemon = [
  {name: 'Bulbasaur', types: ['grass', 'poison'], attacks: ['tackle', 'vine whip']},
  {name: 'Ivysaur', types: ['grass', 'poison'], attacks: ['razor leaf', 'vine whip']},
  {name: 'Venusaur', types: ['grass', 'poison'], attacks: ['razor leaf', 'vine whip']},
  {name: 'Charmander', types: ['fire'], attacks: ['scratch', 'ember']},
  {name: 'Charmeleon', types: ['fire'], attacks: ['ember', 'fire fang']},
  {name: 'Charizard', types: ['fire', 'flying'], attacks: ['fire spin', 'air slash']},
  {name: 'Squirtle', types: ['water'], attacks: ['tackle', 'bubble']},
  {name: 'Wartortle', types: ['water'], attacks: ['bite', 'water gun']},
  {name: 'Blastoise', types: ['water'], attacks: ['bite', 'water gun']},
  {name: 'Caterpie', types: ['bug'], attacks: ['bug bite', 'tackle']},
  {name: 'Metapod', types: ['bug'], attacks: ['tackle', 'bug bite']},
  {name: 'Butterfree', types: ['bug', 'flying'], attacks: ['struggle bug', 'confusion']},
  {name: 'Weedle', types: ['bug', 'poison'], attacks: ['bug bite', 'poison sting']},
  {name: 'Kakuna', types: ['bug', 'poison'], attacks: ['bug bite', 'poison sting']},
  {name: 'Beedrill', types: ['bug', 'poison'], attacks: ['infestation', 'poison jab']},
  {name: 'Pidgey', types: ['normal', 'flying'], attacks: ['quick attack', 'tackle']}
];

let results = [];

// look at last element
// results = pokemon[0];
// results = pokemon[pokemon.length - 1];
// results = pokemon.at(-1);

// get and remove last element
// pokemon.pop();

// get and rmove first element
// pokemon.shift();

// get names of pokemon
/*
results = pokemon.map((pok, index) => {
  return pok.name;
});
*/

// retrieve only elements with 1 type
/*
results = pokemon.filter((pok) => {
  return pok.types.length === 1;
});
*/

// retrieve only elements with multiple types
/*
results = pokemon.filter((pok) => {
  return pok.types.length > 1;
});
*/

// retrieve only pokemon with multiple types WHERE one of those types is flying
/*
results = pokemon.filter((pok) => {
  return (pok.types.length > 1) && (pok.types.includes("flying"));
});
*/

// retrieve the NAMES of all pokemon with multiple types WHERE one of those types is flying
/*
results = pokemon.filter((pok) => {
  return (pok.types.length > 1) && (pok.types.includes("flying"));
}).map((pok) => {
  return pok.name;
});
*/

// retrieve the NON-FLYING type of all pokemon with multiple types WHERE one of those types is flying

results = pokemon.filter((pok) => {
  return (pok.types.length > 1) && (pok.types.includes("flying"));
}).map((pok) => {
  return pok.types.filter((type) => {
    return type != "flying";
  })[0];
});

console.log(results);
