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
        "dialogue": "You've arrived in Max Steel's world. Max McGraph is a young man who has recently relocated to a new town as a result of his mother's new position at DrazTech. Max begins his freshman year at Jolly Time High, and it is clear right away that he is not your typical adolescent. Max meets his uncle and learns the truth about his superhuman abilities. To prove he is a good hero to society, he must demonstrate his worth and responsibility. It's entirely up to you...`",
        "answers": {
            "intro": "Next page",
        }
    },
    // start of a new page
    "intro": {
        "dialogue": "Max is relocating to a new town and takes a look at his new house.",
        "answers": {
            // decision
            "putAway": "Yes: Put stuff away and helps his mom put stuff away.", //yes//
            "nothing": "Neutral: Doesn't finish cleaning up",
            "noHelp": "No: Doesn't put stuff away in his room and be's lazy.",
        }
    },

    "putAway": {
        "dialogue": "Puts away his clothes.",
        "answers": {
            "looking for his mom": "Max wants to know whether there is anything else he has to put away.",// putAway
            "stay in his room": "No: Max chooses to be alone in his new room.",

        }
    },
    "looking for his mom": {
        "dialogue": "Max Mom says that there is nothing else he has to put away.",//putAway
        "answers": {
            "read a book to pass time": "Yes: Max reads a book to pass time.",
            "plays some video game?": "Yes: Max plays a video game to pass the time.",
        }
    },
    "stay in his room": {
        "dialogue": "Max is alone in his new room and checking out the space he has.",
        "answers": {
            "stares at the wall": "Max stares at the wall and is not sure what to do.",
        }
    },
    "stares at the wall": {
        "dialogue": "Max is staring at the wall unitl he's falls asleep.",
        "answers": {
            "sleep": "Max falls asleep.",
        }
    },
    "sleep": {
        "dialogue": "Max wakes up and saw the time and relized he is late for school.",
        "answers": {
            "oversleep": "Max oversleeps and wakes up in the morning.",
        }
    },
    "read a book to pass time": {
        "dialogue": "Max sees the time and stops reading and starts slowlying to go to bed.", //putAway
        "answers": {
            "oversleep": "Max oversleeps and is late for school and gets scolded by the teacher.",
        }
    },
    "oversleep": { // putAway
        "dialogue": "MAX WHAT IS YOUR EXCUSE FOR BEING LATE",
        "answers": {
            "the teacher": "The reason why he was late because he overslept and told why he over slept.",
        }
    },
    "the teacher": {
        "dialogue": "The teacher decides his fate.",
        "answers": {
            "he got a warning": "Max was happy that he got a warning and hope he doesn't to it again.",
            "did not get a warning": "Max, as a result you get a... detention",
        }
    },
    "he got a warning": {
        "dialogue": "Max got a warning because he overslept.",
        "answers": {
            "Max takes his seat and is happy.": "Just take your seat and PLEASE be good the teacher says",
        }
    },
    "did not get a warning": {
        "dialogue": "Max did not get a warning and gets detention.",
        "answers": {
            "angry": "Max is angry and tells the teacher to give a break.",
        }
    },
    "angry": {
        "dialogue": "Max is angry and walks out of the classroom.",
        "answers": {
            "the right thing": "I'm sorry for being disruptful",
            "the wrong thing": "Max runs out of the room and the police chase him",
        }
    },
    "the right thing": {
        "dialogue": "the teacher accepts his aplogizes.",
        "answers": {
            "max feels better now": "Max feels better now that the teacher accepts his aplogizes.",
        }
    },
    "the wrong thing": {
        "dialogue": "They contact Max's parents",
        "answers": {
            "trouble": "Max gets in a lot of trouble for it",
        }
    },
    "trouble": {
        "dialogue": "Max's mother is furious with him and has scolded and grounded him for the remainder of the day.",
        "answers": {
            "sneaks out": " Max sneaks out of his room and go vist his uncle.",
        }
    },
    "sneaks out": {
        "dialogue": "Max sneaks out of his room and goes to his uncle. max is walking to his uncle house to vist him.",
        "answers": {
            "meet": "When he trys to vist his uncle, something unexpected occurs. <br> This unknown energy either explodes in an abandoned building or he manages to keep it contained for as long as he can. ",
        }
    },
    "max feels better now": {
        "dialogue": "the school ends and max goes home and he's happy its the weekend and be for the next day.", // the next day he meets his family
        "answers": {
            "next day": "max wants to meet one of his family members.",
        }
    },
    "nothing": {
        "dialogue": "Just stands there.",
        "answers": {
            "noHelp out and be lazy": "he goes to school and meet new people.",
        }
    },
    "noHelp": {
        "dialogue": "Doesn't help out and be lazy until his first day of school.",
        "answers": {
            "meet someone by his desk": " max get his new schudule and goes to his first class and that's English.",
        }
    },
    "meet someone by his desk": {
        "dialogue": "Max meet someone by his desk named Alexandria.",
        "answers": {
            "ask her out": "Max chats with Alexandria for a bit then eventually ask her out to hangout.",
            "don't ask her out": "Max doesn't ask Alexandria out and just goes to school.",
        }
    },
    "ask her out": {
        "dialogue": "Alexandria says yes to Max's request.",
        "answers": {
            " Max is excited to hangout": "Max is excited to hangout with Alexandria.",
        }
    },
    "don't ask her out": {
        "dialogue": "Alexandria says no to Max's request.",
        "answers": {
            "witness bullying": "Max notices a victim of bullying.<br> Kirby is a guy he meets.",
        }
    },
    "school": {
        "dialogue": "Max goes to school and meets new people.",
        "answers": {
            "class": "Max meets a new person and starts to talk to her.",
        }
    },
    "class": {
        "dialogue": "Max meets a girl named Alexandria and says hi",
        "answers": {
            "Should Max ask her out.": "Max asks her out to hangout somewhere in the city"
        }
    },
    "takes her out.": {
        "dialogue": "Alexandria say yes and give max her phone number.",
        "answers": {
            "happy": "Max is happy that he can ask her out to hangout and walk arounds the school.",
        }
    },
    "happy": {
        "dialogue": "Max was walking around the school and sees something around the corner.",
        "answers": {
            "witness bullying": "Max sense something was wrong",
        }
    },
    "witness bullying": {
        "dialogue": "Max notices a victim of bullying.<br> Kirby is a guy he meets.",
        "answers": {
            "stop it": "Yes: stop the bullying and help the kid out <br> max walk him from school to his home.",
            "let it contiune": "No: leaves it's alone and later regrets <br> he checks the guy to see if he is okay but later sees he is bruised <br> Ask the guy is okay and what is his name?",
            "Netural": "Netural: Just stand there and do nothing.",
        }

    },
    "stop it": {
        "dialogue": "Max stops the bullying and helps the kid out.",
        "answers": {
            "glad": "Max is glad that he helped the kid out.",
        }
    },
    "let it contiune": {
        "dialogue": "Max leaves it's alone and later regrets.",
        "answers": {
            "Max is sad": "Max is sad that he left the kid alone to get bully.",
        }
    },
    "Max is sad": {
        "dialogue": "Max was angry at himself for not helping him out.",
        "answers": {
            "next day": "Max wants to meet one of his family members.",
        }
    },
    "Netural": {
        "dialogue": "Max just stands there and do nothing.",
        "answers": {
            "leaves the scene": "Max leaves the scene and doesn't look back.",
        }
    },
    "glad": {
        "dialogue": "Max talks to the kid and tells him that he is glad that he helped the kid out<br> and ask what's his name.",
        "answers": {
            "Kirby's name": "the guy name is Kirby.",
        }
    },
    "Kirby's name": {
        "dialogue": "max say nice to meet you kirby i will talk to you later.",
        "answers": {
            "next day": "max wants to meet one of his family members.",
        }
    },
    "next day": {
        "dialogue": "max wants to meet one of his family members.",
        "answers": {
            "meet": "max want to visit one of his family members.",
        }
    },

    "meet": {
        "dialogue": "When he trys to vist his uncle, something unexpected occurs. <br> This unknown energy either explodes in an abandoned building or he manages to keep it contained for as long as he can. ",
        "answers": {
            "blow up build": "Yes, choose to use this unknown energy to explode in an abandoned building and pass out as a result of the explosion. Max regains consciousness after being knocked unconscious by the expolsion he unintentionally caused.",
            "pass out": "No, Max chose to keep it in this unknown energy for as long as he could, but then he'd pass out from the explosion, then wake up from the expolsion his accident caused.",
        }
    },

    "blow up build": {
        "dialogue": "Max meets his uncle, Ferris, in a hidden building. <br> Uncle, where have I gone?<br> Max inquires. We've arrived at N-Tech Max.<br>According to Uncle Ferris.",
        "answers": {
            "secret": "in a unknown location max starts to wake up.",
        }
    },
    "pass out": {
        "dialogue": "Max meets his uncle, Ferris, in a hidden building. <br> Uncle, where have I gone?<br> Max inquires. We've arrived at N-Tech Max.<br>According to Uncle Ferris.",
        "answers": {
            "secret": "in a unknown location max starts to wake up.",
        }
    },
    "secret": {
        "dialogue": "Is it wise for Max to follow Uncle Ferris?  the narrator says.",
        "answers": {
            "Follows Ferris": "Yes and follow him to know what's happening to him.",
            "doesn't follow ferris": "No, and he wants to return home. Discuss it with his mother. Mom learns of Max's abilities and tells her brother Ferris. She explains the origins of Max's abilities to him. Max is terrified of his origins, believing that his father is an extraterrestrial from another planet. He isn't sure where he fits in. Max takes a step back in order to discover the truth. Max comes to terms with who he is. Max never becomes a hero and remains a normal kid. Max has never fought a bad guy, but he has the steel to control his T.U.R.B.O. energy. He graduated from high school and later in life had a girlfriend.",
        }
    },
    "doesn't follow ferris": {
        "dialogue": "Thank you for your time for playing this game. if you want to play again, please refresh the page.",
        "answers": {}
    },
    // transition to the yes side 
    "Follows Ferris": {
        "dialogue": "Notices a strange object. <br> What is the meaning of this round shape?<br> What exactly is this project that my father is working on?<br> The project that his father is working on suddenly become active and went towards Max to ask him about his question. <br> When Max meets Steel, he wants to bond with him in order to prevent him from exploding <br> Max accepts his invitation and forms a bond with him.",
        "answers": {
            "Bond": "Bond with Steel",
        }
    },
    "Bond": {
        "dialogue": "Every morning, Max puts his newfound abilities to the test, and in the process, he encounters an adversary. <br> What are you? Max asks. <br> I'm an elementor! declares the unknown foe.",
        "answers": {
            "making a plan": "Max makes a plan to destroy the foe. but take into account that he is not sure what he is going to do. so he decides to ask Steel for help. <br> Steel tells Max that he is going to destroy the foe with stength mod. <br> Max agrees to do it. <br> Max confronts the foe with his plan. and the plan evently works. he defeats elementor. He's now Earth champion and defender. He is a super hero name Max Steel",
        }
    },
    "making a plan": {
        "dialogue": "thank you for playing this game. if you want to play again, please refresh the page. or do you want to see the bad ending?",
        "answers": {}
    }
}


// continue link
submit.addEventListener('mouseup', function () { //when a button on a pointing device is released while the pointer is located inside it
    answer = form.querySelectorAll('input[type=radio]:checked')[0].value; //a list of the document's elements that match the specified group of selectors.
    if (answer) {
        console.log(answer);
        populateForm(answer);//if a radio is checked populate our form with the answer
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
            text += `<label><input type="radio" name="answer" value="${prop}"  "/><span> ${current_story['answers'][prop]} </span></label>`;// adding answers to the story
        }
    }

    form.querySelector('div.txt').innerHTML = current_story.dialogue;//write questions to the p tag in the HTML
    form.querySelector('fieldset').innerHTML = text;//write answers to the fieldset 
}

populateForm('start');//set the form at the beginning