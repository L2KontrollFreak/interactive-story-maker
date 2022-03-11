var subjectObject ={
    "Front-end": {
        "HTML": ["Links", "Forms",],
        "CSS": ["Borders", "Margins", "Backgrounds", "Float"],
        "JavaScript": ["Variables", "Operators", "Functions", "Conditions"]
      },
      "Back-end": {
        "PHP": ["Variables", "Strings", "Arrays"],
        "SQL": ["SELECT", "UPDATE", "DELETE"]
      }
    }
window.onload = function(){
    var chapterSel = document.getElementById("Chapter");
    var incomeSel = document.getElementById("Income");
    var outcomeSel = document.getElementById("Outcome");
    for ( var x in subjectObject) {
        subjectSel.options[subjectSel.options.length] = new Option(x,x);
    }
}
chapterSel.onchange = function() {
    chapterSel.length = 1;
    incomeSel.length = 1;
    for (var y in subjectObject[this.value]) {
        incomeSel.options[incomeSel.options.length] = new Option(y,y);
    }
    }
incomeSel.onchange = function(){
    chapterSel.length =1;
    var z = subjectObject[subjectSel.value][this.value];
    for (var i = 0; i < z.length; i++) {
        chapterSel.options[chapterSel.options.length] = new Option(z[i],z[i]);
    }
    }
