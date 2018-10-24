//Business Logic
var translation = function(input) {
var result = "";
var newArray = input.split(" ");
var resultArray = [];

  for (index=0; index < newArray.length ; index++) {
    if (("AEIOUaeiou").includes(newArray[index].charAt(0))) {
      resultArray.push(newArray[index] + "way");
    } else if (("qQ").includes(newArray[index].charAt(0)) && ("uU").includes(newArray[index].charAt(1))) {

      resultArray.push((newArray[index].slice(2)) + (newArray[index].slice(0,2) + "ay"));
    } else {

      var count = 1;

      while (("bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ").includes(newArray[index].charAt(count)))
      {
        count++;
      }

      var newWord = newArray[index].slice(count) + newArray[index].slice(0,count) + "ay";
      resultArray.push(newWord);
    }
  };
  return result = resultArray.join(' ');
};

//   var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
//
//   var words = input.split(" ");
//   console.log(words);
//   // var split = words.split('');
//   // var firstLetterVowel = (vowels.includes(split[0]))
//   var consonants =[];
//   var resultStr ="";
//   // var consonants = (vowels.includes(split[]))
//   // debugger;
//   for (var index=0 ; index < words.length ; index++) {
//     var split = words[index].split('');
//     if (vowels.includes(split[0]) == true) {
//       resultStr += words[index] + "way" +" ";
//       continue;
//     } else {
//
//       for (x = 0; x < split.length; x++) {
//
//         if (("q,Q").includes(split[0]) && ("u,U").includes(split[1])){
//         resultStr += (split.slice(2).concat("quay").join(""));
//
//       } else if(vowels.includes(split[x]) === false) {
//           consonants.push(split[x]);
//
//       } else {
//         resultStr += ((split.slice(x).concat(consonants)).join("") + "ay");
//         break;
//       }
//     }
//   };
//   return resultStr;
// };
// };
// User Interface Logic
//
$(document).ready(function() {
  $(".pigLatinForm").submit(function(event) {
    event.preventDefault();
    var input = $("#pigLatinField").val();
    var result = translation(input);

    $("#result").text(result);


  });
});
