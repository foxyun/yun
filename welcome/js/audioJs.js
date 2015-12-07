var myAudio=document.getElementById("myAudio");
var lyricDiv=document.getElementById("lyricDiv");
var lyric=null;
var songName=["Nanjolno-XueZhiHua","hanXue-PiaoXue"];
var lyricName=["南条爱乃-雪之华","韩雪-飘雪"];
var currentSong="Nanjolno-XueZhiHua";
var currentIndex=0;

function readLyric(url){
	var request =new XMLHttpRequest();
	request.open('GET',url,true);
	request.responseType='text';
	request.send();
	request.onreadystatechange=function(){
		if(request.readyState==4){
			if(request.status==200)
				lyric=parseLyric(request.responseText);
			myAudio.ontimeupdate=function(e){
				readLyric("./lyric/"+lyricName[currentIndex]+".lrc");
				for(var i=0;i<lyric.length;i++){
					if(myAudio.currentTime>lyric[i][0]-0.5)
						lyricDiv.innerHTML=lyric[i][1];
				}
				if(myAudio.duration==myAudio.currentTime){
					lyricDiv.innerHTML="";
					currentIndex++;
					if(currentIndex==songName.length){
						currentIndex=0;
					}
					currentSong=songName[currentIndex];
					myAudio.src="http://littlelittlefox-littlefox.stor.sinaapp.com/music/"+currentSong+".mp3";
					myAudio.play();
				}
			}();
		}
	}
}

function parseLyric(text){
    var lines=text.split('\n'),
        pattern=/\[\d{2}:\d{2}.\d{2}\]/g,
        result=[];

    while(!pattern.test(lines[0])){
        lines=lines.slice(1);
    }

    lines[lines.length-1].length===0&&lines.pop();

    lines.forEach(function(v,i,a){
        var time=v.match(pattern),
            value=v.replace(pattern,'');
        time.forEach(function(v1,i1,a1){
            var t=v1.slice(1,-1).split(':');
            result.push([parseInt(t[0],10)*60+parseFloat(t[1]),value]);
        });
    });

    result.sort(function(a,b){
        return a[0]-b[0];
    });

    return result;
}

readLyric("./lyric/南条爱乃-雪之华.lrc");
