// ЧИСЛОВЫЕ ПЕРЕЧИСЛЕНИЯ
// По дефолту будут заданы значения начиная с 0, а далее +1
enum EInteger {
	First,
	Second,
	Third
}

// Значения начиная с 1, а далее +1
enum E2Integer {
	First = 1,
	Second,
	Third
}

// СТРОКОВЫЕ ПЕРЕЧИСЛЕНИЯ
enum Direction {
	Up = 'UP',
	Down = 'DOWN',
	Left = 'LEFT',
	Right = 'RIGHT',
}

// ГЕТЕРОГЕННЫЕ ПЕРЕЧИСЛЕНИЯ
enum Decision {
	Yes = 1,
	No = 'No'
}

// РАСЧЕТНЫЕ ПЕРЕЧИСЛЕНИЯ
// Такие перечисления могут быть только числовыми
enum Decision2 {
	Yes = 1,
	No = calcEnum()
}

function calcEnum() {
	return 2;
}

// ИСПОЛЬЗОВАНИЕ ПЕРЕЧИСЛЕНИЙ КАК ОБЪЕКТ
function runEnum(obj: { Up: string }) {

}
runEnum(Direction);


// ОБРАТНЫЙ МАППИНГ, ПОЛУЧЕНИЕ СТРОКОВОГО ЗНАЧЕНИЯ
enum TestEnum {
	A
}

let testA = TestEnum.A
let nameA = TestEnum[testA]  // A

// КОНСТАНТНЫЕ ПЕРЕЧИСЛЕНИЯ
// Если использовать enum ток как константа, то const enum
const enum ConstEnum {
	A,
	B
}

let ceA = ConstEnum.A


// ТИП never И ПЕРЕЧИСЛЕНИЯ
enum Dice {
	One = 1,
	Two,
	// Three  // если раскоментить never выкинет ошибку
}
// never определит проработало ли все перечисление 
function ruDice(dice: Dice) {
	switch (dice) {
		case Dice.One:
			return 'один';
		case Dice.Two:
			return 'два';
		default:
			const _never: never = dice;
	}
}