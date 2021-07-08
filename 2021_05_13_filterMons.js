/*

We're doing drill practice with POKEMONS

Given a list of Pokemon OBJECTS, you will filter and transform that list in MANY different ways

- map       (takes an array, and returns an array with same length)
- filter    (takes an array, and returns an array with less length)

- objects

*/

// This chunk gives us a bunch of Pokemon data to sort through
const mons = [{"number":"#001","name":"Bulbasaur","types":["Grass","Poison"]},{"number":"#002","name":"Ivysaur","types":["Grass","Poison"]},{"number":"#003","name":"Venusaur","types":["Grass","Poison"]},{"number":"#004","name":"Charmander","types":["Fire"]},{"number":"#005","name":"Charmeleon","types":["Fire"]},{"number":"#006","name":"Charizard","types":["Fire","Flying"]},{"number":"#007","name":"Squirtle","types":["Water"]},{"number":"#008","name":"Wartortle","types":["Water"]},{"number":"#009","name":"Blastoise","types":["Water"]},{"number":"#010","name":"Caterpie","types":["Bug"]},{"number":"#011","name":"Metapod","types":["Bug"]},{"number":"#012","name":"Butterfree","types":["Bug","Flying"]},{"number":"#013","name":"Weedle","types":["Bug","Poison"]},{"number":"#014","name":"Kakuna","types":["Bug","Poison"]},{"number":"#015","name":"Beedrill","types":["Bug","Poison"]},{"number":"#016","name":"Pidgey","types":["Normal","Flying"]},{"number":"#017","name":"Pidgeotto","types":["Normal","Flying"]},{"number":"#018","name":"Pidgeot","types":["Normal","Flying"]},{"number":"#019","name":"Rattata","types":["Normal"]},{"number":"#020","name":"Raticate","types":["Normal"]},{"number":"#021","name":"Spearow","types":["Normal","Flying"]},{"number":"#022","name":"Fearow","types":["Normal","Flying"]},{"number":"#023","name":"Ekans","types":["Poison"]},{"number":"#024","name":"Arbok","types":["Poison"]},{"number":"#025","name":"Pikachu","types":["Electric"]},{"number":"#026","name":"Raichu","types":["Electric"]},{"number":"#027","name":"Sandshrew","types":["Ground"]},{"number":"#028","name":"Sandslash","types":["Ground"]},{"number":"#029","name":"Nidoran♀","types":["Poison"]},{"number":"#030","name":"Nidorina","types":["Poison"]},{"number":"#031","name":"Nidoqueen","types":["Poison","Ground"]},{"number":"#032","name":"Nidoran♂","types":["Poison"]},{"number":"#033","name":"Nidorino","types":["Poison"]},{"number":"#034","name":"Nidoking","types":["Poison","Ground"]},{"number":"#035","name":"Clefairy","types":["Fairy"]},{"number":"#036","name":"Clefable","types":["Fairy"]},{"number":"#037","name":"Vulpix","types":["Fire"]},{"number":"#038","name":"Ninetales","types":["Fire"]},{"number":"#039","name":"Jigglypuff","types":["Normal","Fairy"]},{"number":"#040","name":"Wigglytuff","types":["Normal","Fairy"]},{"number":"#041","name":"Zubat","types":["Poison","Flying"]},{"number":"#042","name":"Golbat","types":["Poison","Flying"]},{"number":"#043","name":"Oddish","types":["Grass","Poison"]},{"number":"#044","name":"Gloom","types":["Grass","Poison"]},{"number":"#045","name":"Vileplume","types":["Grass","Poison"]},{"number":"#046","name":"Paras","types":["Bug","Grass"]},{"number":"#047","name":"Parasect","types":["Bug","Grass"]},{"number":"#048","name":"Venonat","types":["Bug","Poison"]},{"number":"#049","name":"Venomoth","types":["Bug","Poison"]},{"number":"#050","name":"Diglett","types":["Ground"]},{"number":"#051","name":"Dugtrio","types":["Ground"]},{"number":"#052","name":"Meowth","types":["Normal"]},{"number":"#053","name":"Persian","types":["Normal"]},{"number":"#054","name":"Psyduck","types":["Water"]},{"number":"#055","name":"Golduck","types":["Water"]},{"number":"#056","name":"Mankey","types":["Fighting"]},{"number":"#057","name":"Primeape","types":["Fighting"]},{"number":"#058","name":"Growlithe","types":["Fire"]},{"number":"#059","name":"Arcanine","types":["Fire"]},{"number":"#060","name":"Poliwag","types":["Water"]},{"number":"#061","name":"Poliwhirl","types":["Water"]},{"number":"#062","name":"Poliwrath","types":["Water","Fighting"]},{"number":"#063","name":"Abra","types":["Psychic"]},{"number":"#064","name":"Kadabra","types":["Psychic"]},{"number":"#065","name":"Alakazam","types":["Psychic"]},{"number":"#066","name":"Machop","types":["Fighting"]},{"number":"#067","name":"Machoke","types":["Fighting"]},{"number":"#068","name":"Machamp","types":["Fighting"]},{"number":"#069","name":"Bellsprout","types":["Grass","Poison"]},{"number":"#070","name":"Weepinbell","types":["Grass","Poison"]},{"number":"#071","name":"Victreebel","types":["Grass","Poison"]},{"number":"#072","name":"Tentacool","types":["Water","Poison"]},{"number":"#073","name":"Tentacruel","types":["Water","Poison"]},{"number":"#074","name":"Geodude","types":["Rock","Ground"]},{"number":"#075","name":"Graveler","types":["Rock","Ground"]},{"number":"#076","name":"Golem","types":["Rock","Ground"]},{"number":"#077","name":"Ponyta","types":["Fire"]},{"number":"#078","name":"Rapidash","types":["Fire"]},{"number":"#079","name":"Slowpoke","types":["Water","Psychic"]},{"number":"#080","name":"Slowbro","types":["Water","Psychic"]},{"number":"#081","name":"Magnemite","types":["Electric","Steel"]},{"number":"#082","name":"Magneton","types":["Electric","Steel"]},{"number":"#083","name":"Farfetch'd","types":["Normal","Flying"]},{"number":"#084","name":"Doduo","types":["Normal","Flying"]},{"number":"#085","name":"Dodrio","types":["Normal","Flying"]},{"number":"#086","name":"Seel","types":["Water"]},{"number":"#087","name":"Dewgong","types":["Water","Ice"]},{"number":"#088","name":"Grimer","types":["Poison"]},{"number":"#089","name":"Muk","types":["Poison"]},{"number":"#090","name":"Shellder","types":["Water"]},{"number":"#091","name":"Cloyster","types":["Water","Ice"]},{"number":"#092","name":"Gastly","types":["Ghost","Poison"]},{"number":"#093","name":"Haunter","types":["Ghost","Poison"]},{"number":"#094","name":"Gengar","types":["Ghost","Poison"]},{"number":"#095","name":"Onix","types":["Rock","Ground"]},{"number":"#096","name":"Drowzee","types":["Psychic"]},{"number":"#097","name":"Hypno","types":["Psychic"]},{"number":"#098","name":"Krabby","types":["Water"]},{"number":"#099","name":"Kingler","types":["Water"]},{"number":"#100","name":"Voltorb","types":["Electric"]},{"number":"#101","name":"Electrode","types":["Electric"]},{"number":"#102","name":"Exeggcute","types":["Grass","Psychic"]},{"number":"#103","name":"Exeggutor","types":["Grass","Psychic"]},{"number":"#104","name":"Cubone","types":["Ground"]},{"number":"#105","name":"Marowak","types":["Ground"]},{"number":"#106","name":"Hitmonlee","types":["Fighting"]},{"number":"#107","name":"Hitmonchan","types":["Fighting"]},{"number":"#108","name":"Lickitung","types":["Normal"]},{"number":"#109","name":"Koffing","types":["Poison"]},{"number":"#110","name":"Weezing","types":["Poison"]},{"number":"#111","name":"Rhyhorn","types":["Ground","Rock"]},{"number":"#112","name":"Rhydon","types":["Ground","Rock"]},{"number":"#113","name":"Chansey","types":["Normal"]},{"number":"#114","name":"Tangela","types":["Grass"]},{"number":"#115","name":"Kangaskhan","types":["Normal"]},{"number":"#116","name":"Horsea","types":["Water"]},{"number":"#117","name":"Seadra","types":["Water"]},{"number":"#118","name":"Goldeen","types":["Water"]},{"number":"#119","name":"Seaking","types":["Water"]},{"number":"#120","name":"Staryu","types":["Water"]},{"number":"#121","name":"Starmie","types":["Water","Psychic"]},{"number":"#122","name":"Mr. Mime","types":["Psychic","Fairy"]},{"number":"#123","name":"Scyther","types":["Bug","Flying"]},{"number":"#124","name":"Jynx","types":["Ice","Psychic"]},{"number":"#125","name":"Electabuzz","types":["Electric"]},{"number":"#126","name":"Magmar","types":["Fire"]},{"number":"#127","name":"Pinsir","types":["Bug"]},{"number":"#128","name":"Tauros","types":["Normal"]},{"number":"#129","name":"Magikarp","types":["Water"]},{"number":"#130","name":"Gyarados","types":["Water","Flying"]},{"number":"#131","name":"Lapras","types":["Water","Ice"]},{"number":"#132","name":"Ditto","types":["Normal"]},{"number":"#133","name":"Eevee","types":["Normal"]},{"number":"#134","name":"Vaporeon","types":["Water"]},{"number":"#135","name":"Jolteon","types":["Electric"]},{"number":"#136","name":"Flareon","types":["Fire"]},{"number":"#137","name":"Porygon","types":["Normal"]},{"number":"#138","name":"Omanyte","types":["Rock","Water"]},{"number":"#139","name":"Omastar","types":["Rock","Water"]},{"number":"#140","name":"Kabuto","types":["Rock","Water"]},{"number":"#141","name":"Kabutops","types":["Rock","Water"]},{"number":"#142","name":"Aerodactyl","types":["Rock","Flying"]},{"number":"#143","name":"Snorlax","types":["Normal"]},{"number":"#144","name":"Articuno","types":["Ice","Flying"]},{"number":"#145","name":"Zapdos","types":["Electric","Flying"]},{"number":"#146","name":"Moltres","types":["Fire","Flying"]},{"number":"#147","name":"Dratini","types":["Dragon"]},{"number":"#148","name":"Dragonair","types":["Dragon"]},{"number":"#149","name":"Dragonite","types":["Dragon","Flying"]},{"number":"#150","name":"Mewtwo","types":["Psychic"]},{"number":"#151","name":"Mew","types":["Psychic"]}];

