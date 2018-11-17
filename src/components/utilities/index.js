// Expands a 3 digit hex to it's six digit equivalent
export function expandHexCode(shortCode) {
	if(shortCode.charAt(0) === "#"){
		shortCode = shortCode.substring(1,shortCode.length);
	}
	const hexArray = shortCode.toUpperCase().split('');
	return hexArray[0]+hexArray[0]+hexArray[1]+hexArray[1]+hexArray[2]+hexArray[2];
}

// Take in a hex sting and convert it to an array of [r,g,b]
export function hexToRGB(hexColor){
	if(hexColor.charAt(0) === "#"){
		hexColor = hexColor.substring(1,hexColor.length);
	}
	hexColor = hexColor.toUpperCase();
	return hexColor.match(/[0-9A-F]{2}/g).map((color) => (
		parseInt(color,16)
	));
}

// Take in a rgb array and convert it to a hex string
export function RGBToHex( rgbColor ){
	const hexArray = rgbColor.map( ( colorPart ) => {
		const hexValue = colorPart.toString(16);
		return (hexValue.length === 1 ? '0' + hexValue : hexValue);
	});
	return hexArray.join('').toUpperCase();
}

// Combine two arrays so you end up with a single array of arrays
// [A,B,C] and [1,2,3] will result in [[A,1],[B,2],[C,3]]
export function zipArrays(a1,a2){
	return a1.map(( e , i ) => (
		[a1[i],a2[i]]
	));
}

//Take two colors and a weight and return a single color
export function mixColors( color1, color2, weight ) {
	const weight2 = 1 - weight;

	const rgbCombined = zipArrays( hexToRGB( color1 ), hexToRGB( color2 ) ).map( ( [ a, b] ) => (
		Math.round( a * weight + b * weight2 )
	) );
	return RGBToHex(rgbCombined);
}