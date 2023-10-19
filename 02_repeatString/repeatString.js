const repeatString = function(string, num) {
    let result = '';
    if (num < 0) {
        return 'ERROR';
    }
    i = 0;
    while (i < num) {
        result += string;
        i++;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
