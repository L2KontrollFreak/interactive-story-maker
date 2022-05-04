var story = 0;//the story is undefined
var form = document.getElementById('MaxSteel');//elements with matching ids to spefic task
var submit = document.getElementById('continueButton');
var reset = document.getElementById('resetButton');
var answer = '';
var copyrights = document.createElement('p');
copyrights.innerHTML = "Copyright © 2019 by Darien and Lucas";
document.body.appendChild(copyrights);
//Evil Side
evilStory_Tell = {

    "start": {
        "dialogue": "You've arrived in the Max Steel universe. <br>You are Max McGraph, who recently relocated to a new town due to his mother's new job at DrazTech. <br> Max starts at a new school called Jolly Time High, and you quickly realize that he isn't your typical teenager. <br> Max meets his uncle and learns the truth about his superhuman abilities. <br> In order to prove he is a good hero to society, he must demonstrate his worth and responsibility. <br> It's entirely up to you...",
        "answers": {
            "a": "Next page",
        }
    },
    // first chapter
    "1_a": {
        "dialogue": "Max is relocating to a new town and takes a look at his new house.",
        "answers": {
            // decision
            "a": "Yes: Puts stuff away and helps his mom put stuff away.",
            "b": "Neutral: doesn't finish cleaning up.",
            "c": "No: Doesn't put stuff away in his room and be's lazy.",

        }
    },
    "2_a": {
        "dialogue": "Max attends a new high school called Jolly Time High School.",
        "answers": {
            // decision
            "a": "Max see new people and makes new friends.",
            "b": "No: Max chooses to be alone.",

        }
    },
    "3_a": {
        "dialogue": "Max notices a victim of bullying. Kirby is a guy he meets.",
        "answers": {
            // decision
            "a": "Yes, put an end to the bullying and assist the student. Max takes him on a walk from school to his house.",
            "b": "No, don't do it; you'll regret this decision. He checks on the man to see if he's all right, but later discovers that he's bruised.",
            "c": "Netural: Just stand there do nothing.",
        }

    },
    "4_a": {
        "dialogue": "Kirby expresses his gratitude to Max for defending him, explaining that he was fine with it and didn't want to fight, so he chooses to remain calm. Max is happy to see Kirby and his companions, but he is sad to see them leave. Max is saddened by his friends' departure.",
        "answers": {
            "a": "Next page",
        }
    },
    // transition
    "5_a": {
        "dialogue": "When he visits his uncle, something unexpected occurs. <br> This unknown energy either explodes in an abandoned building or he manages to keep it contained for as long as he can.",
        "answers": {
            // decision should he explode in a abandoned building or hold it in as long as he could
            "a": "Yes, choose to use this unknown energy to explode in an abandoned building and pass out as a result of the explosion. Max regains consciousness after being knocked unconscious by the expolsion he unintentionally caused.",
            "b": "No, Max chose to keep it in this unknown energy for as long as he could, but then he'd pass out from the explosion, then wake up from the expolsion his accident caused.",
        }
    },
    // transition
    "6_a": {
        "dialogue": "In a hidden building, Max meets his uncle, Ferris. <br> Hey, uncle, where am I? Max asks. <br> Uncle Ferris says, We're in N-tech Max.",
        "answers": {
            "b": "Next page",
        }
    },
    // transition
    "7_a": {
        "dialogue": "Should Max follow uncle Ferris? says the narrator",
        "answers": {
            // decision shou;d max follow uncle ferris
            "a": "Yes and follow him to know what's happening to him",
            "b": "No, and he wants to return home. Discuss it with his mother. Mom learns of Max's abilities and tells her brother Ferris. She explains the origins of Max's abilities to him. Max is terrified of his origins, believing that his father is an extraterrestrial from another planet. He isn't sure where he fits in. Max takes a step back in order to discover the truth. Max comes to terms with who he is. Max never becomes a hero and remains a normal kid. Max has never fought a bad guy, but he has the Steel to control his T.U.R.B.O.  energy. He graduated from high school and later in life had a girlfriend.",
        },
    },
    // creating a link from 7_a "b" to 8_a "a"
    "8_a": {
        "dialogue": "Thank you for playing the game."
    },
    // transition
    "9_a": {
        "dialogue": "After, he bonds with the alien name Steel. Max ask Steel a question. <br> Are you good or evil? Steel says, “I don't know to be honest some people are worth saving some aren't worth saving.”  Max says so your basically anti-hero. They said its up to us to decide their faith who lives or died.",
        "answers": {
            "c": "Next page to se the no side",

        }
    },
    // transition
    "10_a": {
        "dialogue": "No, he says, adding that he wants to discuss it with his mother. When Mom discovers Max's abilities, she consults her brother Ferris, who explains Max's origins to him. Max is only interested in power, not in taking responsibility. He was subjected to a lie detector test.",
        "answers": {
            "d": "Next page",
        }
        // transition to the next page
    },
    "11_a": {
        "dialogue": "They want to see if he's worthy of that power.",
        //decision to see if he's worthy of that power
        "answers": {
            "a": "Yes, to prove to himself that he is capable of being self-sufficient for two weeks. He is a good hero in the eyes of society. As a superhero, the public has faith in him. He's avoided crime, never misses school, and has a girlfriend later in life.",
            "b": "No, He lies about the lie detector process, but they don't notice. He begins to act as if he is a fake hero and gradually turns evil. To maintain his hero image, he teams up with bad guys and commits crimes, but then stops them. An alien named Makino sent Max a message inviting him to join his quest to rule the galaxy.",
        }
    },
    // transition
    "12_a": {
        "dialogue": "Max reveals his secret identity to his girlfriend.",
        // decision: will she stay with or leave him
        "answers": {
            "a": "She stays with him because she loves him.",
            "b": "No, she believes he is too dangerous.",
        }
    },
    // transition
    "13_a": {
        "dialogue": "Because of his power and the responsibility he bears, Max becomes sad and angry with himself.",
        // decision: does max want to give up being a hero and have a normal life again or does he want to become a baddie full time because he's doesn't get his respect
        "answers": {
            "a": "Yes, Max relinquishes his role as a hero and must return to his normal life.",
            "b": "No: Max goes bad, unleashes his dark side, relinquishes his responsibilities, and for the time being, becomes a full-time villain...",
        }
    },
    // transition
    "14_a": {
        "dialogue": "He teams up with bad guys and does crimes <br> But stops them afterwards to keep his hero image <br> Max got a message from an alien named Makino to join his quest to rule the galaxy <br> Max and Steel accept his offer to rule the galaxy.",
        "answers": {
            "a": "Yes: Max and Steel conquer the galaxy",
            "b": "No: Max feel guilty and tell Steel we shouldn't conquer the galaxy instead save the world one last time and give up this life for the both of them <br> Steel agrees with max and save the world one last time.",
        }
    },
    // transition
    "15_a": {
        "dialogue": "Steel agrees with Max and once again saves the world. They both sacrifice their lives to keep the galaxy safe from the forces of evil after saving it from Makino.",
        "answers": {
            "a": "Next page",
        }
    },

    "16_a": {
        "dialogue": "Congratulations on your success on this hero journey!",
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

// Reset button for all pages
reset.addEventListener('mouseup', function () {
    story = 0;
    populateForm(story);
    console.log("Reset!");
});

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
continueButton.addEventListener('mouseup', function () { // this continueButton function make the continue button work immediately after the page loads
    resetForm();
    populateForm(story);
}
);
// create a copyrights for this story
