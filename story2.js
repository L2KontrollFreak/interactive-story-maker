var story = 0;//the story is undefined
var form = document.getElementById('MaxSteel');//elements with matching ids to spefic task
var submit = document.getElementById('continueButton');
var reset = document.getElementById('resetButton');
var answer = '';
var copyrights = document.createElement('p');
copyrights.innerHTML = "Copyright © 2022 by Darien and Lucas";
document.body.appendChild(copyrights);
//Evil Side
evilStory_Tell = {

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
            " noHelp out and be lazy": "No: Doesn't put stuff away in his room and be's lazy.",
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
"noHelp out and be lazy": {
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
        "Max is sad to not be able to hangout": "Max is sad to not be able to hangout with Alexandria.",
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
    "dialogue": "When he visits his uncle, something unexpected occurs. <br> This unknown energy either explodes in an abandoned building or he manages to keep it contained for as long as he can. ",
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
            "doesn't follow ferris": "No, and he wants to return home. Discuss it with his mother. Mom learns of Max's abilities and tells her brother Ferris. She explains the origins of Max's abilities to him. Max is terrified of his origins, believing that his father is an extraterrestrial from another planet. He isn't sure where he fits in. Max takes a step back in order to discover the truth. Max comes to terms with who he is. Max never becomes a hero and remains a normal kid. Max has never fought a bad guy, but he has the steel to control his T.U.R.B.O. energy. He graduated from high school and later in life had a girlfriend."
    }
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
    var current_story = evilStory_Tell[story];//take values from story_telling story
    var text = '';

    for (var prop in current_story['answers']) {
        if (current_story['answers'].hasOwnProperty(prop)) { //method returns a boolean (true or false) indicating whether the object has the specified property as its own property
            text += `<label><input type="radio" name="answer" value="${prop}"  "/><span> ${current_story['answers'][prop]} </span></label>`;// adding answers to the story
        }
    }

    form.querySelector('p').innerHTML = current_story.dialogue;//write questions to the p tag in the HTML
    form.querySelector('fieldset').innerHTML = text;//write answers to the fieldset 
}

populateForm('start');//set the form at the beginning