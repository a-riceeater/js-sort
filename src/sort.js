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
                    console.log(out);
                    resolve(out);
                }
            }, arr[i]);
        }
    });
};

Sort.isSorted = function (arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
};

(async () => {
    let a = await Sort.sleep([1,3,2,6,7,8,9]);
    console.log(a)
})();