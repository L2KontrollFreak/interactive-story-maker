var story = 0;//the story is undefined
var form = document.getElementById('MaxSteel');//elements with matching ids to spefic task
var submit = document.getElementById('continueButton');
var reset = document.getElementById('resetButton');
var answer = '';
var copyrights = document.createElement('p');
copyrights.innerHTML = "Copyright © 2019 by Darien and Lucas";
document.body.appendChild(copyrights);

//Good Side

story_tell = {
    // create a intro dialogue
    "start": {
        "dialogue": "You've arrived in Max Steel's world. Max McGraph is a young man who has recently relocated to a new town as a result of his mother's new position at DrazTech. Max begins his freshman year at Jolly Time High, and it is clear right away that he is not your typical adolescent. Max meets his uncle and learns the truth about his superhuman abilities. To prove he is a good hero to society, he must demonstrate his worth and responsibility. It's entirely up to you...",
        "answers": {
            "1_a": "Next page",
        }
    },
    // start of a new page
    "1_a": {
        "dialogue": "Max is relocating to a new town and takes a look at his new house.",
        "answers": {
            // decision
            "Yes go help out your mom": "Puts stuff away and helps his mom put stuff away.",
            "Stand there and do nothing": "Neutral: Doesn't finish cleaning up",
            "No doesn't help his mother": "No: Doesn't put stuff away in his room and be's lazy.",
        }
    },
 "Stand there and do nothing":{
"dialogue": "Max just doesn't want to do anything.",
"answers": {

    "Yes go help out your mom": {
        "dialogue": "Max help his mom to put stuff away.",
        "answers": {
            "should Max relax before school starts": "Max relaxes and goes to school later becuse he was tired from packing.",
            " ShouldMax goes to school because he didn't want to relax": "Max goes to school and meet new friends on the way there.",

        }
    },
   

    }
    "2_a": {
        "dialogue": "Max notices a victim of bullying.<br> Kirby is a guy he meets.",
        "answers": {
            "a": "Yes: stop the bullying and help the kid out <br> Max walks him from school to his home.",
            "b": "No: leaves it's alone and later regrets <br> He checks the guy to see if he is okay but later sees he is bruised <br> Ask the guy is okay and what is his name?",
            "c": "Netural: Just stand there do nothing.",
        }

    },

    "3_a": {
        "dialogue": "When he visits his uncle, something unexpected occurs. <br> This unknown energy either explodes in an abandoned building or he manages to keep it contained for as long as he can. ",
        "answers": {
            "a": "Yes, choose to use this unknown energy to explode in an abandoned building and pass out as a result of the explosion. Max regains consciousness after being knocked unconscious by the expolsion he unintentionally caused.",
            "b": "No, Max chose to keep it in this unknown energy for as long as he could, but then he'd pass out from the explosion, then wake up from the expolsion his accident caused.",
        }
    },

    "4_a": {
        "dialogue": "Max meets his uncle, Ferris, in a hidden building. <br> Uncle, where have I gone?<br> Max inquires. We've arrived at N-Tech Max.<br>According to Uncle Ferris.",
        "answers": {
            "a": "Next page",
        }
    },
    "5_a": {
        "dialogue": "Is it wise for Max to follow Uncle Ferris?  the narrator says.",
        "answers": {
            "a": "Yes and follow him to know what's happening to him.",
            "b": "No, and he wants to return home. Discuss it with his mother. Mom learns of Max's abilities and tells her brother Ferris. She explains the origins of Max's abilities to him. Max is terrified of his origins, believing that his father is an extraterrestrial from another planet. He isn't sure where he fits in. Max takes a step back in order to discover the truth. Max comes to terms with who he is. Max never becomes a hero and remains a normal kid. Max has never fought a bad guy, but he has the steel to control his T.U.R.B.O. energy. He graduated from high school and later in life had a girlfriend."
        }
    },
    // transition to the yes side 
    "6_a": {
        "dialogue": "Notices a strange object. <br> What is the meaning of this round shape?<br> What exactly is this project that my father is working on?<br> The project that his father is working on suddenly become active and went towards Max to ask him about his question. <br> When Max meets Steel, he wants to bond with him in order to prevent him from exploding <br> Max accepts his invitation and forms a bond with him.",
        "answers": {
            "a": "Next page",

        }
    },
    "7_a": {
        "dialogue": "Every morning, Max puts his newfound abilities to the test, and in the process, he encounters an adversary. <br> What are you? Max asks. <br> I'm an elementor! declares the unknown foe.",
        "answers": {
            "a": "Next page",
        }
    },
    // transition to the no side
    "8_a": {
        "dialogue": "No, and he wants to return home.<br> He tells his mother about it.<br> Mom learns of Max's and informs her brother Ferris.<br> Max is informed about the origins of his abilities.<br> Max is surprised by his origins and does not feel at home. <br> He never becomes a hero because he learns to accept himself as a normal kid.<br> He never fights bad guys, but he has the strength to control his T.U.R.B.O. energy. <br>He graduates from high school and goes on to have a girlfriend later in life.",
        "answers": {
            "a": "Next page",
        }
    },
    // create a end of story and also a restart button
    "9_a": {
        "dialogue": "End of story <br> Thank you for your success on this hero journey!",
        "answers": {
            "a": "Please click the restart button to restart the story",
        }
    }
}
// add a my temple of my own
"": {
    "dialogue": "",
    "answer": {
      "": " ",
      "": ""
    }
  },

// continue link
submit.addEventListener('mouseup', function () { //when a button on a pointing device is released while the pointer is located inside it
    answer = form.querySelectorAll('input[type=radio]:checked')[0].value; //a list of the document's elements that match the specified group of selectors.
    if (answer) {
        story++;//increment or add 1 to
        populateForm(story + '_' + answer);//if a radio is checked populate our form with the answer
        console.log("Story time!"); // Console log to make sure things are working
    }
});

// Reset button for all pages to restart the story
function resetForm() {
    document.getElementById("restartButton").reset();
};

// Generate answers from story
function populateForm(story) {
    var current_story = story_tell[story];//take values from story_telling story
    var text = '';

    for (var prop in current_story['answers']) {
        if (current_story['answers'].hasOwnProperty(prop)) { //method returns a boolean (true or false) indicating whether the object has the specified property as its own property
            text += '<label><input type="radio" name="answer" value="" "" ""' + prop + '"/><span>' + current_story['answers'][prop] + '</span></label>';// adding answers to the story
        }
    }

    form.querySelector('p').innerHTML = current_story.dialogue;//write questions to the p tag in the HTML
    form.querySelector('fieldset').innerHTML = text;//write answers to the fieldset 
}

populateForm('start');//set the form at the beginning