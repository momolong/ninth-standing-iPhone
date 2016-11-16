/**
 * Created by Administrator on 2016/9/12.
 */
$(function () {
    var i=2;
    var iMax=$("section ul li").length
    count=0;
    flag=null;

    function onThe () {
        /*if(i<2){i=i+iMax}*/
        $("section ul li").eq((i-1+iMax)%iMax).addClass("on").removeClass("none-on")
        $("section ul li").eq((i+iMax)%iMax).removeClass("on").addClass("the").removeClass("on-the")
        $("section ul li") .eq((i+1+iMax)%iMax).removeClass("the").addClass("next").removeClass("the-next")
        $("section ul li") .eq((i+2+iMax)%iMax).removeClass("next").addClass("none").removeClass("next-0")
    }
    function done(){
        if(count==0){
            clearInterval(flag);
        }
        else{
            count=count-1;
        }
    }

    $("section ul").click(function () {
        if(count<=0){
            count=1;
            flag=setInterval(done,1000);
            $("section ul li").eq((i-2+iMax)%iMax).removeClass("none").addClass("none-on")
            $("section ul li").eq((i-1+iMax)%iMax).addClass("on-the")
            $("section ul li").eq((i+iMax)%iMax).addClass("the-next")
            $("section ul li").eq((i+1+iMax)%iMax).addClass("next-0")
            setTimeout(onThe,1000)
            i--;
        }

    })

})
