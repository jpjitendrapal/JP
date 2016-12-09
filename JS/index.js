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
        $zopim.livechat.window.setColor('#FFCC00');
        $(".zopim").on("touchstart", function(){ 
            console.log("Touch start"); 
            config.timerId = setTimeout(function(){ 
                $(".zopim").hide(); 
            }, config.timer); 
        });

        $(".zopim").on("touchend", function(){ 
            console.log("Touch end");
            clearTimeout(config.timerId);
        });

    });
})();