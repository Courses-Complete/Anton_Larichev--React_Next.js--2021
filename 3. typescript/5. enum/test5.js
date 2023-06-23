"use strict";
// ЧИСЛОВЫЕ ПЕРЕЧИСЛЕНИЯ
// По дефолту будут заданы значения начиная с 0, а далее +1
var EInteger;
(function (EInteger) {
    EInteger[EInteger["First"] = 0] = "First";
    EInteger[EInteger["Second"] = 1] = "Second";
    EInteger[EInteger["Third"] = 2] = "Third";
})(EInteger || (EInteger = {}));
// Значения начиная с 1, а далее +1
var E2Integer;
(function (E2Integer) {
    E2Integer[E2Integer["First"] = 1] = "First";
    E2Integer[E2Integer["Second"] = 2] = "Second";
    E2Integer[E2Integer["Third"] = 3] = "Third";
})(E2Integer || (E2Integer = {}));
// СТРОКОВЫЕ ПЕРЕЧИСЛЕНИЯ
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
// ГЕТЕРОГЕННЫЕ ПЕРЕЧИСЛЕНИЯ
var Decision;
(function (Decision) {
    Decision[Decision["Yes"] = 1] = "Yes";
    Decision["No"] = "No";
})(Decision || (Decision = {}));
// РАСЧЕТНЫЕ ПЕРЕЧИСЛЕНИЯ
// Такие перечисления могут быть только числовыми
var Decision2;
(function (Decision2) {
    Decision2[Decision2["Yes"] = 1] = "Yes";
    Decision2[Decision2["No"] = calcEnum()] = "No";
})(Decision2 || (Decision2 = {}));
function calcEnum() {
    return 2;
}
// ИСПОЛЬЗОВАНИЕ ПЕРЕЧИСЛЕНИЙ КАК ОБЪЕКТ
function runEnum(obj) {
}
runEnum(Direction);
// ОБРАТНЫЙ МАППИНГ, ПОЛУЧЕНИЕ СТРОКОВОГО ЗНАЧЕНИЯ
var TestEnum;
(function (TestEnum) {
    TestEnum[TestEnum["A"] = 0] = "A";
})(TestEnum || (TestEnum = {}));
let testA = TestEnum.A;
let nameA = TestEnum[testA]; // A
let ceA = 0 /* ConstEnum.A */;
// ТИП never И ПЕРЕЧИСЛЕНИЯ
var Dice;
(function (Dice) {
    Dice[Dice["One"] = 1] = "One";
    Dice[Dice["Two"] = 2] = "Two";
    // Three  // если раскоментить never выкинет ошибку
})(Dice || (Dice = {}));
// never определит проработало ли все перечисление 
function ruDice(dice) {
    switch (dice) {
        case Dice.One:
            return 'один';
        case Dice.Two:
            return 'два';
        default:
            const _never = dice;
    }
}
