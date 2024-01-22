//! nullish coalsecing operator  ??  
//? aksar( database , server , firebase ) sa response ata ha to us ma null ya undefined ya values(data) atte ha to us ko handle karna ka lia nullish coalsecing operator use karta ha.
// ---->example 1
let value;
value = 0 ?? 10;
console.log(value);

// ---->example 2
let value1;
value1 = null ?? 10;
console.log(value1);

// ---->example 3
let value2;
value2 = undefined ?? 10;
console.log(value2);

// ---->example 4
let value3;
value3 = null ?? 50 ?? 10;
console.log(value3);

// ---->example 5
let value4;
value4 = undefined ?? null ?? 10;
console.log(value4);