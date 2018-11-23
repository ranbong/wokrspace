/* ----------------------------------------------
 * HanbitSoft Service Development Team
 * 음원이벤트2017 UI Script
 * Author - jhkim88@hanbitsoft.co.kr 20170424
 ------------------------------------------------- */


function fixBG(){
	var w = $(window).width() - 1;
	if ($(window).width() % 2 != 0) $('html').width(w);
	else $('html').width('100%');
}

var slideJacketList = function(widthNum){
	var $btn_next = $('.btn_next'),
			$btn_pre = $('.btn_pre'),
			$updateWrap = $('.update'),
			$album = $updateWrap.find('.album'),
			$albumSize = $album.size(),
			$btn_mplay = $('.mplay_btn'),
			i = 0;

  var slideJacketFunc = {};

	slideJacketFunc.move = function(){
		$updateWrap.stop().animate({'left':-widthNum*i+'px'},300);
	};
	slideJacketFunc.next = function(){
		i = i >= $albumSize-2 ? $albumSize-1 : Math.floor(i+1);
		i = i === $albumSize-2 ? i-0.5 : i;
	};
	slideJacketFunc.prev = function(){
		i = i === 0.5 ? 0 : i;
		i = i === 0 ? 0 : Math.floor(i-1);
	};

	//3개일 경우만 우선 작업(추후 개수 변경에 따라 논의 수정필요)
	slideJacketFunc.judge = function(idx){
		if(idx === 0){
			i = 0;
		}else if(idx === $albumSize-1){
			i = 0.5;
		}
	};

	slideJacketFunc.btnControl = function(){
		$btn_pre.css('visibility','visible');
		$btn_next.css('visibility','visible');
		if(i === 0){
			$btn_pre.css('visibility','hidden');
		}else if(i === $albumSize-2.5){
			$btn_next.css('visibility','hidden');
		}
	};

	slideJacketFunc.btnControl();
	$btn_next.on('click',function(){
		slideJacketFunc.next();
		slideJacketFunc.move();
		slideJacketFunc.btnControl();
	});

	$btn_pre.on('click',function(){
		slideJacketFunc.prev();
		slideJacketFunc.move();
		slideJacketFunc.btnControl();
	});

	$btn_mplay.on('click',function(){
		var self = $(this),
			idx = self.parents('li').index();
		slideJacketFunc.judge(idx);
		slideJacketFunc.move();
		slideJacketFunc.btnControl();
	});
};

$(window).load(function(){
	//fixBG();
	$(window).resize(fixBG);
	slideJacketList(240);

	var basicMP3Player = null;
	soundManager.setup({
		debugMode: false,
		waitForWindowLoad: true,
		preferFlash: false,
		url: 'js/',
		onready: function() {
			basicMP3Player = new BasicMP3Player();
		}
	});
});

(function(){
	var cdInfoData = [
		{
			"singerName" : 'Groovy Room',
			"songTitle" : 'Sunday (feat. 헤이즈, 박재범)',
			"songUrl" : 'http://hbs.au.xdn.kinxcdn.com/music_live/1min/loen_new_1min/k5585.tbm.mp3' //170830 수정
		},
		{
			"singerName" : '로꼬',
			"songTitle" : 'Summer Go Loco (Feat. GRAY)',
			"songUrl" : 'http://hbs.au.xdn.kinxcdn.com/music_live/1min/loen_new_1min/k5586.tbm.mp3' //170830 수정
		},
		{
			"singerName" : 'Wanna One (워너원)',
			"songTitle" : '에너제틱 (Energetic)',
			"songUrl" : 'http://hbs.au.xdn.kinxcdn.com/music_live/1min/cj_new_1min/k5587.tbm.mp3' //170830 수정
		}
	];

	var cdInfoList = $('.update_list').find('.album');

	cdInfoList.each(function(i){
		cdInfoList.eq(i).children('.jacket').attr('id','jacket'+i);
		cdInfoList.eq(i).find('.singer').html(cdInfoData[i].singerName);
		cdInfoList.eq(i).find('.tit').html(cdInfoData[i].songTitle);
		cdInfoList.eq(i).find('.mplay_btn').attr('href',cdInfoData[i].songUrl);
	});
}());

var arr = ["가","나","다","라","마"];
var result = [];

for(var i = 0, len = arr.length; i<=len; i++){
	result[i] = function(){
		return "value : " + arr[i];
	}
}