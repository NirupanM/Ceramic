

$(document).ready(function() {

'use strict';

// zoom in image


// $('.white-panel').click(function(){


// });


    // window.sessionStorage["fieldval"] = field.value;


if(window.sessionStorage["clickedFlag"]){

console.log(window.sessionStorage["itemscart"]);
    var cartArray = window.sessionStorage["itemscart"];
    var SubTotal = 0;
    var Shipping = 8;
    var Total = 0;
    var Index =0;
    var splitString = cartArray.split(",");
    console.log(splitString);
    cartArray = splitString;
    //for (var i = 0; i < cartArray.length; i++) {
      for( var i in cartArray){
      console.log(cartArray[i]+":"+i);  

    //console.log(cartArray[i]+":"+i);
    if(cartArray[i]=="1")
    {
        // if(i==0){
        // Index =  i+1;
        // }
        // else{
        //  Index =  i-1;   
        // }
        Index = Index + 1;
    var table = $('table[name="checkout"]');
    var prodInd = "<strong class='checkout-font-family'>"+Index+".</strong>";
    var prodImg = "<img src='../ceramicphotos/pic1.jpg' class='checkout-img' />";
    var prdTitle = "<strong class='checkout-font-family'>Product #1</strong>";
    var prdQty = "<strong class='checkout-font-family'>1</strong>";
    var prdPrice = "<strong class='checkout-font-family'>$25</strong>";
    var prdTotalPrice = "<strong class='checkout-font-family'>$25</strong>";
    var prdRemove = "<button type='button' class='btn btn-danger'><span class='glyphicon glyphicon-remove'></span></button></td>'";
    newRow(table,[prodInd,prodImg,prdTitle,prdQty,prdPrice,prdTotalPrice,prdRemove]);
    SubTotal = SubTotal + 25;
    }
    if(cartArray[i]=="2")
    {
        // if(i==0){
        // Index =  i+1;
        // }
        // else{
        //  Index =  i-1;   
        // }
        Index = Index + 1;
    var table = $('table[name="checkout"]');
    var prodInd = "<strong class='checkout-font-family'>"+Index+".</strong>";
    var prodImg = "<img src='../ceramicphotos/pic2.jpg' class='checkout-img' />";
    var prdTitle = "<strong class='checkout-font-family'>Product #2</strong>";
    var prdQty = "<strong class='checkout-font-family'>1</strong>";
    var prdPrice = "<strong class='checkout-font-family'>$25</strong>";
    var prdTotalPrice = "<strong class='checkout-font-family'>$25</strong>";
    var prdRemove = "<button type='button' class='btn btn-danger'><span class='glyphicon glyphicon-remove'></span></button></td>'";
    newRow(table,[prodInd,prodImg,prdTitle,prdQty,prdPrice,prdTotalPrice,prdRemove]);
    SubTotal = SubTotal + 25;
    }
        if(cartArray[i]=="3")
    {
        // if(i==0){
        // Index =  i+1;
        // }
        // else{
        //  Index =  i-1;   
        // }
        Index = Index + 1;
    var table = $('table[name="checkout"]');
    var prodInd = "<strong class='checkout-font-family'>"+Index+".</strong>";
    var prodImg = "<img src='../ceramicphotos/pic3.jpg' class='checkout-img' />";
    var prdTitle = "<strong class='checkout-font-family'>Product #3</strong>";
    var prdQty = "<strong class='checkout-font-family'>1</strong>";
    var prdPrice = "<strong class='checkout-font-family'>$25</strong>";
    var prdTotalPrice = "<strong class='checkout-font-family'>$25</strong>";
    var prdRemove = "<button type='button' class='btn btn-danger'><span class='glyphicon glyphicon-remove'></span></button></td>'";
    newRow(table,[prodInd,prodImg,prdTitle,prdQty,prdPrice,prdTotalPrice,prdRemove]);
    SubTotal = SubTotal + 25;
    }
        if(cartArray[i]=="4")
    {
        // if(i==0){
        // Index =  i+1;
        // }
        // else{
        //  Index =  i-1;   
        // }
        Index = Index + 1;
    var prodInd = "<strong class='checkout-font-family'>"+Index+".</strong>";
    var prodImg = "<img src='../ceramicphotos/pic4.jpg' class='checkout-img' />";
    var prdTitle = "<strong class='checkout-font-family'>Product #4</strong>";
    var prdQty = "<strong class='checkout-font-family'>1</strong>";
    var prdPrice = "<strong class='checkout-font-family'>$25</strong>";
    var prdTotalPrice = "<strong class='checkout-font-family'>$25</strong>";
    var prdRemove = "<button type='button' class='btn btn-danger'><span class='glyphicon glyphicon-remove'></span></button></td>'";
    newRow(table,[prodInd,prodImg,prdTitle,prdQty,prdPrice,prdTotalPrice,prdRemove]);
    SubTotal = SubTotal + 25;
    }
        if(cartArray[i]=="5")
    {
        // if(i==0){
        // Index =  i+1;
        // }
        // else{
        //  Index =  i-1;   
        // }
        Index = Index + 1;
    var table = $('table[name="checkout"]');
    var prodInd = "<strong class='checkout-font-family'>"+Index+".</strong>";
    var prodImg = "<img src='../ceramicphotos/pic5.jpg' class='checkout-img' />";
    var prdTitle = "<strong class='checkout-font-family'>Product #5</strong>";
    var prdQty = "<strong class='checkout-font-family'>1</strong>";
    var prdPrice = "<strong class='checkout-font-family'>$25</strong>";
    var prdTotalPrice = "<strong class='checkout-font-family'>$25</strong>";
    var prdRemove = "<button type='button' class='btn btn-danger'><span class='glyphicon glyphicon-remove'></span></button></td>'";
    newRow(table,[prodInd,prodImg,prdTitle,prdQty,prdPrice,prdTotalPrice,prdRemove]);
    SubTotal = SubTotal + 25;
    }

    if(cartArray[i]=="6")
    {
        // if(i==0){
        // Index =  i+1;
        // }
        // else{
        //  Index =  i-1;   
        // }
        Index = Index + 1;
    var table = $('table[name="checkout"]');
    var prodInd = "<strong class='checkout-font-family'>"+Index+".</strong>";
    var prodImg = "<img src='../ceramicphotos/pic6.jpg' class='checkout-img' />";
    var prdTitle = "<strong class='checkout-font-family'>Product #6</strong>";
    var prdQty = "<strong class='checkout-font-family'>1</strong>";
    var prdPrice = "<strong class='checkout-font-family'>$25</strong>";
    var prdTotalPrice = "<strong class='checkout-font-family'>$25</strong>";
    var prdRemove = "<button type='button' class='btn btn-danger'><span class='glyphicon glyphicon-remove'></span></button></td>'";
    newRow(table,[prodInd,prodImg,prdTitle,prdQty,prdPrice,prdTotalPrice,prdRemove]);
    SubTotal = SubTotal + 25;
    }
    if(cartArray[i]=="7")
    {
        // if(i==0){
        // Index =  i+1;
        // }
        // else{
        //  Index =  i-1;   
        // }
        Index = Index + 1;
    var table = $('table[name="checkout"]');
    var prodInd = "<strong class='checkout-font-family'>"+Index+".</strong>";
    var prodImg = "<img src='../ceramicphotos/pic7.jpg' class='checkout-img' />";
    var prdTitle = "<strong class='checkout-font-family'>Product #7</strong>";
    var prdQty = "<strong class='checkout-font-family'>1</strong>";
    var prdPrice = "<strong class='checkout-font-family'>$25</strong>";
    var prdTotalPrice = "<strong class='checkout-font-family'>$25</strong>";
    var prdRemove = "<button type='button' class='btn btn-danger'><span class='glyphicon glyphicon-remove'></span></button></td>'";
    newRow(table,[prodInd,prodImg,prdTitle,prdQty,prdPrice,prdTotalPrice,prdRemove]);
    SubTotal = SubTotal + 25;
    }
    if(cartArray[i]=="8")
    {
        // if(i==0){
        // Index =  i+1;
        // }
        // else{
        //  Index =  i-1;   
        // }
        Index = Index + 1;
    var table = $('table[name="checkout"]');
    var prodInd = "<strong class='checkout-font-family'>"+Index+".</strong>";
    var prodImg = "<img src='../ceramicphotos/pic8.jpg' class='checkout-img' />";
    var prdTitle = "<strong class='checkout-font-family'>Product #8</strong>";
    var prdQty = "<strong class='checkout-font-family'>1</strong>";
    var prdPrice = "<strong class='checkout-font-family'>$25</strong>";
    var prdTotalPrice = "<strong class='checkout-font-family'>$25</strong>";
    var prdRemove = "<button type='button' class='btn btn-danger'><span class='glyphicon glyphicon-remove'></span></button></td>'";
    newRow(table,[prodInd,prodImg,prdTitle,prdQty,prdPrice,prdTotalPrice,prdRemove]);
    SubTotal = SubTotal + 25;
    }
    if(cartArray[i]=="9")
    {
        // if(i==0){
        // Index =  i+1;
        // }
        // else{
        //  Index =  i-1;   
        // }
        Index = Index + 1;
    var table = $('table[name="checkout"]');
    var prodInd = "<strong class='checkout-font-family'>"+Index+".</strong>";
    var prodImg = "<img src='../ceramicphotos/pic9.jpg' class='checkout-img' />";
    var prdTitle = "<strong class='checkout-font-family'>Product #9</strong>";
    var prdQty = "<strong class='checkout-font-family'>1</strong>";
    var prdPrice = "<strong class='checkout-font-family'>$25</strong>";
    var prdTotalPrice = "<strong class='checkout-font-family'>$25</strong>";
    var prdRemove = "<button type='button' class='btn btn-danger'><span class='glyphicon glyphicon-remove'></span></button></td>'";
    newRow(table,[prodInd,prodImg,prdTitle,prdQty,prdPrice,prdTotalPrice,prdRemove]);
    SubTotal = SubTotal + 25;
    }
    if(cartArray[i]=="10")
    {
        // if(i==0){
        // Index =  i+1;
        // }
        // else{
        //  Index =  i-1;   
        // }
        Index = Index + 1;
    var table = $('table[name="checkout"]');
    var prodInd = "<strong class='checkout-font-family'>"+Index+".</strong>";
    var prodImg = "<img src='../ceramicphotos/pic10.jpg' class='checkout-img' />";
    var prdTitle = "<strong class='checkout-font-family'>Product #10</strong>";
    var prdQty = "<strong class='checkout-font-family'>1</strong>";
    var prdPrice = "<strong class='checkout-font-family'>$25</strong>";
    var prdTotalPrice = "<strong class='checkout-font-family'>$25</strong>";
    var prdRemove = "<button type='button' class='btn btn-danger'><span class='glyphicon glyphicon-remove'></span></button></td>'";
    newRow(table,[prodInd,prodImg,prdTitle,prdQty,prdPrice,prdTotalPrice,prdRemove]);
    SubTotal = SubTotal + 25;
    }
    if(cartArray[i]=="11")
    {
        // if(i==0){
        // Index =  i+1;
        // }
        // else{
        //  Index =  i-1;   
        // }
        Index = Index + 1;
    var table = $('table[name="checkout"]');
    var prodInd = "<strong class='checkout-font-family'>"+Index+".</strong>";
    var prodImg = "<img src='../ceramicphotos/pic11.jpg' class='checkout-img' />";
    var prdTitle = "<strong class='checkout-font-family'>Product #11</strong>";
    var prdQty = "<strong class='checkout-font-family'>1</strong>";
    var prdPrice = "<strong class='checkout-font-family'>$25</strong>";
    var prdTotalPrice = "<strong class='checkout-font-family'>$25</strong>";
    var prdRemove = "<button type='button' class='btn btn-danger'><span class='glyphicon glyphicon-remove'></span></button></td>'";
    newRow(table,[prodInd,prodImg,prdTitle,prdQty,prdPrice,prdTotalPrice,prdRemove]);
    SubTotal = SubTotal + 25;
    }
    if(cartArray[i]=="12")
    {
        // if(i==0){
        // Index =  i+1;
        // }
        // else{
        //  Index =  i-1;   
        // }
        Index = Index + 1;
    var table = $('table[name="checkout"]');
    var prodInd = "<strong class='checkout-font-family'>"+Index+".</strong>";
    var prodImg = "<img src='../ceramicphotos/pic12.jpg' class='checkout-img' />";
    var prdTitle = "<strong class='checkout-font-family'>Product #12</strong>";
    var prdQty = "<strong class='checkout-font-family'>1</strong>";
    var prdPrice = "<strong class='checkout-font-family'>$25</strong>";
    var prdTotalPrice = "<strong class='checkout-font-family'>$25</strong>";
    var prdRemove = "<button type='button' class='btn btn-danger'><span class='glyphicon glyphicon-remove'></span></button></td>'";
    newRow(table,[prodInd,prodImg,prdTitle,prdQty,prdPrice,prdTotalPrice,prdRemove]);
    SubTotal = SubTotal + 25;
    }
    if(cartArray[i]=="13")
    {
        // if(i==0){
        // Index =  i+1;
        // }
        // else{
        //  Index =  i-1;   
        // }
        Index = Index + 1;
    var table = $('table[name="checkout"]');
    var prodInd = "<strong class='checkout-font-family'>"+Index+".</strong>";
    var prodImg = "<img src='../ceramicphotos/pic13.jpg' class='checkout-img' />";
    var prdTitle = "<strong class='checkout-font-family'>Product #13</strong>";
    var prdQty = "<strong class='checkout-font-family'>1</strong>";
    var prdPrice = "<strong class='checkout-font-family'>$25</strong>";
    var prdTotalPrice = "<strong class='checkout-font-family'>$25</strong>";
    var prdRemove = "<button type='button' class='btn btn-danger'><span class='glyphicon glyphicon-remove'></span></button></td>'";
    newRow(table,[prodInd,prodImg,prdTitle,prdQty,prdPrice,prdTotalPrice,prdRemove]);
    SubTotal = SubTotal + 25;
    }
    }

    var table = $('table[name="checkout"]');
        var prodInd = "";
    var prodImg = "";
    var prdTitle = "";
    var prdQty = "";
    var prdPrice = "<h4>SubTotal</h4>";
    var prdTotalPrice = "<h4>$"+SubTotal+"</h4>";
        var prdRemove = "";

    newRow(table,[prodInd,prodImg,prdTitle,prdQty,prdPrice,prdTotalPrice,prdRemove]);

        var table = $('table[name="checkout"]');
        var prodInd = "";
    var prodImg = "";
    var prdTitle = "";
    var prdQty = "";
    var prdPrice = "<h4>Shipping</h4>";
    var prdTotalPrice = "<h4>$"+Shipping+"</h4>";
        var prdRemove = "";

    newRow(table,[prodInd,prodImg,prdTitle,prdQty,prdPrice,prdTotalPrice,prdRemove]);

    Total = SubTotal + Shipping;
var table = $('table[name="checkout"]');
        var prodInd = "";
    var prodImg = "";
    var prdTitle = "";
    var prdQty = "";
    var prdPrice = "<h4>Total</h4>";
    var prdTotalPrice = "<h4>$"+Total+"</h4>";
    var prdRemove = "";

    newRow(table,[prodInd,prodImg,prdTitle,prdQty,prdPrice,prdTotalPrice,prdRemove]);





}



if(!window.sessionStorage["cartflag"]){
var count = 0;
var items_cart = [];
window.sessionStorage["cartflag"]=true;
window.sessionStorage["count"] = count;
window.sessionStorage["itemscart"] = items_cart;
console.log(window.sessionStorage["itemscart"].length);
//window.sessionStorage["clickedFlag"]=0;
}


$(".cart-section").click(function(){


if(window.sessionStorage["itemscart"].length>0){
    var url = "file:///C:/github/ceramic/checkout/checkout.html";
window.location = url;
window.location.replace (url);
    // history.pushState({}, "", "file:///C:/github/ceramic/");
    //     history.pushState('checkout', null, 'checkout/checkout.html');
    // history.replaceState(null, null, '/checkout.html');
    window.sessionStorage["clickedFlag"]=true;
    // window.open('checkout/checkout.html', '_blank');
    
    // console.log(window.sessionStorage["itemscart"]);
    // var cartArray = window.sessionStorage["itemscart"];
    // for (var i = 0; i < cartArray.length; i++) {
    // console.log(cartArray[i]);
    // if(cartArray[i]=="1")
    // {
    // var table = $('table[name="checkout"]');
    // var prodInd = "<div>1.</div>";
    // var prodImg = "<img src='../ceramicphotos/pic1.jpg' class='checkout-img' />";
    // var prdTitle = "<div>Product #1</div>";
    // var prdQty = "<div>1</div>";
    // var prdPrice = "<strong>$25</strong>";
    // var prdTotalPrice = "<strong>$25</strong>";
    // var prdRemove = "<button type='button' class='btn btn-danger'><span class='glyphicon glyphicon-remove'></span></button></td>'";
    // newRow(table,[prodInd,prodImg,prdTitle,prdQty,prdPrice,prdTotalPrice,prdRemove]);
    // }

    
    // }
}


});

// var table = $('table[name="checkout"]');

//     var prodInd = "<div>1.</div>";
//     var prodImg = "<img src='../ceramicphotos/pic1.jpg' class='checkout-img' />";
//     var prdTitle = "<div>Product #1</div>";
//     var prdQty = "<div>1</div>";
//     var prdPrice = "<strong>$25</strong>";
//     var prdTotalPrice = "<strong>$25</strong>";
//     var prdRemove = "<button type='button' class='btn btn-danger'><span class='glyphicon glyphicon-remove'></span></button></td>'";

//     newRow(table,[prodInd,prodImg,prdTitle,prdQty,prdPrice,prdTotalPrice,prdRemove]);

//     var table = $('table[name="checkout"]');
//         var prodInd = "<div>2.</div>";
//     var prodImg = "<img src='../ceramicphotos/pic2.jpg' class='checkout-img' />";
//     var prdTitle = "<div>Product #2</div>";
//     var prdQty = "<div>1</div>";
//     var prdPrice = "<strong>$25</strong>";
//     var prdTotalPrice = "<strong>$25</strong>";
//         var prdRemove = "<button type='button' class='btn btn-danger'><span class='glyphicon glyphicon-remove'></span> </button></td>'";

//     newRow(table,[prodInd,prodImg,prdTitle,prdQty,prdPrice,prdTotalPrice,prdRemove]);


//     var table = $('table[name="checkout"]');
//         var prodInd = "";
//     var prodImg = "";
//     var prdTitle = "";
//     var prdQty = "";
//     var prdPrice = "<h4>SubTotal</h4>";
//     var prdTotalPrice = "<h4>$50</h4>";
//         var prdRemove = "";

//     newRow(table,[prodInd,prodImg,prdTitle,prdQty,prdPrice,prdTotalPrice,prdRemove]);

//     var table = $('table[name="checkout"]');
//         var prodInd = "";
//     var prodImg = "";
//     var prdTitle = "";
//     var prdQty = "";
//     var prdPrice = "<h4>Shipping</h4>";
//     var prdTotalPrice = "<h4>$6.75</h4>";
//         var prdRemove = "";

//     newRow(table,[prodInd,prodImg,prdTitle,prdQty,prdPrice,prdTotalPrice,prdRemove]);

// var table = $('table[name="checkout"]');
//         var prodInd = "";
//     var prodImg = "";
//     var prdTitle = "";
//     var prdQty = "";
//     var prdPrice = "<h4>Total</h4>";
//     var prdTotalPrice = "<h4>$56.75</h4>";
//     var prdRemove = "";

//     newRow(table,[prodInd,prodImg,prdTitle,prdQty,prdPrice,prdTotalPrice,prdRemove]);




//alert("t");



//if(document.getElementById("caption-count")){
document.getElementById("caption-count").innerHTML = window.sessionStorage["count"];
//}


$("#prod-1").click(function(){
    $('#quick_view_1').modal('show');
});


$("#prod-2").click(function () {

    $('#quick_view_2').modal('show');
});
$("#prod-3").click( function () {

    $('#quick_view_3').modal('show');
});
$("#prod-4").click( function () {

    $('#quick_view_4').modal('show');
});
$("#prod-5").click( function () {

    $('#quick_view_5').modal('show');
});
$("#prod-6").click( function () {

    $('#quick_view_6').modal('show');
});
$("#prod-7").click( function () {

    $('#quick_view_7').modal('show');
});
$("#prod-8").click( function () {

    $('#quick_view_8').modal('show');
});
$("#prod-9").click( function () {

    $('#quick_view_9').modal('show');
});
$("#prod-10").click( function () {

    $('#quick_view_10').modal('show');
});
$("#prod-11").click( function () {

    $('#quick_view_11').modal('show');
});
$("#prod-12").click( function () {

    $('#quick_view_12').modal('show');
});
$("#prod-13").click( function () {

    $('#quick_view_13').modal('show');
});



$("#cart-1").click( function () {

    $('#confirm_cart_1').modal('show');
});
$("#cart-2").click( function () {

    $('#confirm_cart_2').modal('show');
});
$("#cart-3").click( function () {

    $('#confirm_cart_3').modal('show');
});
$("#cart-4").click( function () {

    $('#confirm_cart_4').modal('show');
});
$("#cart-5").click( function () {

    $('#confirm_cart_5').modal('show');
});
$("#cart-6").click( function () {

    $('#confirm_cart_6').modal('show');
});
$("#cart-7").click( function () {

    $('#confirm_cart_7').modal('show');
});
$("#cart-8").click( function () {

    $('#confirm_cart_8').modal('show');
});
$("#cart-9").click( function () {

    $('#confirm_cart_9').modal('show');
});
$("#cart-10").click( function () {

    $('#confirm_cart_10').modal('show');
});
$("#cart-11").click( function () {

    $('#confirm_cart_11').modal('show');
});
$("#cart-12").click( function () {

    $('#confirm_cart_12').modal('show');
});
$("#cart-13").click( function () {

    $('#confirm_cart_13').modal('show');
});


$("#cart-1-ok").click( function () {

count = count + 1;
window.sessionStorage["count"] = count;
document.getElementById("caption-count").innerHTML = count;
items_cart.push("1");
console.log(items_cart);
window.sessionStorage["itemscart"] = items_cart;

});

$("#cart-2-ok").click( function () {

count = count + 1;
window.sessionStorage["count"] = count;
document.getElementById("caption-count").innerHTML = count;
items_cart.push("2");
console.log(items_cart);
window.sessionStorage["itemscart"] = items_cart;
});

$("#cart-3-ok").click( function () {

count = count + 1;
window.sessionStorage["count"] = count;
document.getElementById("caption-count").innerHTML = count;
items_cart.push("3");
console.log(items_cart);
window.sessionStorage["itemscart"] = items_cart;
});

$("#cart-4-ok").click( function () {

count = count + 1;
window.sessionStorage["count"] = count;
document.getElementById("caption-count").innerHTML = count;
items_cart.push("4");
console.log(items_cart);
window.sessionStorage["itemscart"] = items_cart;
});

$("#cart-5-ok").click( function () {

count = count + 1;
window.sessionStorage["count"] = count;
document.getElementById("caption-count").innerHTML = count;
items_cart.push("5");
console.log(items_cart);
window.sessionStorage["itemscart"] = items_cart;
});

$("#cart-6-ok").click( function () {

count = count + 1;
window.sessionStorage["count"] = count;
document.getElementById("caption-count").innerHTML = count;
items_cart.push("6");
console.log(items_cart);
window.sessionStorage["itemscart"] = items_cart;
});

$("#cart-7-ok").click( function () {

count = count + 1;
window.sessionStorage["count"] = count;
document.getElementById("caption-count").innerHTML = count;
items_cart.push("7");
console.log(items_cart);
window.sessionStorage["itemscart"] = items_cart;
});

$("#cart-8-ok").click( function () {

count = count + 1;
window.sessionStorage["count"] = count;
document.getElementById("caption-count").innerHTML = count;
items_cart.push("8");
console.log(items_cart);
window.sessionStorage["itemscart"] = items_cart;
});

$("#cart-9-ok").click( function () {

count = count + 1;
window.sessionStorage["count"] = count;
document.getElementById("caption-count").innerHTML = count;
items_cart.push("9");
console.log(items_cart);
window.sessionStorage["itemscart"] = items_cart;
});
$("#cart-10-ok").click( function () {

count = count + 1;
window.sessionStorage["count"] = count;
document.getElementById("caption-count").innerHTML = count;
items_cart.push("10");
console.log(items_cart);
window.sessionStorage["itemscart"] = items_cart;
});
$("#cart-11-ok").click( function () {

count = count + 1;
window.sessionStorage["count"] = count;
document.getElementById("caption-count").innerHTML = count;
items_cart.push("11");
console.log(items_cart);
window.sessionStorage["itemscart"] = items_cart;
});
$("#cart-12-ok").click( function () {

count = count + 1;
window.sessionStorage["count"] = count;
document.getElementById("caption-count").innerHTML = count;
items_cart.push("12");
console.log(items_cart);
window.sessionStorage["itemscart"] = items_cart;
});
$("#cart-13-ok").click( function () {

count = count + 1;
window.sessionStorage["count"] = count;
document.getElementById("caption-count").innerHTML = count;
items_cart.push("13");
console.log(items_cart);
window.sessionStorage["itemscart"] = items_cart;
});



  // define variables
//   var items = document.querySelectorAll(".timeline li");

//   var pdfViewer = new wijmo.viewer.PdfViewer('#pdfViewer', {
//   serviceUrl: 'http://demo.grapecity.com/c1/aspnet/c1webapi/4.0.20172.105/api/pdf/',
//   filePath: 'PdfRoot/従業員別売上.pdf',
//   zoomMode: wijmo.viewer.ZoomMode.PageWidth,
//   thresholdWidth: 0
// });

// document.form.thresholdWidth.addEventListener('click', function (e) {
//   pdfViewer.thresholdWidth = e.target.checked ? 9999 : 0;
// });


  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);

$('#pinBoot').pinterest_grid({
no_columns: 4,
padding_x: 10,
padding_y: 10,
margin_bottom: 50,
single_column_breakpoint: 700
});
});


