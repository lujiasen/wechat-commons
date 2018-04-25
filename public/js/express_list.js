const params = getParams(window.location.href);
$(function(window){
	 //显示加载框
    mui.showLoading("正在加载..","div");
	getExpressList(params.userId);
})

const getExpressList = (userId) => {
	$.ajax({
		type:'post',
		url:EXPRESS_LIST,
		data:{"userId":userId},
		success:function(data){
			if(data.code == "0000"){
				var list = data.data;
				console.log(list);
				if(list.length <= 0){
					  alert("暂无数据");
				}else{
					$("#list").html('');
					
					for(var a of list){
						var count = "";
						console.log(a);
						count = "<li class='mui-table-view-cell' >";
						count += "<a class='mui-navigate-right' href='express_information.html?expressNo="+a.expressNo+"&userId="+userId+"&companyCode="+a.companyCode+"'>";
						count += a.company+"&nbsp;&nbsp&nbsp&nbsp"+a.expressNo;
						count += "</a>";
						count += "</li>"
						$("#list").append(count);
					}
				}
			}
		 	mui.hideLoading();//隐藏后的回调函数
		}
	})
}