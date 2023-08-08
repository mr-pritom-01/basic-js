var arr = [10,20,30,40,50,60,70,80,90];

// console.log(arr[3])
// console.log(arr.indexOf(20))

// var x = 0; 
// while(x<arr.length){
//     console.log(arr[x]);
//     x++
// }

for(var i = 0; i < arr.length; i++ ){
    // upore thakle 50 print kore break korbe
    // console.log(arr[i])
    if(arr[i] == 50){
        // break;
        continue;
    }
// eta niche dile 45 e break korbe
// niche thakle 50 print korbe na, upore thakle kaj korbe na
console.log(arr[i])
}