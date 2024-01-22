//!code execution in javascript and call stack

/* 
*JavaScript is a dynamically typed language. This means that the data types of variables are determined at runtime, and you can change the type of a variable as needed.

*javascript is a single threaded language ha jis ma har cheeze process hoti ha 

?====>important point ====> agar code ko browser ma run kara to execution content alag hota ha ===> interview point ===> (browser ma "this" ki value window object hoti or node ya kisi or ma or hoti ha) or agar node ma run kara to execution context alag hota ha

*====>  execution context ma 2 cheeze hoti ha 
*====> 1) global execution context 
*====> 2) function execution context
*or monjo documentation ma 1 or ha ===> eval function execution context (ya property ha global object ki)

*/
/*

*sab sa pala code file javascript ko dta ha  us ka bad code global envuironment (execution contect bi kataa ha issa) ma  run hota ha or 'this'==>(variable) ma locate hota ha.

*2 phase ha code execution ka
?====> 1) creation phase (memory creation phase) bi kata ha isi
*---> is phase ma hmm na variable declear karta ha or function declear karta ha or issa memory ma allocate karta ha
    
?====> 2) execution phase (code execution phase) is ma code line by line run hota ha ya execute hota ha

?===> important point ===> execution phase ma jab bhi function call hota ha to function ka apna apna execution context create hota ha or function ka bad execution context remove ho jata ha

*/

//! ===================> call stack <======================== 
/*  

*===> sab sa pala global execution context (environment) create hota ha us ka bad koi function call hota ha to wo call stack ma add hota ha or jab function ka execute ho jata ha to call stack sa remove ho jata ha

*===> agar mutiple function call hota to list in first out order ma call stack ma add hota ha or remove hota ha

*/