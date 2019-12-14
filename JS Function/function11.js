//Write a JavaScript function which will take an array of numbers stored and find the 
//second lowest and second greatest numbers, respectively

//User defined
//For second largest num
const newArr = [55,6,7,85,90,9,15,11,23,4,-8,45];

function secondLargestNumber(arr) {
    let firstLarge = 0;
    let secondLarge = 0;
    for(let i=0; i<arr.length; i++) {
        if(firstLarge < arr[i]) {
            secondLarge = firstLarge;
            firstLarge = arr[i];
        }else if(secondLarge < arr[i]) {
            secondLarge = arr[i]
        }
    }
    return secondLarge;
};
console.log(secondLargestNumber(newArr));

//For second small num
const newArray = [55,6,7,85,90,9,15,11,23,4,45];


    let min = Infinity; 
    let secondMin = Infinity; 

    for (var i= 0; i< newArray.length; i++) {
        if (newArray[i]< min) {
            secondMin = min;
            min = newArray[i]; 
        } else if (newArray[i]< secondMin) {
            secondMin = newArray[i]; 
        }
    }


console.log('Smallest number: ' + min);
console.log('Second smallest number: ' + secondMin);