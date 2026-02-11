/**Ternary------> three parts
 * 
//  *     ?     :
 * condition ? do something when true: do something when false
 * 
 * 
 * 
 */


// Normal If Else

// if (age >= 18){
    //     console.log("You Can Vote")
    // }
    // else{
        //     console.log("Ghumay Thako")
       // }
        
        
// const age = 17;

// Normal Ternary
// age >= 18 ? console.log("Vote Dio Daripallay") : console.log("Ghumay Thako")

let price = 10000;
const isLeader = true;

// if (isLeader === true) {price = 0; }
// else (price = price + 100 )

// console.log(price)

// price = isLeader === true ? 0 : price + 100 ;

// Optional: semi-advanced ternary
if (isLeader === true){ 
    if( price > 1000){
        price = price / 2;
    } else (price = 0) }
else (price = price + 500 )
console.log(price)