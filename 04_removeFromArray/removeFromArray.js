const removeFromArray = function(add, ...removeList) {
    const arrayList = add;
    for (const removeItem of removeList) {
        let i = 0;
        while (i < arrayList.length) {
            if (removeItem === arrayList[i]) {
                arrayList.splice(i,1);
            }
            i++;
        }
    }
    return arrayList;
};


// Do not edit below this line
module.exports = removeFromArray;
