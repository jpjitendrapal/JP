var JP = JP || {};

JP.main = (function(){

    
    return {};
})();


JP.chat = (function(){
    var config = {
        timer: 3000,
        timerId: 0
    }
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
        $(".zopim").hide(); 
    }
})();