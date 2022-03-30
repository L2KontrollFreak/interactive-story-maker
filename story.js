var story = 0;//the story is undefined
var form = document.getElementById('MaxSteel');//elements with matching ids to spefic task
var submit = document.getElementById('continueButton');
var reset = document.getElementById('resetButton');
var answer = '';

//Good Side

story_tell = {
    // create a intro dialogue
    "start": {
        "dialogue": "You've arrived in the Max Steel universe. <br>You are Max McGraph, who recently relocated to a new town due to his mother's new job at DrazTech. <br> Max starts at a new school called Jolly Time High, and you quickly realize that he isn't your typical teenager. <br> Max meets his uncle and learns the truth about his superhuman abilities. <br> In order to prove he is a good hero to society, he must demonstrate his worth and responsibility. <br> It's entirely up to you... ",
        "answers": {
            "a": "next page",
        }
    },
    // start of a new page
    "0_a": {
        "dialogue": "max goes to a new town",
        "answers": {
            // decision
            "a": "yes:put stuff away and helps his mom put stuff away",
            "b": "Neutral: doesn't finish cleaning up",
            "c": "no:don't put stuff away in his room and Be lazy",
            "a": "Next page",
        }
    },

    "1_a": {
        "dialogue": "Goes to school",
        "answers": {
            "a": " Max see new people and makes newfriends",
            "b": "No: Max chooses to be alone",

        }
    },
    "2_a": {
        "dialogue": "Max notices a victim of bullying. Kirby is a guy he meets",
        "answers": {
            "a": "Yes: stop the bullying and help the kid out <br> max walk him from school to his home ",
            "b": "No: leaves it's alone and later regrets <br> he checks the guy to see if he is okay but later sees he is bruised <br> Ask the guy is okay and what is his name?",
            "c": "netural: just stand there do nothing",
        }

    },

    "3_a": {
        "dialogue": "When he visits his uncle, something unexpected occurs. <br> This unknown energy either explodes in an abandoned building or he manages to keep it contained for as long as he can. ",
        "answers": {
            "a": "Yes:choose to explode in a abandoned building <br> and pass out from the explosion <br> wakes up",
            "b": "No:max choose to hold it in as long as he could <br> then he's pass out <br> wake up",
        }
    },

    "4_a": {
        "dialogue": "In a hidden building, Max meets his uncle, Ferris. <br> Hey, UNC, where am I? <br> Max asks. Uncle Ferris says, We're in N-tech Max.",
        "answers": {
            "a": "next page",
        }
    },
    "5_a": {
        "dialogue": "Should Max follow Unc Ferris? says the narrator",
        "answers": {
            "a": "yes and follow him to know what's happening to him",
            "b": "no and wants to go home <br> goes home <br> talk to his mom about it <br> mom finds out  about max powers then talks to her brother ferris <br> tells max the orgin of his powers.<br> max freaks out abour his orgin <br>thats his dad is a alien from a anothor planet <br> doesn't feel like he belongs <br> max moves away to try to find out the truth <br>  max learns to accept who he is <br> max stays as a normal kid and never became a hero <br> max never fought badguys but has steel to keep his T.U.R.B.O. Energy in check <br> he's graudates from High School and has a girlfriend later in his life ",
        }
    },
    // transition to the yes side 
    "6_a": {
        "dialogue": "Notices a strange object <br> What is the meaning of this round shape?<br> What exactly is this project that my father is working on?<br> When Max meets steel, he wants to bond with him in order to prevent him from exploding <br> Max accepts his invitation and forms a bond with him.",
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
        "dialogue": "No, and he wants to return home.<br> He tells his mother about it.<br> Mom learns of Max's abilities and informs her brother Ferris.<br> Max is informed about the origins of his abilities.<br> Max is surprised by his origins and does not feel at home. <br> He never becomes a hero because he learns to accept himself as a normal kid.<br> He never fights bad guys, but he has the strength to control his T.U.R.B.O. energy. <br> He graduates from high school and goes on to have a girlfriend later in life.",
        "answers": {
            "a": "Next page",
        }
    },
    // create a end of story and also a restart button
    "9_a": {
        "dialogue": "end of story <br> thank you for your success on this hero journey!",
        "answers": {
            "a": "  please click the restart button to restart the story",
        }
    }
}
// continue link
submit.addEventListener('mouseup', function () { //when a button on a pointing device is released while the pointer is located inside it
    answer = form.querySelectorAll('input[type=radio]:checked')[0].value; //a list of the document's elements that match the specified group of selectors.
    if (answer) {
        story++;//increment or add 1 to
        populateForm(story + '_' + answer);//if a radio is checked populate our form with the answer
        console.log("Story time!"); // Console log to make sure things are working
    }
});

// Reset button
function resetForm() {
    document.getElementById("restartButton").reset();
};

// Generate answers from story
function populateForm(story) {
    var current_story = story_tell[story];//take values from story_telling story
    var text = '';

    for (var prop in current_story['answers']) {
        if (current_story['answers'].hasOwnProperty(prop)) { //method returns a boolean (true or false) indicating whether the object has the specified property as its own property
            text += '<label><input type="radio" name="answer" value="a" "b" "c"' + prop + '"/><span>' + current_story['answers'][prop] + '</span></label>';// adding answers to the story
        }
    }

    form.querySelector('p').innerHTML = current_story.dialogue;//write questions to the p tag in the HTML
    form.querySelector('fieldset').innerHTML = text;//write answers to the fieldset 
}

populateForm('start');//set the form at the beginning