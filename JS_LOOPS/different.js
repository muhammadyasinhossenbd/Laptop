// Odd Number 


// for (let i = 0; i < 20; i++){
//     if(i%2===1){
//         console.log(i);
//     }
// }

// for (let i = 1; i < 20; i+=2){
//     console.log(i);
    
    
    // if(i%2!==0){
    //     console.log(i);
    // }
// }

//Give the list of numbers between 1 to 30 ar divisable by 5
// for (let i = 1; i < 30; i++){
//     if(i% 3 ===0 || i % 5 === 0){
//         console.log(i);
//     }
// }


// for (let i = 1; i <= 110; i++){
//     if(i% 3 ===0 && i % 5 === 0){
//         console.log(i);
//     }
// }

//Give the sum of the num fromt 1 to 20 which are ivisable by 
let total =0;
for (let i = 1 ; i<=20; i++){
    if (i % 3 ===0){
        console.log(i);
        total = total + i;
        console.log('Sum:',total)
    }
}

console.log('Total of the numbers', total)










