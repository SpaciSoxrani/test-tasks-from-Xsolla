'use strict';
function getSum(sum) {

    let user = new Object();
    let len = sum.length;
    let key = '';
    let value = '';
    if (len == 0) {
        return false;
    }//fix this

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < sum[i].length; j++) {
            if (parseInt(sum[i][j]) || sum[i][j] == '.') {
                
                value = value + sum[i][j];
            }
            else {
                key = sum[i][j];
            }
        }
        if (user.hasOwnProperty(key)) {
            user[key] = user[key] + parseFloat(value);
        }
        else {
            user[key] = parseFloat(value);
        }
        key = '';
        value = '';
    }

    return user;

}

console.log(getSum(["$11", "$1.5", "36₽", "$4", "6₽"]));
