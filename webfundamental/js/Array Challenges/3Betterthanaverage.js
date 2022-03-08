
// Given an array of numbers return a count of how many of the numbers are larger than the average.

function betterThanAverage(arr) {
    var sum = 0;
    // calculate the average
    for(i=0;i<arr.length;i++){
        sum=arr[i]+sum
    }
    var avg = sum/arr.length;
   
    var count = 0

    for(i=0;i<arr.length;i++){
        if(arr[i]>avg){
            count++;
        }
    }

    // count how many values are greated than the average
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4