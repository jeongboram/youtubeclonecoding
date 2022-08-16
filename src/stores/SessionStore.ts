const getSample = (keyName: string) => {
	const data = window.sessionStorage.getItem(keyName);
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
		window.sessionStorage.setItem(keyName, JSON.stringify(value));
	} else {
		window.sessionStorage.setItem(keyName, '');
	}
};

export default { getSample, setSample };
