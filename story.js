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
            "putAway": "Yes: Put stuff away and helps his mom put stuff away.",
            "nothing": "Neutral: Doesn't finish cleaning up",
            " noHelp out and be lazy": "No: Doesn't put stuff away in his room and be's lazy.",
        }
    },

    "putAway": {
        "dialogue": "Puts away his clothes.",
        "answers": {
            "looking for his mom": "Max wants to know whether there is anything else he has to put away.",
            "stay in his room": "No: Max chooses to be alone in his new room.",

        }
    },
    "looking for his mom": {
        "dialogue": "Max Mom says that there is nothing else he has to put away.",
        "answers": {
            "read a book to pass time": "Yes: Max reads a book to pass time.",
            "plays some video game?": "Yes: Max plays a video game to pass the time.",
        }
    },
    "stay in his room": {
        "dialogue": "Max is alone in his new room and checking out the space he has.",
        "answers": {
            " stares at the wall": "Max stares at the wall and is not sure what to do.",
        }
    },
    "read a book to pass time": {
        "dialogue": "Max sees the time and stops reading and starts slowlying to go to bed.",
        "answers": {
            "oversleep": "Max oversleeps and is late for school and gets scolded by the teacher.",
        }
    },
    "oversleep": {
        "dialogue": "MAX WHAT IS YOUR EXCUSE FOR BEING LATE",
        "answers": {
            "Max says to the teacher": "The reason why he was late because he overslept and told why he over slept.",
        }
    },
    "The reason why he was late because he overslept and told why he over slept": {
        "dialogue": "The teacher decides his fate.",
        "answers": {
            "Max was lucky he got a warning": "Max was happy that he got a warning and hope he doesn't to it again.",
            "Max did not get a warning": "Max, as a result you get a... detention",
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
        }
    },
    "ask her out": {
        "dialogue": "Alexandria says yes to Max's request.",
        "answers": {
            " Max is excited to hangout": "Max is excited to hangout with Alexandria.",
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
                    "Max is glad": "Max is glad that he helped the kid out.",
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