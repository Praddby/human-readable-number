const arrTeen = [
	{number: 0, string: ''},
	{number: 1, string: 'one'},
	{number: 2, string: 'two'},
	{number: 3, string: 'three'},
	{number: 4, string: 'four'},
	{number: 5, string: 'five'},
	{number: 6, string: 'six'},
	{number: 7, string: 'seven'},
	{number: 8, string: 'eight'},
	{number: 9, string: 'nine'},
	{number: 10, string: 'ten'},
	{number: 11, string: 'eleven'},
	{number: 12, string: 'twelve'},
	{number: 13, string: 'thirteen'},
	{number: 14, string: 'fourteen'},
	{number: 15, string: 'fifteen'},
	{number: 16, string: 'sixteen'},
	{number: 17, string: 'seventeen'},
	{number: 18, string: 'eighteen'},
	{number: 19, string: 'nineteen'},
]
const arrTen = [
	{number: 2, string: 'twenty'},
	{number: 3, string: 'thirty'},
	{number: 4, string: 'forty'},
	{number: 5, string: 'fifty'},
	{number: 6, string: 'sixty'},
	{number: 7, string: 'seventy'},
	{number: 8, string: 'eighty'},
	{number: 9, string: 'ninety'},
]

module.exports = function toReadable (number) {
    let arrNumber = String(number).split('');
    let string = '';
    let el = null;
    
    switch(arrNumber.length) {
        case 3: {
            el = arrNumber.shift();
            string += arrTeen.filter( item => item.number === Number(el) )[0].string + ' hundred';
        }
        case 2: {
            el = Number(arrNumber.join(''));
            if (el < 20) {
                string += ' ' + arrTeen.filter( item => item.number === el )[0].string;
                break;
            } else {
                el = arrNumber.shift();
                string += ' ' + arrTen.filter( item => item.number === Number(el) )[0].string;
            }
        }
        case 1: {
            el = arrNumber.shift();
            string += ' ' + arrTeen.filter( item => item.number === Number(el) )[0].string;
            if (number === 0) string = 'zero';
        }
    }

    return string.trim();
}
