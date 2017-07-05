/**
 * Created by Administrator on 2017/5/2.
 */
var nav=document.getElementsByClassName("main-nav")[0];
var navLis=nav.getElementsByTagName("li");
var mainCont=document.getElementsByClassName("main-right-cont");
for(var i=0;i<navLis.length;i++)
{   navLis[i].index=i;
    navLis[i].onclick=getMainCont;
    navLis[i].onmouseover=function ()
    {
        for(var j=0;j<navLis.length;j++){
            navLis[j].style.backgroundColor="";
        }
        this.style.backgroundColor="#50C1E8";
        this.style.cursor="pointer";
    }
}
function getMainCont() {
    for(var j=0;j<navLis.length;j++){
        // navLis[j].style.backgroundColor="";
        mainCont[j].style.display="none";

    }

    mainCont[this.index].style.display="block";
}