;(function ($, window, document, undefined) {
    var pluginName = 'pinterest_grid',
        defaults = {
            padding_x: 10,
            padding_y: 10,
            no_columns: 3,
            margin_bottom: 50,
            single_column_breakpoint: 700
        },
        columns,
        $article,
        article_width;

    function Plugin(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options) ;
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype.init = function () {
        var self = this,
            resize_finish;

        $(window).resize(function() {
            clearTimeout(resize_finish);
            resize_finish = setTimeout( function () {
                self.make_layout_change(self);
            }, 0);
        });

        self.make_layout_change(self);

        setTimeout(function() {
            $(window).resize();
        }, 500);
    };

    Plugin.prototype.calculate = function (single_column_mode) {
        var self = this,
            tallest = 0,
            row = 0,
            $container = $(this.element),
            container_width = $container.width();
            $article = $(this.element).children();

        if(single_column_mode === true) {
            article_width = $container.width() - self.options.padding_x;
        } else {
            article_width = ($container.width() - self.options.padding_x * self.options.no_columns) / self.options.no_columns;
        }

        $article.each(function() {
            $(this).css('width', article_width);
        });

        columns = self.options.no_columns;

        $article.each(function(index) {
            var current_column,
                left_out = 0,
                top = 0,
                $this = $(this),
                prevAll = $this.prevAll(),
                tallest = 0;

            if(single_column_mode === false) {
                current_column = (index % columns);
            } else {
                current_column = 0;
            }

            for(var t = 0; t < columns; t++) {
                $this.removeClass('c'+t);
            }

            if(index % columns === 0) {
                row++;
            }

            $this.addClass('c' + current_column);
            $this.addClass('r' + row);

            prevAll.each(function(index) {
                if($(this).hasClass('c' + current_column)) {
                    top += $(this).outerHeight() + self.options.padding_y;
                }
            });

            if(single_column_mode === true) {
                left_out = 0;
            } else {
                left_out = (index % columns) * (article_width + self.options.padding_x);
            }

            $this.css({
                'left': left_out,
                'top' : top
            });
        });

        this.tallest($container);
        $(window).resize();
    };

    Plugin.prototype.tallest = function (_container) {
        var column_heights = [],
            largest = 0;

        for(var z = 0; z < columns; z++) {
            var temp_height = 0;
            _container.find('.c'+z).each(function() {
                temp_height += $(this).outerHeight();
            });
            column_heights[z] = temp_height;
        }

        largest = Math.max.apply(Math, column_heights);
        _container.css('height', largest + (this.options.padding_y + this.options.margin_bottom));
    };

    Plugin.prototype.make_layout_change = function (_self) {
        if($(window).width() < _self.options.single_column_breakpoint) {
            _self.calculate(true);
        } else {
            _self.calculate(false);
        }
    };

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName,
                new Plugin(this, options));
            }
        });
    }

})(jQuery, window, document);

function newRow($table,cols){
    $row = $('<tr/>');
    for(i=0; i<cols.length; i++){
        $col = $('<td/>').append(cols[i]);
        $row.append($col);
    }
    $table.append($row);
}

function openCheckout(){
    window.open('checkout/checkout.html', '_blank');
}