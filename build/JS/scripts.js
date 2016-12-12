window.$zopim||(function(d,s){var z=$zopim=function(c){z._.push(c)},$=z.s=
d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set.
_.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute("charset","utf-8");
$.src="https://v2.zopim.com/?4NHNULno4Hhh91weGPxtKutjTYMUjM2U";z.t=+new Date;$.
type="text/javascript";e.parentNode.insertBefore($,e)})(document,"script");



JP = JP || {};

JP.chat = (function(){
    
    $zopim(function() {
        var timerId;
        $("body").on("touchstart",".zopim", function(){ 
            console.log("Touch start"); 
            var that = this;
            timerId = setTimeout(function(){ 
                console.log("Closing the chat icon");
                showCloseIcon(that);
            }, 2500); 
        });

        $("body").on("touchend",".zopim", function(){ 
            console.log("Touch end");
            clearTimeout(timerId);
        });

    });

    function showCloseIcon(elem){
        var closeIcon = "<div class='chat-close-icon'><i class='fa fa-close'></i></div>";
        $("body").append(closeIcon);
         $("body").on("click", ".chat-close-icon", function(){
            $(".zopim, .chat-close-icon").hide(); 
        }); 
    }
})();
function Person(a,b){
    console.log("this is person function" + a + b);
}
var JP = JP || {};

JP.main = (function(){

    var a = {};
    a.key1 = 1;
    return {};
})();

