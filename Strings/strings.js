// => String Methods 
//? " `` string interpolation we create a placeholder in string and we can use variable in placeholder"

// => toUpperCase() and toLowerCase()

let string1 = "Hassan"
console.log(string1.toLowerCase());
console.log(string1.toUpperCase());

// => length of string
console.log(string1.length);

// => indexOf() and lastIndexOf()
console.log(string1.indexOf("a"));

// => use this methord of output using back tick and dollar sign $
console.log(`Last index of a is ${string1.indexOf("a")}`);
console.log(`index of h is ${string1.indexOf("H")}`);

// => slice() 
let paragrapgh  = "hassan is a programmer"
console.log(`the slice of paragrapgh is ${paragrapgh.slice(-11,-1)}`);
console.log(`the slice of paragrapgh is ${paragrapgh.slice(0,3)}`);

// => substring()
console.log(`the substring of paragrapgh is ${paragrapgh.substring(0,3)}`);
// => substring() is same as slice() but it does not support negative value
console.log(`the substring of paragrapgh is ${paragrapgh.substring(-11,-1)}`);

// => replace()
let string2 = "hassan-is-a-programmer"
// for a single replace use simple replace("a"  , "#") but for multiple replace must use /---place thing that you replace---/g 
console.log(`the replace of string2 is ${string2.replace(/a/g,"#")}`);
console.log(`the replace of string2 is ${string2.replace(/-/g," ")}`);
// => replaceAll() it is same as replace() but it does not support regular expression
console.log(`the replace of string2 is ${string2.replaceAll("-"," @ ")}`);

// => includes() it return the boolean value (true or false)
let string3 = "hassan is a web developer"
console.log(`the includes of string3 is ${string3.includes("hassan")}`);

// => charAt()
let string4 = "hassan"
console.log(`the charAt of string4 is ${string4.charAt(0)}`)
;
// => split()
let string5 = "hassan is a web developer and gammer "
console.log(`the split of string5 is ${string5.split(" ")}`);
console.log(`the type of split of string5 is ${typeof(string5.split(" "))}`);

/* another example of split methord */
const str = 'The quick brown fox jumps over the lazy dog.';
const words = str.split(' ');
console.log(words[4]);

// => trim() it remove the space from the string
let string6 = "     remove white space from srting     "
console.log(`the trim of string6 is ${string6.trim()}`);
console.log(`the trim of string6 is ${string6.trimStart()}`);
console.log(`the trim of string6 is ${string6.trimEnd()}`);

// => startsWith() retrun the boolean value (true or false)
const str1 = 'Saturday night plans';
console.log(str1.startsWith('Sat'));
console.log(str1.endsWith('plans'));

// => repeat() it repeat the string
let string7 = "hassan"
console.log(`the repeat of string7 is ${string7.repeat(10)}`);

// => concat() it is same as + operator ( join the two string)
let string8 = "hassan"
let string9 = " ali"
console.log(`the concat of string8 and string9 is ${string8.concat( string9)}`);

// => search() it return the index of the string
let string10 = "hassan is a web developer and gammer"
console.log(`the search of string10 is ${string10.search("developer")}`);

// => match() it return the array of the string
let string11 = "hassan is a web developer and gammer"
console.log(`the match of string11 is ${string11.match("a")}`);
console.log(`the match of string11 is ${string11.matchAll("a")}`);


