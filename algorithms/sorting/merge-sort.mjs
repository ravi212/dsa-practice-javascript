export const mergeSort = (array) => {

    if(array.length == 1) return array;

    const mid = Math.floor(array.length/2);

    const left = array.slice(0, mid);
    const right = array.slice(mid)

    return merge(mergeSort(left), mergeSort(right))
}

export const merge = (array1, array2) => {

    let combined = [];
    let i = 0;
    let j = 0;

    while(i < array1.length && j < array2.length) {
        if (array1[i] < array2[j]) {
            combined.push(array1[i]);
            i++;
        } else {
            combined.push(array2[j]);
            j++;
        }
        
    }

    while(i < array1.length) {
        combined.push(array1[i])
        i++;
    }

    while(j < array2.length) {
        combined.push(array2[j])
        j++;
    }

    return combined
}