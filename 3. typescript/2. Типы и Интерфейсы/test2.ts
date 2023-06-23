// Наследование типов
type Point = {
	x: number,
	y: number,
}

type D3Point = Point & {
	z: number
}

// Наследование интерфейсов
interface IPoint {
	x: number,
	y: number,
}

interface I3DPoint extends IPoint {
	z: number
}

type stringOrNumber = string | number;

// Каст типов
const testCast = (point: IPoint) => {
	const d: I3DPoint = point as D3Point;
}

function print(coord: I3DPoint) {

}

// Добавление свойств для типов не доступно
interface ITest {
	a: number
}

interface ITest {
	b: number
}

type Test = {
	a: number
}
// ERROR
// type Test = {
// 	b: number
// }
