
//console.log("chrome extension log test");
/*
$(function(){
	$('#keyword').keyup(function(){
		$('#greet').text('hello ' + $('#keyword').val());
	})
})
*/

//BLOCK WORDS
findString = function findText(text) {
  if(window.find(text)){
    document.documentElement.innerHTML = '';
    document.documentElement.innerHTML = 'This site is blocked because it contains specific information related to the keyword you blocked.';
    document.documentElement.scrollTop = 0;
  };
}

chrome.storage.sync.get('keyword',function(data){
	//alert(data.keyword);
	//keyword = data.keyword;
	findString(data.keyword);
});
//findString(""+keyword);
