//js pesome/scripts/doc.js

load('steal/rhino/rhino.js');
steal("documentjs").then(function(){
	DocumentJS('pesome/pesome.html', {
		markdown : ['pesome']
	});
});