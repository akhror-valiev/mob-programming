//reverse String without reverse method.

const str = "ahror";


function stringSlicer(str) {
    if (str.length < 2) {
        return str;
    }
    return stringSlicer(str.slice(1)) + str[0];
}

const result = stringSlicer(str);
console.log(result);
