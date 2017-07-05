/**
 * Created by Administrator on 2017/4/30.
 */
window.onload=function () {
    var tabs=document.getElementsByClassName("tab-title");
    var div=document.getElementsByClassName("tab-cont")[0];
    var divs=div.getElementsByTagName("div");
    var lis=tabs[0].getElementsByTagName("li");
    for(var i=0;i<lis.length;i++)
    {   lis[i].index=i;
        lis[i].onmouseover=function () {
            for(var j=0;j<lis.length;j++)
            {
                lis[j].className="";
                divs[j].className="";
            }
            this.className="active";
            divs[this.index].className="block-active";
        }
    }
}

