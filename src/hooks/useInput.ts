import { useState } from 'react';

export const useInput = (initialValue: string, validator?: (value: string) => boolean) => {
	// validator 추가
	const [value, setValue] = useState(initialValue);
	const onChange = (event: any) => {
		const {
			target: { value },
		} = event;
		let willUpdate = true;
		if (typeof validator === 'function') {
			willUpdate = validator(value);
		}
		if (willUpdate) {
			setValue(value);
		}
	};

	return { value, onChange };
};

// * Useage
// const maxLength = (value: string) => useDebugValue.length < 10;
// const name = useInput('', maxLength);
// return (
//     <>
//         <div className="container">
//             <h3>useInput</h3>
//             <input type="text" {...name} />
//         </div>
//     </>
// );
