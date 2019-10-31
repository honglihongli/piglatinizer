$( "document" ).ready(function() {
$("#button").click(function() {
 var go = $(".input").val();
 for(var vowel = 0; vowel < go.length; vowel++) {
    var firstvowel = go.charAt(vowel);
    if (["a","A","e","E","i","I","o","O","u","U"].includes(firstvowel)) {
      break;
       }
     }
    var word = go.slice(vowel);
    var secondword = go.slice(0,vowel);
    var final = word + secondword + "ay";
    console.log(final);
});
});