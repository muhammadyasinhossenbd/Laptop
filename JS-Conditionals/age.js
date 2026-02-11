const age = 43;
const price = 500;

if (age < 12 ){
    console.log("You Can Eat for Free")
}

else if (age >= 40){
   const discount = price * 5 / 100;
   const payAmount = price - discount;
    console.log( payAmount)
}

else {
console.log(price)

}

