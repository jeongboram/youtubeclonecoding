const getSample = (keyName: string) => {
	const data = window.localStorage.getItem(keyName);
	if (data !== null && data !== '') {
		let retData = null;
		try {
			retData = JSON.parse(data);
		} catch (e) {
			retData = null;
		}
		return retData;
	} else {
		return null;
	}
};

const setSample = (keyName: string, value: any) => {
	if (value !== null && value !== '') {
		window.localStorage.setItem(keyName, JSON.stringify(value));
	} else {
		window.localStorage.setItem(keyName, '');
	}
};

export default { getSample, setSample };
