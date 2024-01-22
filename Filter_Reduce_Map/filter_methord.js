/* to solve it we use the filter mehord  */
/* it give the return value and for each loop cannot return the value  */

let array3 = [1.2,23,54,7,89,4 ]

let ar= array3.filter((item) => {
    
   return item >= 10})
console.log(ar);

// another example of filter methord 

/* to solve it we use the filter mehord  */

let data = [
    {
        Worker_name:'John',
        Worker_age:'20',
        Worker_skill:'Writer',
        Worker_city:'London',
        Worker_qualifaction:'master',
        Written_books:'think good',
        year:'1992'

    },
    {

        Worker_name:'Alen',
        Worker_age:'21',
        Worker_skill:'Writer',
        Worker_city:'England',
        Worker_qualifaction:'master',
        Written_books:'Do it now',
        year:'1998'

    },
    {

        Worker_name:'Will',
        Worker_age:'22',
        Worker_skill:'Writer',
        Worker_city:'Japan',
        Worker_qualifaction:'M.Fill',
        Written_books:'think new',
        year:'1994'

    },
    {

        Worker_name:'liza',
        Worker_age:'21',
        Worker_skill:'Writer',
        Worker_city:'London',
        Worker_qualifaction:'master',
        Written_books:'Grow',
        year:'1997'

    },
    {

        Worker_name:'ben',
        Worker_age:'18',
        Worker_skill:'Writer',
        Worker_city:'London',
        Worker_qualifaction:'M.Fill',
        Written_books:'make money',
        year:'2002'

    }
    ,

    {
        Worker_name:'ten',
        Worker_age:'20',
        Worker_skill:'Writer',
        Worker_city:'London',
        Worker_qualifaction:'master',
        Written_books:'well heart',
        year:'2000'

    }
]


let clear_data = data.filter((info) => {
    if (info.Worker_age >=20 && info.Worker_city.length ===6 && info.Worker_qualifaction === 'master' && info.year >=1995) {
        console.log(`Worker_Name :${info.Worker_name}\nWorker_book :${info.Written_books}\nyear :${info.year} `);
    }
});