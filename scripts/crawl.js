// load('pesome/scripts/crawl.js')

load('steal/rhino/rhino.js')

steal('steal/html/crawl', function(){
  steal.html.crawl("pesome/pesome.html","pesome/out")
});
