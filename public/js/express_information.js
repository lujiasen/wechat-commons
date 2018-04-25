const params = getParams(window.location.href);
$(function(){
	  mui.showLoading("正在加载..","div");
	getExpressInformation(params.expressNo,params.userId,params.companyCode);
})
const getExpressInformation = (expressNo,userId,companyCode) => {
	$.ajax({
		type:'post',
		url:EXPRESS_INFORMATION,
		data:{"expressNo":expressNo,"userId":userId,"companyCode":companyCode},
		success:function(data){
			if(data.code == "0000"){
				if(data.State != "0"){
					$("#expressNo").text(expressNo);
//					$("#company").text(companyCode);
					console.log(data.data.Traces);
					let list = data.data.Traces.reverse();
					content = "";
					$("#list").html('');
					for(var i = 0;i < list.length;i++){
						if(i == 0){
							content = '<li class="first">';
						}else{
							content = '<li>';
						}
						content += '<p>'+list[i].AcceptTime+'</p>';
						content += '<p>'+list[i].AcceptStation+'</p>';
						content += '<span class="before"></span><span class="after"></span>';
						if(i == 0){
							content += '<i class="mh-icon mh-icon-new"></i>';
						}
						content += '</li>';
						$("#list").append(content);
					}
				}
			}
			mui.hideLoading();//隐藏后的回调函数
		}
	})
}