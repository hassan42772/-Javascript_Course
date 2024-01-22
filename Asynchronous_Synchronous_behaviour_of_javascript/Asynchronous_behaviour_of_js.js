/* 
! Default behavior of javascript (synchronous)

* javascript is a synchronous language code can be executed in sequence(one after one).
* javascript is a single threaded language ha jis ma har cheeze process hoti ha(matlab 1 hi thread py sab kuch execute hota ha).
* javascript ka engine hamasha runtime environment ma hi mila ha (matlab browser ma ya node ma)
* javascript ka engine 2 part sa mila ha
* 1) memory heap (ya memory allocation ka lia use hota ha)
* 2) call stack (ya code execution ka lia use hota ha)


?javascript ma 2 type ka code lika jata ha

* 1) blocking code 
* 2) Non-blocking code

? blocking code
* blocking code is a code which take a long time to execute or block the code execution.
? non-blocking code
* non-blocking code is a code which take a short time to execute or not block the code execution.

!web api
* web api hama mila gi browser ma
* web api ka alva kie or environment bi diya gata ha such as node ma
* agar web api ho gi to hama DOM ka access mila ga
* agar node environment ho ga to hama DOM ka access nahi mila ga
* web api ka zariya blocking code ko handle karta ha.

! callback queue
* callback queue ka zariya non-blocking code ko handle karta ha.
* callback queue ma callback function store hota ha.
* callback queue hi pora javascript ko fast or asynchronous banata ha.



*/