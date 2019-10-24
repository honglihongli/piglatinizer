$( "document" ).ready(function() {
$("#button").click(function() {
  var a = -1;
    var go = $(".input").val();
    var go2 = go.split(" ");
    for (var go3 = 0; go3 < go2.length; go3++) {
    for(var vowel = 0; vowel < go2[a+1].length; vowel++) {
    var firstvowel = go2[a+1].charAt(vowel);
    if (["a","A","e","E","i","I","o","O","u","U"].includes(firstvowel)) {
      var a = a+1;
      break;
       }
     }
    var word = go.slice(vowel);
    var secondword = go.slice(0,vowel);
    var final = word + secondword + "ay";
    console.log(final);
    }
    // var nextinput1 = go.indexOf("a");
    // console.log(nextinput1);
    // let one1 = go.slice(nextinput1);
    // let one2 = go.slice(0,nextinput1);
    // let two = one1+one2+"ay";
    // $(".output").text(two);
//  for(var vowel = 0; vowel < go.length; vowel++) {
//     var firstvowel = go.charAt(vowel);
//     if (["a","A","e","E","i","I","o","O","u","U"].includes(firstvowel)) {
//       break;
//        }
//      }
//     var word = go.slice(vowel);
//     var secondword = go.slice(0,vowel);
//     var final = word + secondword + "ay";
//     console.log(final);
});
});