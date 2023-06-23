// Чтобы работать в JSX:
// 1. Формат файла jsx
// 2. В файле tsconfig.json поменять расширение ["jsx": "preserve"] на ["jsx": "react"],
// 3. npm i react
// 4. npm i -D @types/react

import React from 'react';

const a: JSX.Element = (
	<div tabIndex={0}>
		<span>{1 + 1}</span>
	</div>
);

// const c: string = "s";
// const b = c as string;