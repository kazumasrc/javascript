$(document).ready(function(){
	$('.topic > div').hide('0')
	$('#lnk_closeAll').click(closeAll);
	$('#lnk_openAll').click(openAll);
	$('h2').click(toggleTopic);
});

//すべて非表示
function closeAll(event){
	event.preventDefault();
	$('.topic > div').hide('fast');
}
//すべて表示
function openAll(event){
	event.preventDefault();
	$('.topic > div').show('fast');
}
//クリックしたものを切り替え
function toggleTopic(event){
	var div = $(event.currentTarget).siblings('div');
	div.toggle('1');
}
