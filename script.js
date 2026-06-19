//   Task 1:
//   1-dən Verilmiş n ədədinə qədər vurma cədvəlini çıxart

// let n = +prompt('enter your number')

// for(i=1 ; i<=n ; i++){
//     for(k=1; k<=10 ; k++){
//         console.log(i + '*' + k + '=' + (i * k) ) ;
//     } 
//     console.log('');
// }


//  Task2:
//  while istifadə edərək 20-dən 1-ə qədər geriyə say ,

// let i = 20;

// while (i >= 1) {
//   console.log(i);
//   i--;
// }

//   task 3
// 2 və 5-ə bölünən ədədləri konsolda çap et.

let a = 100

while(a >= 1){
    if(a%2 ===0 && a%5 ===0){
        console.log(a);

    } 
    a--;
}