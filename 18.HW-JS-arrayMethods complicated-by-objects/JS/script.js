"strict use";

/*1) Перебрать массив.Имена,let harryotterTeam = ["Albus", "Hermione", "Ronald", "Draco", "Neville"], содержащие подстроку "а", добавить в новый массив "teamA"; подстроку "H" в новый массив "teamH".Регистр важен.*/
let harryPotterTeam = ["Albus", "Hermione", "Ronald", "Draco", "Neville"];
let teamA = [];
let teamH = [];
harryPotterTeam.forEach((names) => {
    if (names.includes("a")) {
        teamA.push(names)
    }
});
harryPotterTeam.forEach((names) => {
    if (names.includes("H")) {
        teamH.push(names)
    }
});
console.log(teamA);
console.log(teamH);






/*2) let arr = [6, 3, "ten", 1, true, "4"] Получите и выведите в консоль сумму и произведение всех числовых значений данного массива*/
function task2() {
    let arr = [6, 3, "ten", 1, true, "4"];
    let mult = 1,
        sum = 0;
    arr.forEach(item => {
        if (typeof item == "number") {
            mult = mult * item;
            sum = sum + item;
        }
    });
    console.log(mult);
    console.log(sum);
}






/*3) Создайте функцию, которая в качестве аргумента принимает массив   let numArr = [1, 3, 5, 7, 9, 11] И возвращает новый массив с квадратами этих чисел*/
let numArr = [1, 3, 5, 7, 9, 11];

function task3(arr) {
    let newArr = [];
    arr.forEach(element => {
        newArr.push(element ** 2);
    });
    return newArr;
}
console.log(task3(numArr));
//Через pow(items, 2)не удалось







/*4)let students = [
    { name: 'Alexey', id: 123, marks: 9 }, { name: 'Vitalik', id: 101, marks: 5 },
    { name: 'Tanya', id: 200, marks: 7 },
    { name: 'Sasha', id: 115, marks: 10 }
]Найдите элемент массива с id: 101*/

let students = [
    { name: 'Alexey', id: 123, marks: 9 },
    { name: 'Vitalik', id: 101, marks: 5 },
    { name: 'Tanya', id: 200, marks: 7 },
    { name: 'Sasha', id: 115, marks: 10 },
];

let idResult = students.find(item => { return item.id === 101; });
console.log(idResult);







/*5) let javaScriptTypes = ["number", "null", "undefined", "string"];
Дополнить массив недостающими типами данных(используя уже другой метод)*/

//старый метод
let javaScriptTypes = ["number", "null", "undefined", "string"];
result = javaScriptTypes.push(NaN, true, undefined, 4, 0);
console.log(javaScriptTypes);

//новый метод
javaScriptTypes = ["number", "null", "undefined", "string"];
result = javaScriptTypes.splice(javaScriptTypes.length, 4, 0, NaN, true, undefined, 4, 0);
console.log(javaScriptTypes);
javaScriptTypes = ["number", "null", "undefined", "string"];
let newBox = javaScriptTypes.splice(3, 0, NaN, true, undefined, 4, 0);

console.log(newBox, javaScriptTypes);

//как альтернатива
javaScriptTypes = ["number", "null", "undefined", "string"];

function task5(arr) {
    let allTypesData = ["undefined", "boolean", "number", "string", "bigint", "symbol", "object"];
    let statusFind;
    allTypesData.forEach(element => {
        statusFind = arr.includes(element);
        if (statusFind === false) {
            arr.push(element);
        }
        console.log(statusFind);
    });
    return arr;
}
task5(javaScriptTypes);







/*6) let parfume = ["Ex Nihilo", "Killian", "BDK", "Replica"]
Заменить последний элемент на "Jo Malone"
учитывая что мы не знаем сколько у нас элементов массива*/

//1 способ, мы знаем, сколько эдементов в массиве
let parfume = ["Ex Nihilo", "Killian", "BDK", "Replica"];

parfume.splice(3, 1, "Jo Malone");
console.log(parfume);

//2 способ 
parfume = ["Ex Nihilo", "Killian", "BDK", "Replica"];
parfume.splice(-1, 1, "Jo Malone");
console.log(parfume);


//новый метод  concat(...items) метод соединения
parfume = ["Ex Nihilo", "Killian", "BDK", "Replica"];
let emptyBox = parfume.splice(-1, 1);
let fullBox = ["Jo Malone"];
let parfumeFullBox = parfume.concat(fullBox);
console.log(parfumeFullBox);

//как альтернатива

parfume = ["Ex Nihilo", "Killian", "BDK", "Replica"];

function task6(arr) {
    arr[arr.length - 1] = "Jo Malone";
    return arr;
}

task6(parfume);