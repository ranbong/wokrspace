/* ----------------------------------------------
 * Stylesheet
 * Author - ranbong0804@gmail.com
------------------------------------------------- */

$(function(){
	var container = $("#container");
	var popupClose = container.find(".close");
	var tabIco = container.find(".iconWrap");

	//컨텐츠 팝업 닫기 
	popupClose.on("click",function(e){
		$(this).parents(".contentBox").hide();
		e.preventDefault();
	});

	tabIco.on("click","a",function(e){
		var dataConnect = $(this).attr("data-connect");
		$("#" + dataConnect).show();
		$("#" + dataConnect).siblings().hide();
		e.preventDefault();
	});
});