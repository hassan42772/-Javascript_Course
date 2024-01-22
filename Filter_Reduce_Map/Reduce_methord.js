// Reduce function take the two value in the parameter one is accumulator and second is current_value
// it has many use like in shopping billing

let arr = [1,2,3,4,5,6]
const arr_number = arr.reduce((start ,current)=>(start+current),0)
console.log(arr_number);


// example 

let courses = [{
    course :'react js',
    price:2000

},
    {
        course :'python',
        price:3000

},
    {
        course :'java',
        price:5000

},
    {
        course :'javascript',
        price:4500

},
    {
        course :'node js',
        price:3457

}
]

const couse_total_price = courses.reduce((start,current) => (start+current.price),0)
console.log(couse_total_price);