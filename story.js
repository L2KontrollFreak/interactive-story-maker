var story = 0;//the story is undefined
var form = document.getElementById('MaxSteel');//elements with matching ids to spefic task
var submit = document.getElementById('continueButton');
var reset = document.getElementById('resetButton');
var answer = '';

 var story_begins = {
     "start": {
      "intro":"You're in the world of Max Steel. You are Max McGraph who moved in to a new town because his mom new jobs in DrazTech. Max goes to a new school called Jolly Time highschool and you figure out that Max isn't your ordinary teenager. Max meets his uncle and finds out the truth about his superpowers. He has to prove he is worthy and responsibile in order to prove he is a good hero to society. It's up to you...",
        "dialouge": "The New Beginning",
        "dialouge": "Max goes to a town",
        "choice":{
          "yes": "puts stuff away in his room",
          "neutral": "help put stuff away",
          "no": "don't put stuff away in his room",
        "yes": "helps his mom put stuff away",
        "yes": "finishing cleaning up the house",
        "yes": "go outside to relax",
        "neutral": "Doesn't finish cleaning up",
        "no": "be lazy",
        "no": "doesn't like cleaning up the house",
        "no": "goes outside to relax",
        "no": "go to sleep",
        }
     },
//Transition
    "start": {
     "dialouge": "Goes to school",
    "choice":{
        "neutral": "make new friends",
        "yes": "Max sees new people and makes new friends",
        "yes": "meet a girl name alexandra",
        "no": "Max choses to be alone",
        "no": "doesn't choose to make friends",
        "no": "a decide to be by himself",
    }
    },
 //Option
 "start": {
"dialouge": "max see someone getting bullied",
"dialouge": "should Max stop the bully or let it continune",
"choice":{
    "neutral": "just stand there a do nothing",
    "yes": "stop the bullying and help the kid out",
    "yes": "Meet a guy name kirb",
    "no": "leaves its alone and later regrets it",
    "no": "he check on the guy to see if he's ok but later he see hes bruised",
    "no": "ask him are you okay and what's his name",
}
 },
//Transition
"start": {
"dialouge": "goe to see his uncle but something unexpected happen",
"choice":{
"dialouge": "explode this unknown energy in a abandoned building  or hold it in as long as he could",
"yes": "choose to explode in a abandoned building",
"yes": "and pass out from the explosion",
"no": "max chooses to hold it in as long as he could",
"no": "then he's pass out",
"no": "wake up",
}
},
//Transition
"start": {
"dialouge": "The Power and responsiblity",
    },

//Chapter 2
"start": {
    "dialouge": "Max meets his uncle named Ferris in a secret building",
    "dialouge": "Max: hey unc where am I?",
    "dialouge": "we are in N-tech inc  max?",
    "choice":{
    "dialouge": "should max follow unc ferris?",
//Yes    
    "yes": "yes and follow him to know what's happening to him",
//Transition
    "dialogue": "see an odd looking object",
    "dialogue": "what is the round shape?",
    "dialogue": "this is a project your dad has been working on",
    "dialogue":"the project broke out because it sense some energy in max",
    "dialogue": "meets steel and want to bond max to keep him from expoloding",
    "dialouge":"max says yes and bonds with him",
//Transition
    "dialouge": "next day early morning",
    "dialouge": "Max test out his new powers",
     "dialogue": "while testing his new found power he  meets a enemy",
     "dialouge": "what are you? max says", 
     "dialouge": "the unkown enemy says: I'm elementor!!!",
    "dialouge": "max saids you're looking for a fight are you?",
     "dialogue": "Elementor said YES!!!",
     "dialogue": "They begin the fight",
     "dialogue": "max and steel take the beating but wins the fight", 
     "dialogue": "He's Earth champion and defender. he is Max Steel!!!",
//No    
     "no": "no and wants to go home",
     "no": "goes home",
     "no": "talk to his mom about it",
     "no": "mom finds out  about max powers then talks to her brother ferris ",
     "no": "tells max the orgin of his powers.",
     //Transition
     "dialogue": "max freaks out abour his orgin ",
     "dialogue": "thats his dad is a alien from a anothor planet",
     "dialogue": "doesn't feel like he belongs",
     "dialogue": "max moves away to try to find out the truth",
     "dialogue": "max learns to accept who he is",
     "dialogue": "max stays as a normal kid and never became a hero",
     "dialogue": "max never fought badguys but has steel to keep his T.U.R.B.O. Energy in check",
     "dialogue": "he's graudates from HighSchool and has a girlfriend later in his life ",
}   
     },

}
