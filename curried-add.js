function curriedAdd(total) {
    //give it no number, it returns total of all numbers so far
    //if you give it a number, it returns a function
    if(arguments.length === 0) {
        return 0;
    } else {
        return function sumVals(num) {
            if(num === undefined) {
                return total;
            } else {
                total += num;
                return sumVals;
            }
        }
    }
}

module.exports = { curriedAdd };
