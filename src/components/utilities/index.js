/**
*	Expands a 3 digit hex to it's six digit equivalent
**/
export function expandHexCode(val) {
	return 'todo';
}


// Take in a hex sting and convert it to an array of [r,g,b]
export function hexToRGB(hexColor){
	if(hexColor.charAt(0) === "#"){
		hexColor = hexColor.substring(1,hexColor.length);
	}
	hexColor = hexColor.toUpperCase();
	console.log(hexColor);
	return hexColor.match(/[0-9A-F]{2}/g).map((color) => (
		parseInt(color,16)
	));
}

// Take in a rgb array and convert it to a hex string
export function RGBToHex( rgbColor ){
	let hexValues = rgbColor.map( ( colorPart ) => (
		colorPart.toString(16).toUpperCase()
	));

	return hexValues.reduce((acc, val) => (
		acc + (val.length == 1 ? 0+val : val)
	));
}

// Combine two arrays so you end up with a single array of arrays
// [A,B,C] and [1,2,3] will result in [A1,B2,C3]
export function zipArrays(a1,a2){
	return a1.map(( e , i ) => (
		[a1[i],a2[i]]
	));
}

//Take two colors and a weight and return a single color
export function mixColors( color1, color2, weight ) {
	let weight2 = 1 - weight;

	let rgbCombined = zipArrays( hexToRGB( color1 ), hexToRGB( color2 ) ).map( ( [ a, b] ) => (
		Math.round( a * weight + b * weight2 )
	) );
	return RGBToHex(rgbCombined);
}


export default mixColors;