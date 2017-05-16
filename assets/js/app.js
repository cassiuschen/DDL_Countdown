$(function(){
	$('#clock').countdown("2017/05/18", function(event) {
		var totalHours = event.offset.totalDays * 24 + event.offset.hours + 8;
		$(this).html(event.strftime('<div>' + totalHours + ' <span>小时</span></div><div> %M <span>分</span></div><div> %S <span>秒</span></div>'));
	});
})
