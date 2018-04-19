function $(id){
	return typeof id==='string'?document.getElementById(id):id;

}
window.onload=function(){
	//获取鼠标滑过或点击的标签和要切换内容的元素
	var feimutitles=$('qiehuantitle').getElementsByTagName('li'),
		feimudivs=$('qiehuancontent').getElementsByTagName('span');
	if(feimutitles.length!=feimudivs.length)
		return;
	//遍历titles下的所有li
	for(var i=0;i<feimutitles.length;i++){
		feimutitles[i].id=i;
		feimutitles[i].onmouseover=function(){
			//清除所有li上的class
			for(var j=0;j<feimutitles.length;j++){
				feimutitles[j].className=' ';
				feimudivs[j].style.display='none';
			}
			//设置当前为高亮显示
			this.className='select';
			feimudivs[this.id].style.display='block';
		}
	}
	
}
/***
首页介绍与演示切换效果
***/