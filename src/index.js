module.exports = function longestConsecutiveLength(array) {
    if (array.length == 0) {
        return 0;
    }
    array.sort(function(a,b) {
        return a-b;
    });
var max = 1; 
var count = 1;
for (var i = 0; i < array.length; i++) {
    if (array[i + 1] == array[i] + 1) {
        count++;
    } else if (array[i + 1] !== array[i]) {
        if(count > max) {
            max = count;
        }
        count = 1;
    }  
}
return max;
}
