const sumAll = function(start, end) {
    let sum = 0;
    if (start < 0 | end < 0) {
        sum = "ERROR";
    } else if (typeof (start) === "number" && typeof (end) === "number") {
        if (start > end) {
            let i = end;
            while (i <= start) {
                sum += i;
                i++;
            }
        } else {
            let i = start;
            while (i <= end) {
                sum += i;
                i++;
            }
        }
    } else {
        sum = "ERROR";
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
