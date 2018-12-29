console.log('hello merge sort');

function mergeSort(array){
    if (array.length < 2){
        return array;
    }

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
    const sorted = [];

    while(left.length && right.length)
    {
        sorted.push( left[0] <= right[0] ? left.shift() : right.shift() );
    }

    const result = [...sorted, ...left, ...right];
    console.log(result);
    return result;
}

const unsorted = [20, 10, 4, 5];
console.log(unsorted);
console.log(mergeSort(unsorted));
