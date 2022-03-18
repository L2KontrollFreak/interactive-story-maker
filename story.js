var story = 0;//the story is undefined
var form = document.getElementById('MaxSteel');//elements with matching ids to spefic task
var submit = document.getElementById('continueButton');
var reset = document.getElementById('resetButton');
var answer = '';
//Good Side
var story_begins = {
    "start": {
        "intro": "You're in the world of Max Steel. You are Max McGraph who moved in to a new town because his mom new jobs in DrazTech. Max goes to a new school called Jolly Time highschool and you figure out that Max isn't your ordinary teenager. Max meets his uncle and finds out the truth about his superpowers. He has to prove he is worthy and responsibile in order to prove he is a good hero to society. It's up to you...",
        "dialogue_": "The New Beginning <br> Max goes to a town",
        "choice_": {
            "answers": "puts stuff away in his room <br> help put stuff away <br> don't put stuff away in his room <br> helps his mom put stuff away <br> finishing cleaning up the house <br> goes outside to relax <br> Doesn't finish cleaning up, be lazy <br> doesn't like cleaning up the house <br> goes outside to relax <br> go to sleep"
        }
    },
    //Transition
    "c1": {
        "dialogue_": "Goes to school",
        "choice_": {
            "answers": "make new friends <br> Max sees new people and makes new friends meets a girl name Alexandra Max choses to be alone doesnt choose to make friends a decide to be by himself",
        }
    },
    //Option
    "s1": {
        "dialogue_": "max see someone getting bullied <br> should Max stop the bully or let it continune",
        "choice_": {
            "neutral_": "just stand there a do nothing",
            "a_": "stop the bullying and help the kid out",
            "b_": "Meet a guy name Kirb",
            "c_": "leaves its alone and later regrets it",
            "d_": "he check on the guy to see if he's ok but later he see hes bruised",
            "e_": "ask him are you okay and what's his name",
        }
    },
    //Transition
    "s2": {
        "dialogue_": "goes to see his uncle but something unexpected happen <br> explode this unknown energy in a abandoned building  or hold it in as long as he could",
        "choice_": {
            "yes_": "choose to explode in a abandoned building <br> and pass out from the explosion <br> max chooses to hold it in as long as he could <br>then he's pass out <br>wake up",
        }
    },
    //Transition
    "s3": {
        "dialogue_": "The Power and responsiblity",
    },

    //Chapter 2
    "s4": {
        "dialogue_": "Max meets his uncle named Ferris in a secret building <br >Max: hey uncle where am I? <br>  we are in N-tech inc  max?",
        "choice_": {
            "dialogue_": "should max follow uncle ferris?",
            //Yes    
            "yes_": "yes and follow him to know what's happening to him",
            //Transition
            "dialogue_": "see an odd looking object <br> what is the round shape? <br> this is a project your dad has been working on <br> the project broke out because it sense some energy in max <br> meets steel and want to bond max to keep him from expoloding <br> max says yes and bonds with him",
            //Transition
            "dialogue_": "next day early morning <br> Max test out his new powers <br> while testing his new found power he meets an enemy <br> what are you? max says <br> the unkown enemy says: I'm elementor!!! <br> max saids you're looking for a fight are you? <br> Elementor said YES!!! <br> They begin the fight <br> max and steel take the beating but wins the fight <br> He's Earth champion and defender. he is Max Steel!!!",
            //No    
            "no_": "no and wants to go home<>goes home<>talk to his mom about it<>mom finds out  about max powers then talks to her brother ferris<>tells max the orgin of his powers.",
            //Transition
            "dialogue_": "max freaks out abour his orgin <br> thats his dad is a alien from a anothor planet<br> doesn't feel like he belongs<  br> max moves away to try to find out the truth< br> max learns to accept who he is< br> max stays as a normal kid and never became a hero<  br> max never fought badguys but has steel to keep his T.U.R.B.O. Energy in checkbr> he's graudates from HighSchool and has a girlfriend later in his life ",
        }
    },

}
//Evil Side
var evilStory_Begins = {
    "start": {
        "intro": "You're in the world of Max Steel. You are Max McGraph who moved in to a new town because his mom new jobs in DrazTech. Max goes to a new school called Jolly Time highschool and you figure out that Max isn't your ordinary teenager. Max meets his uncle and finds out the truth about his superpowers. He has to prove he is worthy and responsibile in order to prove he is a good hero to society. It's up to you...",
        "dialogue_": "The New Beginning <br> max goes to a new town",
        "choice_": {
            "yes_": "puts stuff away in his room",
            "neutral_": "help put stuff away",
            "no_": "don't put stuff away in his room",
            "yes_": "helps his mom put stuff away",
            "yes_": "finishing cleaning up the house",
            "yes_": "goes outside to relax",
            "neutral_": "Doesn't finish cleaning up",
            "no_": "be lazy",
            "no_": "doesn't like cleaning up the house",
            "no_": "goes outside to relax",
            "no_": "go to sleep",
        }
    },
    //Transition
   // new start 1 is 11 for evil//
         "page_2": {
        "dialogue_": "Goes to school",
        "choice_": {
            "neutral_": "make new friends",
            "yes_": "Max sees new people and makes new friends",
            "yes_": "meet a girl name Alexandra",
            "no_": "Max choses to be alone",
            "no_": "doesn't choose to make friends",
            "no_": "a decide to be by himself",
        }
    },
    //Option
    "page_3": {
        "dialogue_": "max sees someone getting bullied <br> should Max stop the bully or let it continune",
        "choice_": {
            "neutral_": "just stand there a do nothing",
            "yes_": "stop the bullying and help the kid out",
            "yes_": "Meet a guy name Kirb",
            "no_": "joins in the bullying <br> gets lunch detentions <br> doesn't care about others only himself",
        }
    },
    //Transition
    "13": {
        "dialogue_": "goes to see his uncle but something unexpected happen",
        "choice_": {
            "dialogue_": "explode this unknown energy in a abandoned building  or hold it in as long as he could",
            "yes_": "choose to explode in a abandoned building <br> and pass out from the explosion <br> wakes up",
            "no_": "max choose to hold it in as long as he could <br> then he's pass out <br> wakes up",
        }
    },
    //Transition
    "14": {
        "dialogue_": "Max meets his uncle named Ferris in a secret building <br> Max: hey uncle where am I? <br> we are in N-tech inc  max?",
        "choice_": {
            "dialogue": "should max follow Uncle Ferris?",
            //Yes
            "yes_": "yes and follow him to know what's happening to him",
            //Transition
            "yes_": "see a odd looking object.",
            "yes_": "what is this round shape?",
            "yes_": "this is a project your dad has been working on",
            "yes_": "the project broke out because it sense some energy in max.",
            "yes_": "meets steel and want to bond max to keep him from expoloding",
            "yes_": "max says yes and bonds with him",
            "yes_": "after he bonds with the alien named Steel",
            "yes_": "max ask steel a question",
            "yes_": "are you good or evil?",
            "yes_": "steel says I don't know to be honest some people are worth saving some aren't worth saving",
            "yes_": "max says so your basically anti-hero",
            "yes_": "they said its up to us to decide their faith who lives or died",
            //No
            "no_": "no and wants to go home",
            "no_": "goes home",
            "no_": "talk to his mom about it",
            "no_": "mom finds out  about max powers then talks to her brother ferris",
            "no_": "tells max the orgin of his powers.",
            "no_": "Max only thinks about power and not responsibilty",
            "no_": "they do a lie detector on him",
            "no_": "they want to see if he's worthy of that power",
            "yes_": "to prove himself that he can be responsible",
            "yes_": "during 2 weeks he a good hero to society",
            "yes_": "the public trusts him as to being a superhero",
            "no_": "does lie about the lie dectector process but they didn't catch it that he was lying",
            "no_": "he pretends to be a fake hero and begins to slowly becomes Evil",
            "no_": "he teams up with badguys and does crimes",
        }
    }
}
//link continue
submit.addEventListener('mouseup', function (){
    answer = form.querySelectorAll('input[type=radio]:checked')[0].value;
    if (answer) {
        story++;
        populateForm(story + '_' + answer);// if the radio checks populated from witha answer or choice
        console.log("Story begins");
    }
}),
    //reset button or restart
    function resetButton() {
        document.getElementById("MaxSteel").reset();
    }
// Create choices for the story
function populateForm(story) {
    var current_story = story_begins[story];// take values for story begins
    var text = '';

    for (var prop in current_story['answer']) {
        if (current_story['answers'].hasOwnProperty(prop)) {// method returns as a true or false statement
            text += '<label><input type = "radio" name="answer" value="' + prop + '"/><span>' + current_story['answers'][prop] + '</span></label>';// adding answer to the story or choices to the story    
        }
    }
    form.querySelector('p').innerHTML = current_story.dialogue;// write the dialogue in the p tag in html
    form.querySelector('fieldset').innerHTML = text;// write answers to the fieldset
}
populateForm('start'); // set the form at the beginning