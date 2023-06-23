let a: number = 5;
let b: string = '23';
const c: boolean = true;

let d = b + a;

let e: string[] = ['qwe', '23'];
let e2: any[] = ['qwe', '23', 1];
let f: any = 123;

function test(a: string): string | number {
	return ''
}

const test2 = (a: number): number => {
	return a * 2;
}

// e = e.map(x => x.toLocaleLowerCase())
e = e.map((x: string) => x.toLocaleLowerCase())
// e2 = e2.map((x: string) => x.toLocaleLowerCase())  // error

function countCoord(coord: { lat: number, long?: number }) {

}

function printIt(id: number | string) {
	if (typeof id === 'number') {
		console.log(id.toString());
	} else if (typeof id === 'string') {
		console.log(id.toLowerCase())
	}
}

function getSum(arr: number | number[]) {
	if (Array.isArray(arr)) {

	}
}

function test3(num: number): void {
	return;
}

const x: undefined = undefined;
const y: null = null;
