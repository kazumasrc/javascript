$(document).ready(function(){
	$('#btn_load').click(function(event){
		$.getJSON('prod_data.json', null, createTable);
	});
	//エラー対処
	$(document).ajaxError(function(event, jqXHR, ajaxSettings, thrownError){
		$('#div_status').text('読み込みエラー');
	});
});

function createTable(prod_data, textStatus, jqXHR){
	$('#div_status').text(textStatus);
	var tbody = $('#prod_table tbody');
	for(var i=0; i<prod_data.length; i++)
	{
		tbody.append(
			'<tr><td>' + prod_data[i].name + '</td>' +
			'<td>' + prod_data[i].price + '</td></tr>'
		);
	}
}
