(function () {
    function getText(name) {
        var textVal = "";
        if (name = (new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(window.location.search)) {
            textVal = decodeURIComponent(name[1]).split("+").join(" ");
        }
        return textVal;
    }

    var container = document.getElementById("wish-text");
    container.innerText = getText("name") || "";
})();