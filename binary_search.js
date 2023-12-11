const binary_search = (list, item) => {
    let low = 0;
    let high = list.length;
    let middle;
    let kick;

    while (low <= high) {
        middle = Math.floor((low + high) / 2);
        kick = list[middle];
        if (kick === item) {
            return middle
        } 
        if (kick > item) {
            high = middle - 1;
        } else {
            low = middle + 1;
        }
    };
    return null;
};

const list = [1, 2, 3, 4, 65, 3453, 355675, 20000000];

const result = binary_search(list, 65);

console.log(result)