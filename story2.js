var story = 0;//the story is undefined
var form = document.getElementById('MaxSteel');//elements with matching ids to spefic task
var submit = document.getElementById('continueButton');
var reset = document.getElementById('resetButton');
var answer = '';

//Evil Side

var evilStory_Tell = {
    "start": {
        "dialogue": "You're in the world of Max Steel <br> You are Max McGraph who moved in to a new town because his mom new jobs in DrazTech <br> Max goes to a new school called Jolly Time highschool and you figure out that Max isn't your ordinary teenager <br> Max meets his uncle and finds out the truth about his superpowers<br> He has to prove he is worthy and responsibile in order to prove he is a good hero to society <br> It's up to you...",
        "answers": {
            "a": "next page",
        }
    },
    // first chapter
    "0_a": {
        "dialogue": "max goes to a new town",
        "answers": {
            // decision
            "a": "yes:put stuff away and helps his mom put stuff away",
            "b": "Neutral: doesn't finish cleaning up",
            "c": "no:don't put stuff away in his room and Be lazy",

        }
    },
    //test
    "1_a": {
        "dialogue": "Goes to school",
        "answers": {
            // decision
            "a": " Max see new people and makes newfriends",
            "b": "No: Max chooses to be alone",

        }
    },
    "2_a": {
        "dialogue": "Max sees someone getting bullied <br> Meets a guy name Kirby",
        "answers": {
            // decision
            "a": "Yes: stop the bullying and help the kid out <br> max walk him from school to his home ",
            "b": "No: leaves it's alone and later regrets <br> he checks the guy to see if he is okay but later sees he is bruised <br> Ask the guy is okay and what is his name?",
            "c": "netural: just stand there do nothing",
        }

    },
    "3_a": {
        "dialogue": "Kirby thanks max for standing up for him because he was ok with it and he didn't want to fight so he chose to stay calm",
        "answers": {
            "a": "Next page",
        }
    },
    // transition
    "4_a": {
        "dialogue": "goes to see his uncle but something unexpected happen <br> explode this unknown energy in a abandoned building  or hold it in as long as he could ",
        "answers": {
            // decision should he explode in a abandoned building or hold it in as long as he could
            "a": "Yes:choose to explode in a abandoned building <br> and pass out from the explosion <br> wakes up",
            "b": "No:max choose to hold it in as long as he could <br> then he's pass out <br> wake up",
        }
    },
    // transition
    "5_a": {
        "dialogue": "Max meets his uncle named Ferris in a secret building <br> Max: hey unc where am I? <br> we are in N-tech inc  max?",
        "answers": {
            "b": "next page",
        }
    },
    // transition
    "6_a": {
        "dialogue": "should max follow uncle ferris?",
        "answers": {
            // decision shou;d max follow uncle ferris
            "a": "yes and follow him to know what's happening to him",
            "b": "no and wants to go home <br> goes home <br> talk to his mom about it <br> mom finds out  about max powers then talks to her brother ferris <br> tells max the orgin of his powers.<br> max freaks out abour his orgin <br>thats his dad is a alien from a anothor planet <br> doesn't feel like he belongs <br> max moves away to try to find out the truth <br>  max learns to accept who he is <br> max stays as a normal kid and never became a hero <br> max never fought badguys but has steel to keep his T.U.R.B.O. Energy in check <br> he's graudates from HighSchool and has a girlfriend later in his life ",
        },
    },
    // transition
    "7_a": {
        "dialogue": "after he bonds with the alien name steel <br> max ask steel a question <br> are you good or evil? <br> steel says I don't know to be honest some people are worth saving some aren't worth saving <br> max says so your basically anti-hero <br> they said its up to us to decide their faith who lives or died",
        "answers": {
            "c": "Next page to se the no side",

        }
    },
    // transition
    "8_a": {
        "dialogue": "no and wants to go home <br> goes home <br> talk to his mom about it <br> mom finds out about max powers then talks to her brother ferris <br> tells max the orgin of his powers <br> Max only think about power and not responsibilty <br> they do a lie detector test on him",
        "answers": {
            "d": "Next page",
        }
        // transition to the next page
    },
    "9_a": {
        "dialogue": "they want to see if he's worthy of that power",
        //decision to see if he's worthy of that power
        "answers": {
            "a": "yes: to prove himself that he can be responsible <br> during 2 weeks he a good hero to society <br> the public trusts him as to being a superhero <br> he's stop crime and doesn't miss school <br> he's graudates from HighSchool and has a girlfriend later in his life",
            "b": "No: does lie about the lie detector process but they didn't catch it that he was lying <br> he pretends to be a fake hero and begins to slowly becomes Evil <br> he teams up with badguys and does crimes <br> but stops them afterwards to keep his hero image <br>max got a message from a alian named makino to join his quest to rule the galaxy",
        }
    },
    // transition
    "10_a": {
        "dialogue": "Max tells his girlfriend about his secret identity",
        // decision: will she stay with or leave him
        "answers": {
            "a": "yes: she stays with him because she cares for him",
            "b": "no: she thinks he's too dangerous",
        }
    },
    // transition
    "11_a": {
        "dialogue": "Max get sad and angry at himself because of his power and responsible he takes",
        // decision: does max want to give up being a hero and have a normal life again or does he want to become a baddie full time because he's doesn't get his respect
        "answers": {
            "a": "yes: Max gives up his duty as being a hero and has to go back to his regular lifestyle.",
            "b": "no: Max turns bad and unleashes his dark side and gives up his responsibility and becomes a full time villain for now...",
        }
    },
    // transition
    "12_a": {
        "dialogue": "he teams up with badguys and does crimes <br> but stops them afterwards to keep his hero image <br> max got a message from a alian named makino to join his quest to rule the galaxy <br> Max and steel aceept his offer to rule the galaxy",
        "answers": {
            "a": "yes: max and steel conquer the galaxy",
            "b": "no: max feel gulity and tell steel we shouldn't coquer the galxay instead save the world one last time and give up this life for the both of them <br> steel agrees with max and save the world one last time.",
        }
    },
    // transition
    "13_a": {
        "dialogue": "steel agrees with max and save the world one last time <br> after they save the galxay from makino, they both sacrafise they lives to keep the galxay safe from the forces of evil",
        "answers": {
            "a": "Next page",
        }
    },
    "14_a": {
        "dialogue": "thank you for your success on this hero journey!",
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
    var current_story = evilStory_Tell[story];//take values from story_telling story
    var text = '';

    for (var prop in current_story['answers']) {
        if (current_story['answers'].hasOwnProperty(prop)) { //method returns a boolean (true or false) indicating whether the object has the specified property as its own property
            text += '<label><input type="radio" name="answer" value="a" "b" "c" "a" "b" "c" "a" "b' + prop + '"/><span>' + current_story['answers'][prop] + '</span></label>';// adding answers to the story
        }
    }

    form.querySelector('p').innerHTML = current_story.dialogue;//write questions to the p tag in the HTML
    form.querySelector('fieldset').innerHTML = text;//write answers to the fieldset 
}

populateForm('start');//set the form at the beginning
