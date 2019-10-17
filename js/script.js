$( "document" ).ready(function() {
$("#button").click(function() {
    var go = $(".input").val();
    var nextinput1 = go.indexOf("a");
    let one1 = go.slice(nextinput1);
    let one2 = go.slice(0,one);
    let two = one1+one2+"ay";
alert(two);


    $(".output").text(two);
});
});