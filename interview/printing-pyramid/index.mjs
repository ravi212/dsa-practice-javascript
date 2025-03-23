export function pyramid(n) {
    const mid = Math.floor((2*n-1)/2);

    for(let row = 0; row < n; row++) {
        let level = "";
        for(let col = 0; col < (n * 2) - 1; col++) {
            if (mid - row <= col && mid + row >= col) {
                level += "#"
            } else {
                level += " "
            }
        }
        console.log(level)
    }
}

function pyramidRecurssion(n, row = 0, level = "") {
    if(row === n) {
        return;
    }

    if (level.length === 2*n-1) {
        console.log(level);
        pyramidRecurssion(n, row + 1);
    }

    const mid = Math.floor((2*n-1)/2);
    let add;
    if (mid - row <= level.length && mid + row >= level.length) {
        add = "#";
    } else {
        add = " ";
    }

    pyramidRecurssion(n, row, level + add);
}

pyramidRecurssion(3)
// pyramid(3)