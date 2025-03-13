function printingSteps(numOfSteps) {
    let stair = "";
    for (let row = 0; row < numOfSteps; row++) {
        for(let col = 0; col < numOfSteps; col++) {
            if(col <= row) {
                stair += "#"
            } else {
                stair += " "
            }
        }
        stair += "\n"
    }
    console.log(stair)
}

function printingStepsRecurssion(numOfSteps, row = 0, stair = "") {
    if(numOfSteps === row) {
        return;
    }

    if (numOfSteps === stair.length) {
        console.log(stair);
        return printingStepsRecurssion(numOfSteps, row + 1);
    }

    if (stair.length <= row) {
        stair += "#"
    } else {
        stair +=" "
    }

    printingStepsRecurssion(numOfSteps, row, stair);
}

// printingSteps(6)
printingStepsRecurssion(3)