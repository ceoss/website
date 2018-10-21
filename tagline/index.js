// TODO: make sure this isn't bundled
import {themes, words} from "./data"
import _ from "lodash"


// Break out tuples into own type objects
for (const key in words) {
	const header = words[key].header;
	if (header) {
		for (let i = 0; i < header.length; i++) {
			const type = header[i];
			if (!words[type]) {
				words[type] = [];
			}
			for (const group of words[key]) {
				const word = group[i];
				words[type].push(word);
			}
		}
	}
}

// Reduce over data and sort into object with first letter keys
for (const key in words) {
	words[key] = words[key].reduce((obj, word) => {
		// First letter of the first string 2nd level array or
		// first letter of the string 1st level deep
		const letter = (
			word[0][0] ? word[0][0] : word[0]
		).toLowerCase();
		// Structure
		if (!obj[letter]) {
			obj[letter] = [];
		}
		// Add word to letter array, return accumulator
		obj[letter].push(word);
		return obj;
	}, {});
}


const tagline = function() {
	let text = [];
	// Get random tagline theme to generate
	const theme = themes[_.random(0, themes.length - 1)];

	for (let i = 0; i < 3; i++) {
		const letter = ["c", "e", "o"][i];
		// Pick between possible type options
		let type = theme.pattern[i];
		type = type[_.random(0, type.length - 1)];
		// Keep picking random children until a word is found, then push
		text.push((function getRandomChild(obj) {
			if (Array.isArray(obj)) {
				return getRandomChild(obj[_.random(0, obj.length - 1)])
			} else {
				return obj;
			}
		})(words[type][letter]));
	}

	return text.join(" ");
}


export default tagline;
