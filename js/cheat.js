/**
 * Created by Administrator on 2016/9/12.
 */
$(function () {

    //备忘录留言
    $("#cheat-but").click(function () {
        if($("#cheat-text").val()) {
            $("#cheat-show").append('<li class="clr"><i>' + $("#cheat-text").val() + '</i><input class="cheat-clear"  type="button" value="删除"/></li>')
            $("#cheat-text").val("");
        }else{}
        if($("#cheat-show li").length>7){
            $("#cheat-show").addClass("scol").removeClass("cheat-ul");
        }
    })
    //备忘录删除
    $(".cheat-clear").live('click',function () {
        $(this).parent().remove();

        if($("#cheat-show li").length<=4){
            $("#cheat-show").addClass("cheat-ul").removeClass("scol ");
        }})
    //备忘录清空
    $("#cheat-cle").click(function () {
        $("#cheat-text").val("");
    })
})
