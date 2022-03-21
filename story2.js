var story = 0;//the story is undefined
var form = document.getElementById('MaxSteel');//elements with matching ids to spefic task
var submit = document.getElementById('continueButton');
var reset = document.getElementById('resetButton');
var answer = '';

//Evil Side

var story_tell = {
    "start": {
        "dialogue": "max goes to a new town",
        "answers": {
            "a": "yes:put stuff away and helps his mom put stuff away",
            "b": "Neutral: doesn't finish cleaning up",
            "c": "no:don't put stuff away in his room and Be lazy",

        }
    },
    //test
    "1_a": {
        "dialogue": "Goes to school",
        "answers": {
            "a": " Max see new people and makes newfriends",
            "b": "No: Max chooses to be alone",

        }
    },
    "2_a": {
        "dialogue": "Max sees someone getting bullied <br> Meets a guy name Kirby",
        "answers": {
            "a": "Yes: stop the bullying and help the kid out <br> max walk him from school to his home ",
            "b": "No: leaves it's alone and later regrets <br> he checks the guy to see if he is okay but later sees he is bruised <br> Ask the guy is okay and what is his name?",
            "c": "netural: just stand there do nothing",
        }

    },

    "3_a": {
        "dialogue": "goes to see his uncle but something unexpected happen <br> explode this unknown energy in a abandoned building  or hold it in as long as he could ",
        "answers": {
            "a": "Yes:choose to explode in a abandoned building <br> and pass out from the explosion <br> wakes up",
            "b": "No:max choose to hold it in as long as he could <br> then he's pass out <br> wake up",
        }
    },

    "4_a": {
        "dialogue": "Max meets his uncle named Ferris in a secret building <br> Max: hey unc where am I? <br> we are in N-tech inc  max?",
        "answers": {
            "a": "next page",
        }
    },
    "5_a": {
        "dialogue": "should max follow unc ferris?",
        "answers": {
            "a": "yes and follow him to know what's happening to him",
            "b": "no and wants to go home <br> goes home <br> talk to his mom about it <br> mom finds out  about max powers then talks to her brother ferris <br> tells max the orgin of his powers.<br> max freaks out abour his orgin <br>thats his dad is a alien from a anothor planet <br> doesn't feel like he belongs <br> max moves away to try to find out the truth <br>  max learns to accept who he is <br> max stays as a normal kid and never became a hero <br> max never fought badguys but has steel to keep his T.U.R.B.O. Energy in check <br> he's graudates from HighSchool and has a girlfriend later in his life ",
        },
    },
    "6_a": {
        "dialogue": "after he bonds with the alien name steel <br> max ask steel a question <br> are you good or evil? <br> steel says I don't know to be honest some people are worth saving some aren't worth saving <br> max says so your basically anti-hero <br> they said its up to us to decide their faith who lives or died",
        "answers": {
            "b": "Next page",

        }
    },
    "7_a": {
        "dialogue": "",
        "answers": {
            "c": "Next page",
        }
    },
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
}

// Generate answers from story
function populateForm(story) {
    var current_story = story_tell[story];//take values from story_telling story
    var text = '';

    for (var prop in current_story['answers']) {
        if (current_story['answers'].hasOwnProperty(prop)) { //method returns a boolean (true or false) indicating whether the object has the specified property as its own property
            text += '<label><input type="radio" name="answer" value="a" "b" "c" "a" "b" "c"' + prop + '"/><span>' + current_story['answers'][prop] + '</span></label>';// adding answers to the story
        }
    }

    form.querySelector('p').innerHTML = current_story.dialogue;//write questions to the p tag in the HTML
    form.querySelector('fieldset').innerHTML = text;//write answers to the fieldset 
}

populateForm('start');//set the form at the beginning
