window.onload=function(){
	var liebiao_icon=document.getElementById('liebiao_icon'),
		zhanghu_icon=document.getElementById('zhanghu_icon'),
		jilu_icon=document.getElementById('jilu_icon'),
		yonghu_icon=document.getElementById('yonghu_icon');
	liebiao_icon.onmouseover=function(){
		liebiao_icon.src="img/list_left_liebiao_over.png";
	}
	liebiao_icon.onmouseout=function(){
		liebiao_icon.src="img/list_left_liebiao.png";
	}

	zhanghu_icon.onmouseover=function(){
		zhanghu_icon.src="img/list_left_zhanghu_over.png";
	}
	zhanghu_icon.onmouseout=function(){
		zhanghu_icon.src="img/list_left_zhanghu.png";
	}

	jilu_icon.onmouseover=function(){
		jilu_icon.src="img/list_left_jilu_over.png";
	}
	liebiao_icon.onmouseout=function(){
		jilu_icon.src="img/list_left_jilu.png";
	}

	yonghu_icon.onmouseover=function(){
		yonghu_icon.src="img/list_left_yonghu_over.png";
	}
	yonghu_icon.onmouseout=function(){
		yonghu_icon.src="img/list_left_yonghu.png";
	}
}