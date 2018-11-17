import { zipArrays, expandHexCode, hexToRGB, RGBToHex, mixColors } from './index';
import { colors } from './colors';


// Test color type conversions
colors.map( (item) => {
	test('Converts '+item.name+' from Hex to RGB Correctly',() => {
	  expect(hexToRGB(item.hex)).toEqual(item.rgb);
	});

	test('Converts '+item.name+' from RGB to Hex Correctly',() => {
	  expect(RGBToHex(item.rgb)).toEqual(item.hex);
	});
})

//Test 3 to 6 code hex conversion
test('Correctly returns the 6 digit hex for a 3 digit shortcode with hex prefix', () => {
	expect(expandHexCode('#F00')).toEqual('FF0000');
});

test('Correctly returns the 6 digit hex for a 3 digit shortcode without hex prefix', () => {
	expect(expandHexCode('F00')).toEqual('FF0000');
});
// Test zipArrays
test('Correctly Zips Array',() => {
	const array1 = ['A', 'B', 'C'];
	const array2 = [1, 2, 3];
	expect( zipArrays( array1, array2 ) ).toEqual( [ [ 'A', 1 ], ['B', 2 ], ['C', 3 ] ] );
});

//Test mix colors
test('Correctly mixes two colors with hex prefixes', () => {
	expect(mixColors('#ad4038','#0000ff',0.8)).toEqual('8A3360');
});

test('Correctly mixes two colors without hex prefixes', () => {
	expect(mixColors('ad4038','0000ff',0.8)).toEqual('8A3360');
});

test('Correctly mixes two colors with mixed hex prefixes', () => {
	expect(mixColors('ad4038','#0000ff',0.8)).toEqual('8A3360');
});