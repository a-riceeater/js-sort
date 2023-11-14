const Sort = {};

Sort.bogo = function (arr) {

} 

Sort.isSorted = function (arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i+1]) {
            return false;
        }
    }
    return true;
}


console.log(Sort.isSorted([2, 1]));