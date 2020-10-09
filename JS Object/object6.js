//Write a Bubble Sort algorithm in JavaScript.
//Note: Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
//Sample Data: [6,4,0, 3,-2,1]
//Expected Output : [-2, 0, 1, 3, 4, 6]

let arr = [6, 4, 0, 3, -2, 1];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(arr);
}

bubbleSort(arr);
