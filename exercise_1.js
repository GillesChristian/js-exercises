const sentence = 'Hello, my name is Gilles Christian and you?';
const vowelCounters = { 'a': 0, 'e': 0, 'i': 0, 'o': 0, 'u': 0 };
let sentenceArray = sentence.toLowerCase().split('');

// using ECMAScript 6 features
sentenceArray.forEach((element) => {
    vowelCounters[element] !== undefined && vowelCounters[element]++;
});

console.log(`There are ${a + e + i + o + u} vowels `);
console.log( `${a} A , ${e} E, ${i} I, ${o} O, ${u} U`);

// The block below can also be use for counting the occurance of each vowels.

// sentenceArray.map((element) => {
//     element === 'a' ? a++
//         : element === 'e' ? e++
//         : element === 'i' ? i++
//         : element === 'o' ? o++
//         : element === 'u' && u++;
// });
