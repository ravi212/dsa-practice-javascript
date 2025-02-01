export const InsertionSort = (array) => {
    for(let i = 1; i < array.length; i++){
        let curr = array[i];
        let j = i - 1;

        while(j >= 0 && array[j] > curr) {
            array[j+1] = array[j];
            j--;
        }

        array[j+1] = curr;
    }

    return array;
}