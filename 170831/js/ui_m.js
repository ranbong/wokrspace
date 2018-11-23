/* ----------------------------------------------
 * HanbitSoft Service Development Team
 * 신규음원이벤트 Mobile UI Script
 * Author - jhkim88@hanbitsoft.co.kr 20170424
 ------------------------------------------------- */
var addClass = (function(){
	return function(ele,className){
		var check = new RegExp("(\\s|^)" + className + "(\\s|$)");
		if(ele.className.match(check)) return; //중복 체크
		ele.className += " "+className;
	}
}());
var removeClass = (function(){
	return function(ele,className){
		var check = new RegExp("(\\s|^)" + className + "(\\s|$)");
		ele.className = ele.className.replace(check," ").trim();
	}
}());

var InputMusicControl = {
	init : function(obj,musicID,setting){
		this.setInfo(obj,setting);
		this.audioPlayPause(obj,musicID);
	},
	setInfo: function(obj,setting){
		this.target = document.querySelector(obj);
		this.singer = setting.singerName;
		this.songTitle = setting.songTitle;
		this.songUrl = setting.songUrl;

		this.target.querySelector('.singer').innerText = this.singer;
		this.target.querySelector('.tit').innerText = this.songTitle;
		this.target.querySelector('audio').setAttribute('src',this.songUrl);
	},
	audioPlayPause : function(obj,musicID){
		var playBtn = document.querySelector(obj).querySelector('.btn_play_pause');
		var myAudio = document.getElementById(musicID);
		var play_time = document.getElementById('play_time');
		var current_point = document.querySelector(obj).querySelector('.current_point');

		playBtn.onclick = function(){
			if (myAudio.paused) {
				myAudio.play();
				this.innerText = '재생중';
				addClass(playBtn,'on');
			} else {
				myAudio.pause();
				this.innerText = '정지';
				removeClass(playBtn,'on');
			}
		};

		myAudio.onplay = function(e){
			var audios = document.getElementsByTagName('audio');
			var audiosBtns = document.getElementsByTagName('button');
			for(var i = 0, len = audios.length; i < len;i++){
				if(audios[i] != e.target){
					audios[i].pause();
					audios[i].currentTime = 0;
					audiosBtns[i].innerText = '정지';
					removeClass(audiosBtns[i],'on');
				}
			}
		};

		myAudio.onended = function() {
			playBtn.innerText = '정지';
			removeClass(playBtn,'on');
		};
	}
};

var cd0 = InputMusicControl.init('#jacket0','music0',{
  	singerName : 'Groovy Room',
  	songTitle : 'Sunday (feat. 헤이즈, 박재범)',
    songUrl : 'http://hbs.au.xdn.kinxcdn.com/music_live/1min/loen_new_1min/k5585.tbm.mp3' //170830 수정
});
var cd1 = InputMusicControl.init('#jacket1','music1',{
    singerName : '로꼬',
    songTitle : 'Summer Go Loco (Feat. GRAY)',
    songUrl : 'http://hbs.au.xdn.kinxcdn.com/music_live/1min/loen_new_1min/k5586.tbm.mp3' //170830 수정
});
var cd2 = InputMusicControl.init('#jacket2','music2',{
    singerName : 'Wanna One (워너원)',
    songTitle : '에너제틱 (Energetic)',
    songUrl : 'http://hbs.au.xdn.kinxcdn.com/music_live/1min/cj_new_1min/k5587.tbm.mp3' //170830 수정
});