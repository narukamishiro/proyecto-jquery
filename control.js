//key=14e7662a0b8e44ce914bc97ca4c7923a
$(document).ready(init);
function init(){
	$('#btn').click=search();
}
function addcard(x,dat){
	var id="crd"+x;
	$('#rel').append('<div id="'+id+'"></div>');
	$('#'+id).append('<p class="nmb">'+dat[x][0]+'</p>');
	$('#'+id).append('<p class="ccn">'+dat[x][1]+'</p>');
	$('#'+id).append('<textarea class="lrs">'+dat[x][2]+'</textarea>');
}
function search(){
	$('#rel div').remove;
	var nm=$('#txt').text();
	nm.replace(" ","%20");
	var rel=$.ajax({url:"https://api.hillbillysoftware.com/Music/Lyrics/ByName/14e7662a0b8e44ce914bc97ca4c7923a/"+nm,error: function(xhr){alert("error "+xhr.status)}});
	var dt=rdat(rel);
	
}
function rdat(rel){
	var dat=[];
	for(y=0;y<=rel.length;y++){
		dat.push(rel["Artist"]);
		dat.push(rel["Song"]);
		dat.push(rel["Lyrics"]);
	}
	return dat;
}
function infscroll(dat){
	var x;
	
	$(document).scroll(function(){
		var distanceFromBottom = Math.floor($(document).height() - $(document).scrollTop() - $(window).height());
		if(distanceFromBottom < 10000) {
			x++;
			add10(dat,x);
		}
	});
}

function add10(dat,x){
	var max=min+9;
	var min=(x*10)-1;
	for(y=min;y<=max;y++){
		addcard(y,dat);
	}
}
