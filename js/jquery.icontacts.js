(function (b) {
    b.iContacts = function (c, d, e) {
        var a = this;
        a.$el = b(c);
        a.el = c;
        a.$el.data("iContacts", a);
        a.init = function () {
            a.searchbox = d;
            a.$searchbox = b(d);
            a.options = b.extend( {
            }
            , b.iContacts.defaultOptions, e);
            a.$searchbox.keyup(function () {
                var c = a.$searchbox.val();
                c.length == 0 ? a.$el.find("li").show() : (a.$el.find("li").hide(), a.$el.find("> li > ul > li").filter(function () {
                    return RegExp(c, "i").test(b("a", this).text()) == true}
                ).show().parents("li").show());contactList.refresh();}
            )}
        ;
        a.init()}
    ;
    b.iContacts.defaultOptions = {
    }
    ;
    b.fn.iContacts = function (c, d) {
        return this.each(function () {
            new b.iContacts(this, c, d)}
        )}
}
)(jQuery);

/*
(function(b){b.iContacts=function(c,d,e){var a=this;a.$el=b(c);a.el=c;a.$el.data("iContacts",a);a.init=function(){a.searchbox=d;a.$searchbox=b(d);a.options=b.extend({},b.iContacts.defaultOptions,e);a.$searchbox.keyup(function(){var c=a.$searchbox.val();c.length==0?a.$el.find("li").show():(a.$el.find("li").hide(),a.$el.find("> li > ul > li").filter(function(){return RegExp(c,"i").test(b("a",this).text())==true}).show().parents("li").show())})};a.init()};b.iContacts.defaultOptions={};b.fn.iContacts=
function(c,d){return this.each(function(){new b.iContacts(this,c,d)})}})(jQuery);
*/