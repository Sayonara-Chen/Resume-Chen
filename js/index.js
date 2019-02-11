var $homepageBox = $('.homepageBox'),
    $basicInformationBox = $('.basicInformationBox'),
    $professionalBox = $('.professionalBox'),
    $selfEvaluationBox = $('.selfEvaluationBox'),
    $contactBox = $('.contactBox'),
    $bg_box = $('.bg_box'),
    $music = $('.music'),
    $audio = $('#love')[0];
// var first = document.getElementsByTagName("section")[0].getAttribute("data_one"),
//     second = document.getElementsByTagName("section")[1].getAttribute("data_two"),
//     third = document.getElementsByTagName("section")[2].getAttribute("data_three"),
//     myAry=[first,second,third];
var arr = [$homepageBox,$basicInformationBox,$professionalBox,$selfEvaluationBox,$contactBox];
var n = 0;

function load(){
    $audio.play();
}
load();

var flag=false;
$music.click(function(){
       if(!flag){
           //$(this).css({"-webkit-animation-iteration-count":"0"});
           $(this).css({"-webkit-animation-play-state":"paused"});
           //音乐停止
           $audio.pause();
           flag=true;
       }else{
           //$(this).css({"-webkit-animation-iteration-count":"infinite"});
           $(this).css({"-webkit-animation-play-state":"running"});
           //音乐播放
           $audio.play();
           flag=false;
       }
   })

var startX = 0,
    startY = 0,
    index=0;

function touchStart(evt){
    try{
        var touch = evt.touches[0], //获取第一个触点
                x = Number(touch.pageX), //页面触点X坐标
                y = Number(touch.pageY); //页面触点Y坐标
        //记录触点初始位置
        startX = x;
        startY = y;
    }catch(e){
        console.log(e.message)
    }
}

function touchMove(evt){
    try{
        var touch = evt.touches[0], //获取第一个触点
        x = Number(touch.pageX), //页面触点X坐标
        y = Number(touch.pageY); //页面触点Y坐标
        //判断滑动方向
        if(startY - y > 100){
            console.log('上滑了！');
            // var mainView = myApp.addView('.view-main', {domCache: true});
            // mainView.router.load({pageName: 'friendCircle'});
            arr[n].css({
                transform:'translateY(-100%)',
                transition:'transform 1.5s'
            });
            arr[n+1].show();
            arr[n+1].css({
                transform:'translateY(0)',
                transition:'transform  1.5s'
            }); 
        }
        n++;
        if(y - startY > 100){
            console.log('下滑了！');
            arr[n].css({
                transform:'translateY(100%)',
                transition:'transform  2s'
            });
            arr[n-1].css({
                display:'block',
                transform:'translateY(0)',
                transition:'transform 2s'
            });
        }
        n--;
    }catch(e){
        console.log(e.message);
    }
}
function bindEvent(){
    document.addEventListener('touchstart',touchStart,false);
    document.addEventListener('touchmove',touchMove,false);
    // document.addEventListener('touchend',touchEnd,false);
}

bindEvent();
