var prod_data1 = [
	['製品名','価格'],
	['リラックスチェア', 4000] ,
	['リラックスデスク', 12000] ,
];
var prod_data2 = [
	['製品名','価格'],
	['スーパーチェア', 8000] ,
	['スーパーデスク', 25000] ,
];

function writeTable(col, row, data){
	document.write('<table>\n');
	for(var y=0; y<row; y++)
	{
		document.write('<tr>');
		for(var x=0; x<col; x++)
		{
			document.write('<td>');
			document.write(data[y][x]);
			document.write('</td>');
		}
		document.write('</tr>');
	}
	document.write('</table>\n');
}
