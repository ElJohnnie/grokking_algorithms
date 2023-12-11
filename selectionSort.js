const getLow = (arr) => {
    let low = arr[0];
    let firstIndex = 0;
    for (let i = 0; i < arr.length; i++) { 
        if (arr[i] < low) {
            low = arr[i];
            firstIndex = i;
        }
    }
    return firstIndex;
}

const selectionSort = (arr) => {
    let newArr = [];
    while (arr.length > 0) {
        let lowIndex = getLow(arr);
        newArr.push(arr.splice(lowIndex, 1)[0]);
    }
    return newArr;
}


const arr = [5, 3, 8, 2, 1, 4, 7, 6];
console.log(selectionSort(arr));