// nameArr = [];
// mons.forEach(mon => {
//     nameArr.append(mon.name)
// })

// result = mons.map(function(something){
//     return something.types[1];
// });

// result = mons.filter(function(something){
//     return something.types[1];
// }).map(function(stuff){return stuff.name;});

// // Names of all dual-type pokemon where one of the types is not Poison
// result = mons.filter(function(something){
//     return something.types[1];
// }).filter(function(something){
//     return !something.types.includes('Poison');
// }).map(function(stuff){return stuff.name;});

// // Names of all single-type pokemon with a 'g' in the name (upper or lowercase)
// result = mons.filter(function(something){
//     return !something.types[1];
// }).filter(function(something){
//     return something.name.includes('G') || something.name.includes('g');
// }).map(function(stuff){return stuff.name;});

// Get the other type of each pokemon with a dual type where one type is 'Fire'

// get dual types paired with Fire type
result = mons.filter(function(something){
    return something.types[1];
}).filter(function(something){
    return something.types.includes('Fire');
}).map(function(something){
    return something.types.filter(function(stuff){
        return stuff != 'Fire';
    });
});

console.log(result);




/*
---- reduce
total = numbers.reduce((total, number) => {
    return total + number
});

---- slice
myArray.slice(start, end)
// extracts the part of the array from the start index to end-1

----- indexOf
haystack.indexOf(needle)
if the needle is in the haystack, returns the index (0+)
if the needle is not in the haystack, returns -1

----- get the last element of array
myArray[myArray.length - 1];

----- remove last element of array
myArray.pop()

----- remove first element of array
myArray.shift()

----- using forEach
myArray.forEach((param) => {
    // do things to each param
});

----- printing stuff;
console.log(...);

----- split a string
myString.split(delimiter);

* if you don't provide a delimiter it splits on spaces
* if you provide an empty string as a delimiter it splits all characters

----- reverse an array
myArray.reverse();

----- join an array into a string
myArray.join(delimiter);
* If delimiter is an empty string, it concatenates all elements together

----- compare two things are equal
a === b

----- compare two things are not equal
a !== b

*/