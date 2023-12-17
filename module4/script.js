(function () {

  var peopleNames = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
  for (var i = 0; i < peopleNames.length; i++) {
    var firstChar = peopleNames[i].charAt(0).toLowerCase();
  
    if (firstChar === 'j') {
      sayGoodbye(peopleNames[i]);
    }
    else {
      sayHello(peopleNames[i]);
    }
  }
  
  })();
  