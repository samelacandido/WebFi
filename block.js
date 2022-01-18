window.onload = function(){
	var blk = document.getElementById('blockKeyword');
	blk.onclick = function(){
		var keyword = document.getElementById('keyword').value;
		//alert(keyword);
		chrome.storage.sync.set({'keyword':keyword},function(){
			alert('Keyword saved');
			console.log(keyword);
		});
	};
	document.getElementById('showKeyword').onclick = function(){
		//var keyword = document.getElementById('keyword').value;
		//alert(keyword);
		chrome.storage.sync.get('keyword',function(data){
			alert(data.keyword);
			console.log(data.keyword);
		});
	};
	document.getElementById('clearKeyword').onclick = function(){
		chrome.storage.sync.clear(function() {
		var error = chrome.runtime.lastError;
		if (error) {
			console.error(error);
		}
		else{
			alert("deleted");
		}
		// do something more
		});
	}
}