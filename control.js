//http://www.omdbapi.com/?apikey=1f5301b5&t="+ (api key: 1f5301b5);
function search(ttl,pg){
	$(document html).css("overflow","hidden");
	var msn="http://www.omdbapi.com/?apikey=1f5301b5&s="+ttl+"&page="+pg;
		$.ajax({url: msn, success: function(result){
			mkCardMain(result);
			},error:function(){alert("no se ha podido encontrar lo que buscas")}	
		});
}
function searchDetails(id){
	$(document html).css("overflow","hidden");
	var msn="http://www.omdbapi.com/?apikey=1f5301b5&i="+id;
		$.ajax({url: msn, success: function(result){
			$("#resul").text(result.Title);
			alert("se ha encontrado  datos por id");
			},error:function(){alert("no se ha podido encontrar lo que buscas")}	
		});
}
function getu(){
	var t=$("#titulo").val();
	search(t);
	if(t.length<2){
		$("#titulo").css("backgroundColor","red");
	}
	else{
		$("#titulo").css("backgroundColor","white");
		t=t.replace(" ", "+");
		pg=1;
		search(t,pg);
	}
}
function mkCardMain(res){
	let card=$( "<div/>", {"mvid": res.imdbID});
	$("<img/>",{"src":res.Poster}).appendTo(card);
	$("<p/>",{"value":res.Title}).appendTo(card);
	card.appendTo("#resul");
	//card.click(searchDetails(this.attr("mvid"));
}
function endScroll(){
	let limit=100;
	let pos=$(window).scrollTop();
	let end=$(window).innerHeight;
	if(pos>(end-limit)){
		pg++;
		search(t,pg);	
	}
	$(document html).css("overflow","scroll");
}
$( window ).scroll(endScroll);
$("#btn").click(getu);