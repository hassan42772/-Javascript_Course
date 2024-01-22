// map methord is work same as for each loop 

let array1 = [1,23,4,5,6,]

const newnum =array1.map((num) => (num +1) )
console.log(newnum);

// chaining 

let array2 = [10,11,12,13,14,15]
const number = array2
            .map((num1) =>(num1 * 2))
            .map((num1) =>(num1-5))
            .filter((num1) =>( num1 >= 20))
console.log(number);


// Example of map( ) methord
let list = [1,23,45,7]

function mapping(num) {
    return num + list[1]
}

let new_e = list.map(mapping)
console.log(new_e);

/*-----------example---------  */

let list2 = [2,3,4,5]

let new_list = list2.map(Math.sqrt)
console.log(new_list);

/* example */
let list3 = [-2,-3,-4,-5]
let new_list1 = list3.map(Math.abs)
console.log(new_list1);


