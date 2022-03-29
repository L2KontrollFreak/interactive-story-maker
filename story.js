var story = 0;//the story is undefined
var form = document.getElementById('MaxSteel');//elements with matching ids to spefic task
var submit = document.getElementById('continueButton');
var reset = document.getElementById('resetButton');
var answer = '';

//Good Side

story_tell = {
    // create a intro dialogue
    "start": {
        "dialogue": " You're in the world of Max Steel <br> You are Max McGraph who moved in to a new town because his mom new jobs in DrazTech <br> Max goes to a new school called Jolly Time highschool and you figure out that Max isn't your ordinary teenager <br> Max meets his uncle and finds out the truth about his superpowers<br> He has to prove he is worthy and responsibile in order to prove he is a good hero to society <br> It's up to you...",
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
    // transition to the yes side 
    "6_a": {
        "dialogue": "Sees an odd looking object <br>what is this round shape?<br>this is a project your dad has been working on <br>meets steel and want to bond max to keep him from expoloding <br> max says yes and bonds with him",
        "answers": {
            "a": "Next page",

        }
    },
    "7_a": {
        "dialogue": "next day ealry morning <br> Max test out his new powers <br> while testing his new found power he  meets a enemy <br> what are you? max saids <br> the unkown enemy says: I'm elementor!!! <br> max saids you're looking for a fight are you? <br> Elementor said YES!!! <br> They begin the fight <br> Max and Steel take the beating but wins the fight <br> He's Earth champion and defender. he is Max Steel!!!",
        "answers": {
            "a": "Next page",
        }
    },
    // transition to the no side
    "8_a": {
        "dialogue": "no and wants to go home <br>goes home <br>talk to his mom about it <br>mom finds out  about max powers then talks to her brother ferris <br>tells max the orgin of his powers.<br> max freaks out abour his orgin<br><br>doesn't feel like he belongs <br>thats his dad is a alien from a anothor planet<br>doesn't feel like he belongs<br>max moves away to try to find out the truth<br><br>max learns to accept who he is<br>max stays as a normal kid and never became a hero<br>max never fought badguys but has steel to keep his T.U.R.B.O. Energy in check<br>he's graudates from HighSchool and has a girlfriend later in his life",
            "answers": {
                "a": "Next page",
            }
        },
        // create a end of story
        "9_a": {
            "dialogue": "end of story <br> thank you for your success on this hero journey!",
            "answers": {
                "a": "Next page",
            },
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
            text += '<label><input type="radio" name="answer" value="a" "b" "c" "a" "b" "c"' + prop + '"/><span>' + current_story['answers'][prop] + '</span></label>';// adding answers to the story
        }
    }

    form.querySelector('p').innerHTML = current_story.dialogue;//write questions to the p tag in the HTML
    form.querySelector('fieldset').innerHTML = text;//write answers to the fieldset 
}

populateForm('start');//set the form at the beginning
