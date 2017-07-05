/**
 * Created by Administrator on 2017/5/1.
 */
// 点击出现和消失皮肤
    var skin=document.getElementById("skin");
    var hide=document.getElementById("hide");
var skinMain=document.getElementsByClassName("skin-main")[0];
    skin.onclick=getSkin;
hide.onclick=hideSkin;
function getSkin() {
    skinMain.style.display="block";
}
function hideSkin() {
    skinMain.style.display="none";
}


// 鼠标进过每个皮肤出现下面的皮肤
var skinTitle=document.getElementsByClassName("skin-title")[0];
var skinTitles=skinTitle.getElementsByTagName("div");
var skinContent=document.getElementsByClassName("skin-cont");
for(var i=0;i<skinTitles.length;i++)
{   skinTitles[i].index=i;
    skinTitles[i].onmouseover=isSkin;
}
function isSkin() {
    for(var j=0;j<skinContent.length;j++)
    {
        skinTitles[j].style.backgroundColor="";

        skinContent[j].style.display="none";
    }

    this.style.backgroundColor="skyblue";
skinContent[this.index].style.display="block";
}


// 点击每个皮肤让body的皮肤是当前皮肤的颜色

var skinCont=document.getElementsByClassName("skin-cont");
for(var k=0;k<skinCont.length;k++){
 var skinColor=skinCont[k].getElementsByTagName("div");
for(var h=0;h<skinColor.length;h++)
{
    skinColor[h].style.width="100px";
     skinColor[h].style.height="60px";
      skinColor[h].style.float="left";
      skinColor[h].style.marginRight="20px";
        skinColor[h].style.marginTop="20px";
    skinColor[h].onclick=changeColor;
}
}
function changeColor()
{
    document.body.className=this.className;
}
