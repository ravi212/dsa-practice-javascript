// [1,2,3,4]

function chunk(array, size) {
    let chunked = [];

    for(let element of array) {
        let last = chunked[chunked.length - 1];

        if(!last || last.length == size) {
            chunked.push([element])
        } else {
            last.push(element)
        }
    }

    return chunked;
}

function chunkWithSlice(array, size) {
    let chunked = [];
    let index = 0
    while(index < array.length) {
        chunked.push(array.slice(index, index + size));
        index+=size;
    }
    return chunked;
}

console.log('[CHUNKED WITH FOR LOOP] : ', chunk([1,2,3,4,5], 2))
console.log('[CHUNKED WITH SLICE] : ', chunkWithSlice([1,2,3,4,5], 2))