document.write(require("html-loader!./index.html"));



var input = document.getElementById("input");
var select = document.getElementById("select");
var open = document.getElementById("open");
var close = document.getElementById("close");
var getOption = document.getElementById("getOption");



if (window.document.createEvent) { // All
    var evt = window.document.createEvent("MouseEvents");
    evt.initMouseEvent("mousedown", false, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    select.dispatchEvent(evt);
  } else if (el.fireEvent) { // IE
    select.fireEvent("onmousedown");
  }

input.addEventListener("click", function () {
    /*console.log(select);
    select.focus();
    select.click();
    

    var event = document.createEvent('MouseEvents');
    event.initMouseEvent('mouseup', true, true, window);
    select.dispatchEvent(event);
    

    select.setAttribute("size", select.children.length);
    select.focus();*/
});

select.addEventListener("click", function (event) {
    //event.preventDefault();
    console.log("select click");
});
select.addEventListener("mousedown", function (event) {
    //event.preventDefault();
    console.log("select mousedown");
});


open.addEventListener("mousedown", function (event) {
    select.style.display = "block";
    console.log(select.children)
    select.setAttribute("size", howManyOptions(select));
    // select.setAttribute("size", select.children.length);
    setTimeout(function () {
        select.focus();
    }, 0);


});
close.addEventListener("mousedown", function (event) {
    //event.preventDefault();
    select.style.display = "none";
    select.setAttribute("size", 1);
    //select.focus();
});

getOption.addEventListener("mousedown", function (event) {
    console.log(select.options[ select.selectedIndex ].getAttribute("data-group"));
});

function howManyOptions (select) {
    
    var howMany = 0;

    for (var i = 0; i < select.children.length; i ++) {
        
        if (select.children[i].tagName === "OPTGROUP") {
            howMany += select.children[i].children.length + 1; // plus the group lable itself

        } else if (select.children[i].tagName === "OPTION") {
            howMany += select.children[i].length;
        }

    }

    return howMany;

}