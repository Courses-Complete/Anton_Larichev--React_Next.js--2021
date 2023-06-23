// КОРТЕЖЫ
const tupleA: [number, string, number] = [1, 'yo', 0];

// Можно добавить эллемент но нельзя получить
tupleA.push(0);
// console.log(a[3]);  // ERR
console.log(tupleA.length);  // 3

// Значения менять можно
tupleA.map(s => {
	switch (typeof s) {
		case 'string':

			break
	}
})
tupleA[1] = '0_0'
console.log(tupleA);  // [1, "yo"]


// ДЕСТРУКТУРИЗАЦИЯ
const [a6, ...resp] = tupleA;
const [b6, c6, d6] = tupleA;