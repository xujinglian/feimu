function $(id){
	return typeof id==='string'?document.getElementById(id):id;

}

/***
鼠标滑过介绍和演示菜单的时候发生内容切换脚本
***/
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
当页面滚动一定高度之后介绍和演示通栏固定在页面顶部
***/
window.onscroll=function(){
		var topScroll1 =document.body.scrollTop;//滚动的距离,距离顶部的距离
		var bignav1 = document.getElementById("daohang");//获取到导航栏id
		if(topScroll1 > 750){ //当滚动距离大于250px时执行下面的东西
		  bignav1.style.position = 'fixed';
		  bignav1.style.top = '0';
		  bignav1.style.zIndex = '9999';
		}else{//当滚动距离小于250的时候执行下面的内容，也就是让导航栏恢复原状
		  bignav1.style.position = 'static';
		}
}
		 

