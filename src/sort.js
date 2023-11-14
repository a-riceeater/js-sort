const Sort = {};

Sort.bogo = function (arr) {
    const start = new Date().getTime()
    while (true) {
        let index = arr.length, rIndex;
  
        while (index > 0) {
          rIndex = Math.floor(Math.random() * index);
          index--;
      
          [arr[index], arr[rIndex]] = [arr[rIndex], arr[index]];
        }

        if (Sort.isSorted(arr)) {
            const end = new Date().getTime()
            console.log(((end - start) / 1000) + "ms")
            return arr
        }
    }
    
  } 

Sort.isSorted = function (arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i+1]) {
            return false;
        }
    }
    return true;
}

const arr = shuffle(Array.from(Array(100).keys()));
console.dir(arr)
console.log(Sort.bogo(arr));

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }