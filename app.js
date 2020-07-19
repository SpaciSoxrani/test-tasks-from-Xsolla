'use strict';
//�������� �������, ������� ��������� ������, � ���������� �� � ������:
//- ������ ������ ���������� � ������� #;
//- ������ ����� ������ ���������� � ��������� �����, ��� ��������� �����
//��������;
//- ������� ������ ���������� false, ���� ����� ������� ��������� 100
//�������� ��� ����� 0;
//- ������ ����� ��������� ������ �����, ����� � ������ #.

//������:

//let res = getHashTag('������ ������ ""�������""');
//console.log(res); // #�������������������"
function getHashTag(s) {
    let word = '';
    let result = '#';

    if (s.length == 0) {
        return false;
    }
   
    for (let i = 0; i < s.length + 1; i++) {
        if ((/[a-zA-Z�-��-�]/.test(s[i]) || parseInt(s[i])) && i != s.length) {
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

    if (result.length > 101 || result.length == 1) { /*� ������ ������� ������� #*/
        return false;
    }
    
     
    return result;
}
console.log(getHashTag(''));