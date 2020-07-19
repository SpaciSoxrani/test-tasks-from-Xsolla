'use strict';
//Напишите функцию, которая принимает строку, и превращает ее в хэштег:
//- строка должна начинаться с символа #;
//- каждое слово должно начинаться с прописной буквы, все остальные буквы
//строчные;
//- функция должна возвращать false, если длина хэштега превышает 100
//символов или равна 0;
//- хэштег может содержать только буквы, цифры и символ #.

//Пример:

//let res = getHashTag('Пример НОВОГО ""хэштега""');
//console.log(res); // #ПримерНовогоХэштега"
function getHashTag(s) {
    let word = '';
    let result = '#';

    if (s.length == 0) {
        return false;
    }
   
    for (let i = 0; i < s.length + 1; i++) {
        if ((/[a-zA-Zа-яА-Я]/.test(s[i]) || parseInt(s[i])) && i != s.length) {
            word = word + s[i];
        }
        else {
            if (word.length > 1) {
                result = result + word[0].toUpperCase() + word.slice(1).toLowerCase();
            }
            if (word.length == 1) {
                result = result + word[0].toUpperCase();
            }
            
            word = '';
        }
    }

    if (result.length > 101 || result.length == 1) { /*с учетом первого символа #*/
        return false;
    }
    
     
    return result;
}
console.log(getHashTag(''));