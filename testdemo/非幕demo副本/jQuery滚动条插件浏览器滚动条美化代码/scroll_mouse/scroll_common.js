// JavaScript Document
 function ss(wrapper,type,arrow) {
	    var buttons_group;
	    var botton_gg=wrapper.find(".bottom_scroll");
	    if(botton_gg.length==0){
			if(arrow==true){//arrow 是否显示两端的箭头按钮
				  buttons_group=$('<div class="bottom_scroll clear">\
					 <span class="scroll_left scroll_l" tip="0"></span>\
					 <div class="scroll_border">\
						<div class="scroll_btn"></div>\
					  </div>\
					 <span class="scroll_rig scroll_r" tip="1"></span>\
					<div class="clear"></div>\
			 </div>')
			  }else{
				  buttons_group=$('<div class="bottom_scroll clear">\
					 <div class="scroll_border">\
						<div class="scroll_btn"></div>\
					  </div>\
					<div class="clear"></div>\
			   </div>')
				 }
				  buttons_group.appendTo(wrapper);
			
			}
		  var handle_c = wrapper.find(".scroll_btn");//滑动手柄
		  var handle_par = wrapper.find(".scroll_border");//滑动槽
		  var move_content = wrapper.find(".content_mid");//滑动的主体内容
		  var clude_con = wrapper.find(".content");//主体内容的父级
		  var arrow_btn = wrapper.find(".bottom_scroll").children("span");	  //左右箭头
		  var pw,ph;
		  var is_move = 1;
		  var a,b,left_common,hand_w,start_x,postion_x,new_left;
		  var ay,by,top_common,hand_h,start_y,postion_y,new_top;
		  var new_h,new_w;
		  if(type=="h"){//水平
		        pw = clude_con.width();
				new_w = clude_con.width() * handle_par.width() / move_content.width();
				handle_c.css("width", new_w);
				a = parseInt(handle_par.width() - handle_c.width());//手柄可滑动距离
				b = parseInt(move_content.width() - clude_con.width());//主体内容可滑动的内容
				left_common = handle_par.offset().left;//元素到文档边框的距离
				/*手柄的一半宽度*/
				hand_w = parseInt(new_w / 2);
				start_x = 0;
				postion_x = 0;
				new_left = 0;
			  }else if(type=="v"){//垂直
		        ph = clude_con.height();
				new_h = clude_con.height() * handle_par.height() / move_content.height();
				handle_c.css("height", new_h);
				ay = parseInt(handle_par.height() - handle_c.height());//手柄可滑动距离
				by = parseInt(move_content.height() - clude_con.height());//主体内容可滑动的内容
				top_common = clude_con.offset().top-$(window).scrollTop() ;//元素到文档边框的距离
				/*手柄的一半宽度*/
				hand_h = parseInt(new_h / 2);
				start_y = 0;
				postion_y = 0;
				new_top = 0;
			  }
		  handle_c[0].onmousedown = function (e) {//鼠标按下
			  var e = e || window.event;
			  if(type=="h"){//水平
				  start_x = e.clientX;
				  postion_x = parseInt(handle_c.position().left);
			  }else if(type=="v"){//垂直
			      start_y = e.clientY;
				  postion_y = parseInt(handle_c.position().top);
			  }
			  is_move = 2;
			  handle_c.addClass("now");
			  return false;//阻止浏览器默认事件 比如拖拽鼠标会选中文字
		  }
		  handle_c[0].onmouseup = function () {//鼠标抬起
			  //var e=e||window.event;
			  is_move = 1;
			  handle_c.removeClass("now");
			  return false;
		  }
		  handle_c[0].onmousemove = function (e) {//鼠标移动
			  var e = e || window.event;
			  //e.preventDefault();  //阻止默认事件
						  stopDefault(e)
			  if (is_move == 2) {
				  handle_c.addClass("now");
				  if(type=="h"){//水平
						 // $(".input0").val(e.clientX);
						  var distancs_move = e.clientX - start_x;
						  new_left = postion_x + distancs_move;
						  //$("input.input").val(new_left)
						  if (new_left < 0) {
							  new_left = 0;
						  }
						  else if (new_left > a) {
							  new_left = a;
						  }
						  var distance_mian = b * new_left / a;
						  handle_c.css("left", new_left);
						  move_content.css("margin-left", -distance_mian);
				  }else if(type=="v"){//垂直
					      //$(".input0").val(e.clientY);
						  var distancs_move = e.clientY - start_y;
						  new_top = postion_y + distancs_move;
						 // $("input.input").val(new_top)
						  if (new_top < 0) {
							  new_top = 0;
						  }
						  else if (new_top > ay) {
							  new_top = ay;
						  }
						  var distance_mian = by * new_top / ay;
						  handle_c.css("top", new_top);
						  move_content.css("margin-top", -distance_mian);
				  }
			  }
			  return false;
		  }
		  $(document).mouseup(function () {
			  handle_c[0].onmouseup();
		  })
		  $(document).mousemove(function (e) {
			  var e = e || window.event;
			  if (is_move == 2) {
				  handle_c[0].onmousemove(e);
			  }
		  })
		  //点击滚动曹的事件
		 //点击滚动曹的事件
		  handle_par.click(function (e) {
			  var e = e || window.event;
			  if(type=="h"){
				  //点击距离
				  var distancs_move = e.clientX - left_common;
				  var left_c = parseInt(handle_c.position().left)
				  var odd = distancs_move - left_c;
				  var s_left = parseInt(handle_c.position().left);
				  var marginleft = parseInt(move_content.css("margin-left"));
				  if (odd < 0) {
					  var new_m_left = marginleft + pw;
					  var new_s_left = s_left - (a * pw / b);
					  if (new_s_left < 0) {
						  new_s_left = 0;
					  }
					  if (new_m_left > 0) {
						  new_m_left = 0;

					  }
				  }
				  else {
					  if (odd - new_w > 0) {
						  var new_m_left = marginleft - pw;
						  var new_s_left = s_left + (a * pw / b);
						  if (new_s_left > a) {
							  new_s_left = a;
						  }
						  if (new_m_left < -b) {
							  new_m_left = -b;
						  }
					  }
				  }
				  move_content.animate({marginLeft: new_m_left}, 100);
				  handle_c.animate({left: new_s_left}, 100)
			  }else if(type=="v"){//垂直
				   //点击距离
				  var distancs_move = e.clientY - top_common;
				  var top_c = parseInt(handle_c.position().top)
				  var odd = distancs_move - top_c;
				  var s_top = parseInt(handle_c.position().top);
				  var margintop = parseInt(move_content.css("margin-top"));
				  var cha_c=odd - new_h;
				  if (odd < 0) {
					  var new_m_top = margintop + ph;
					  var new_s_top = s_top - (ay * ph / by);
					  if (new_s_top < 0) {
						  new_s_top = 0;
					  }
					  if (new_m_top > 0) {
						  new_m_top = 0;
					  }
				  }
				  else {
					  if (odd - new_h > 0) {
						  var new_m_top = margintop - ph;
						  var new_s_top = s_top + (ay * ph / by);
						  if (new_s_top > ay) {
							  new_s_top = ay;
						  }
						  if (new_m_top < -by) {
							  new_m_top = -by;
						  }
					  }
				  }
				  move_content.animate({marginTop: new_m_top}, 100);
				  handle_c.animate({top: new_s_top}, 100)
				}
		  })
		  //点击左右箭头的事件
		  //var arrow_btn=$(".bottom_scroll span");
		  var span_m = 10;
		  var timer;
		  arrow_btn.mousedown(function () {
			  var objiect = $(this);
			  var flag = false;
			  var stop;
			  var top_c = parseInt(handle_c.position().top);
			  moves_c(objiect);
			  timer = setInterval(function () {
				  flag = true;
				  moves_c(objiect);
			  }, 150);
		  })
		  arrow_btn.mouseup(function () {
			  clearInterval(timer);
			  flag = false;
		  })
		  function moves_c(obj) {
			 if(type=="h"){//水平
				  var left_c = parseInt(handle_c.position().left);
				  var marginleft = parseInt(move_content.css("margin-left"));
				  var new_m_left = 0;
				  if (obj.attr("tip") == "0") {
					  left_c = left_c - 10;
					  if (left_c < 0) {
						  left_c = 0;
						  new_m_left = 0;
						  clearInterval(timer);
					  } else {
						  var odd_m = b * span_m / a;
						  new_m_left = marginleft + odd_m;
					  }
					  handle_c.css("left", left_c);
					  move_content.css("margin-left", new_m_left);
				  } else {
					  left_c = left_c + 10;
					  if (left_c > a) {
						  left_c = a;
						  new_m_left = -b;
						  clearInterval(timer);
					  }
					  else {
						  var odd_m = b * span_m / a;
						  new_m_left = marginleft - odd_m;
					  }
					  handle_c.css("left", left_c);
					  move_content.css("margin-left", new_m_left);
				  }
			 }else if(type=="v"){//垂直
				  var top_c = parseInt(handle_c.position().top);
				  var margintop = parseInt(move_content.css("margin-top"));
				  var new_m_top = 0;
				  if (obj.attr("tip") == 0) {
					  top_c = top_c - 10;
					  if (top_c < 0) {
						  top_c = 0;
						  new_m_top = 0;
						  clearInterval(timer);
					  } else {
						  var odd_m = by * span_m / ay;
						  new_m_top = margintop + odd_m;
					  }
					  handle_c.css("top", top_c);
					  move_content.css("margin-top", new_m_top);
				  } else if (obj.attr("tip") == 1){
					  top_c = top_c + 10;
					  if (top_c > ay) {
						  top_c = ay;
						  new_m_top = -by;
						  clearInterval(timer);
					  }
					  else {
						  var odd_m = by * span_m / ay;
						  new_m_top = margintop - odd_m;
					  }
					  handle_c.css("top", top_c);
					  move_content.css("margin-top", new_m_top);
				  }   
			 }
		  }


		  if (wrapper[0].addEventListener) {
			  wrapper[0].addEventListener
			  (
					  'DOMMouseScroll',
					  function (e) {
						  wheel(e);
						  e.preventDefault();  //阻止默认事件
						  
					  },
					  false
			  );
		  }
		  wrapper[0].onmousewheel = function (e) {
			  var e = e || window.event;
			  wheel(e);
			  return false;   //阻止默认事件
		  };
		  function wheel(e) {
			 
			  var e = e || window.event;
			   var wheelDelta = e.wheelDelta || e.detail;      //detail是firefox的属性
			  if(type=="h"){//水平
			      
			      var left_c = parseInt(handle_c.position().left);
				  var marginleft = parseInt(move_content.css("margin-left"));
				  var new_m_left = 0;
				  if (wheelDelta == -120 || wheelDelta == 3) //向下滚动滑轮
				  {
					  left_c = left_c + 10;
					  if (left_c > a) {
						  left_c = a;
						  new_m_left = -b;
					  }
					  else {
						  var odd_m = b * span_m / a;
						  new_m_left = marginleft - odd_m;
					  }
					  handle_c.css("left", left_c);
					  move_content.css("margin-left", new_m_left);
					  return false;
				  }
				  else if (wheelDelta == 120 || wheelDelta == -3)    //向下滚动滑轮
				  {
					  left_c = left_c - 10;
					  if (left_c < 0) {
						  left_c = 0;
						  new_m_left = 0;
					  } else {
						  var odd_m = b * span_m / a;
						  new_m_left = marginleft + odd_m;
					  }
					  handle_c.css("left", left_c);
					  move_content.css("margin-left", new_m_left);
					  return false;
				  }
			  }else if(type=="v"){//垂直
				  var odd_m = by * span_m / ay;
				  if (wheelDelta == -120 || wheelDelta == 3) //向下滚动滑轮
				  {
					  var top_c = parseInt(handle_c.position().top);
				      var margintop = parseInt(move_content.css("margin-top"));
				      var new_m_top = 0;
					  top_c = top_c + 10;
					  if (top_c > ay) {
						  top_c = ay;
						  new_m_top = -by;
					  }
					  else {
						  new_m_top = margintop - odd_m;
						  if(new_m_top<(-by)){
							   new_m_top = -by;
							  }
					  }
					   handle_c.css("top", top_c);
				       move_content.css("margin-top", new_m_top);
					   return false;
				  }
				  else if (wheelDelta == 120 || wheelDelta == -3)    //向下滚动滑轮
				  {
					  var top_c = parseInt(handle_c.position().top);
				      var margintop = parseInt(move_content.css("margin-top"));
				      var new_m_top = 0;
					  top_c = top_c - 10;
					  if (top_c < 0) {
						  top_c = 0;
						  new_m_top = 0;
					  } else {
						  new_m_top = margintop + odd_m;
						  if(new_m_top>by){
							   new_m_top = by;
							  }
					  } 
					  handle_c.css("top", top_c);
				      move_content.css("margin-top", new_m_top);
					  return false;
				  }
				 // return false;
			  }
			  
			  return false;
		  }
		 function stopDefault(e) {   
			 //阻止默认浏览器动作(W3C)   
			 if (e && e.preventDefault)   
				 e.preventDefault();   
			 //IE中阻止函数器默认动作的方式   
			 else  
				 window.event.returnValue = false;   
			 return false;   
		 }   
	  }