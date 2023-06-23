// Возвращение разных типов данных без мощи Genirics
function logTime(num: number): number {
	console.log(new Date());
	return num;
}

function logTime2(num: string): string {
	console.log(new Date());
	return num;
}

// GENERICS
function logTimeG<T>(num: T): T {
	console.log(new Date());
	if (typeof num === 'string') {
		num.toLocaleLowerCase();
	}
	return num;
}

logTimeG<string>('yo');
logTimeG<number>(123);

// GENERICS + Interface
interface MyInterface {
	transform: <T, F>(a: T) => F;
}

// GENERICS + Class
class MyGenClass<T> {
	value: T
}

const a7 = new MyGenClass<number>()

// Наследование 

interface TimeStamp {
	stamp: number;
}

function logTimeStamp<T extends TimeStamp>(num: T): T {
	console.log(num.stamp);
	return num
}