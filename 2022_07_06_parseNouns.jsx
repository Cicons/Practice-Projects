let partOfSpeech = function(word) {
	if (["I", "pecan", "pie", "ice", "cream"].includes(word)) {
  	return "N";
	} else if (["love", "hate"].includes(word)) {
  	return "V";
	} else if (["cold", "fresh"].includes(word)) {
  	return "A";
	} else {
		return "O";
  }
}

/*************************
// parse takes a string (text) and returns an array of strings (nouns)
// "I love pecan pie and ice cream" -> ["I", "pecan", "pie", "ice", "cream"]
let parse = (text) => {
	let words = text.split(" ");
  let result = words.filter((word) => { return partOfSpeech(word) === "N" });
	return result;
}
*************************/

// parse takes a string (text) and return an array of strings (noun-chunks)
//  "I love pecan pie and ice cream" -> ["I", "pecan pie", "ice cream"]
let parse = (text) => {
	let words = text.split(" ");
  let result = [];
  let temp = "";
  
  words.forEach((word) => {
  	if (partOfSpeech(word) === "N") {
    	if (temp.length > 0) {
      	temp = temp + " " + word;
      }
      else {
      	temp = word;
      }
    }
    else if (temp.length > 0) {
    	result.push(temp);
    	temp = "";
    }
  });
  
  if(temp.length > 0) { result.push(temp) };
  
	return result;
}

let text = "I love pecan pie and ice cream";
let result = parse(text);

console.log("Result", result);
