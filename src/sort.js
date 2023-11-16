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

Array.prototype.bogo = function () {
    return Sort.bogo(this);
}

Sort.bubble = function (arr) {
    const start = new Date().getTime()
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                console.log(arr[j], arr[j + 1])
            }
        }
    }
    const end = new Date().getTime()
    console.log(((end - start) / 1000) + "ms")
    return arr;
}

Array.prototype.bubble = function () {
    return Sort.bubble(this)
}

Sort.stalin = function (arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] < arr[i]) {
            arr.splice(i + 1, 1);
        }
    }
    return arr
}

Array.prototype.stalin = function () {
    return Sort.stalin(this);
}

Sort.sleep = async function (arr) {
    return new Promise((resolve) => {
        const out = [];
        for (let i = 0; i < arr.length; i++) {
            setTimeout(() => {
                out.push(arr[i]);
                if (i == arr.length - 1) {
                    resolve(out);
                }
            }, arr[i]);
        }
    });
};

Array.prototype.sleep = async function () {
    return await Sort.sleep(this);
}

Sort.quick = function (arr) {

}

Array.prototype.quick = function () {
    return Sort.quick(this);
}

Sort.selection = function (arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let lowest = arr[i];
        let lindex;
        for (let j = i; j < arr.length; j++) {
            if (j < lowest) lowest = arr[j], lindex = j, console.log(lowest, "lowest");
            if (j == arr.length - 1) {
                arr.splice(i, 0, arr.splice(lindex, 1)[0]);
                console.log(arr)
            }
        }
        //return arr
    }
    return arr
}

Array.prototype.selection = function () {
    return Sort.selection(this);
}

Sort.heap = function (arr) {

}

Array.prototype.heap = function () {
    return Sort.heap(this);
}

Sort.isSorted = function (arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
};

// https://www.youtube.com/watch?v=AAwYzYkjNTg ?
// https://www.youtube.com/watch?v=OOBBI-kSChM

console.dir(Sort.selection([8,2,5,7,6,3]))