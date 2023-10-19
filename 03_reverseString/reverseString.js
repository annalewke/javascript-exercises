const reverseString = function(string) {
   let stringList = string.split(" ");
   const mixList = [];
   for (const word of stringList) {
    let mix = word.split("").reverse().join("");
    mixList.push(mix);
   }
   return mixList.reverse().join(" ");
};

// Do not edit below this line
module.exports = reverseString;
