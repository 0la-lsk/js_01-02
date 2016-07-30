//1
function pow(n1, n2) {
	var b;
	if (n2 < 0) {
		b = n1;
		for (var i = 1; i < (n2)  *(-1); i++) {
		b *= n1;
		}
		return 1 / b;
	}
	if (n2 === 0) return 1;
	if (n2 % 2 == 1) return pow (n1, n2 - 1) * n1;
	else {
		b = pow (n1, n2 / 2);
		return b * b;
	}
}
function isInteger(num) {
	if ( parseInt(num) - num === 0 ) return true;
	else return false;
}
function inputNum(string) {
	var count = 0;var s = '';
	do {
		if ( count > 0 ) s = 'Input integer number, please.';
		++count;
		var num = prompt(s + string, '');
	} while ( !isInteger(num) );
	return num;
}
var x = inputNum(' Enter "x":');
var n = inputNum(' Enter degree "n":');
console.log( pow(x, n) );

//2
var arrNames=[];
for (var i = 0; i < 5; i++) {
	arrNames[i]=prompt("Введите " + (i+1) + " имя:");
}
var userName = prompt ("Введите имя пользователя:");
var chars = 0; var isUser = false;
for (var i = 0; i < arrNames.length; i++) {
	if (arrNames[i].length === userName.length)
		for (var j = 0; j < arrNames[i].length; j++) {
			if (arrNames[i][j] === userName[j]) ++chars;
		}
	if (arrNames[i].length === chars && chars > 0) isUser = true;
	else chars = 0;
}
if (isUser) alert(userName + ", вы успешно вошли");
else alert("нет совпадения");