window.onload = function(){
    var story = {
     
    
        opener: {
            text:"Your in the world of Max Steel. You are Max McGraph who moved in to a new town because his mom new jobs in DrazTech. Max goes to a new school called Jolly Time highschool and you figure out that Max isn't your ordinary teenager. Max meets his uncle and finds out the truth about his superpowers. He has to prove he is worthy and responsibile in order to prove he is a good hero to society. It's up to you",
            options:[["Go to Jolly Town", "GO to the School"]]
        }
    }    
var playerOptions = ["opener"];

var m = document.getElementById("touch");
var restart = document.getElementById("restart");
var playTimeArea = document.getElementById("playTimeArea");
var clickButtonArea = document.getElementById("clickButtonArea");

function craftButton(text,options){// craftbutton is the text for each choice you choose
    var button = document.createElement("button");
    button.innerHTML= text;
    clickButtonArea.appendChild(button);

    button.addEventListener("click", function(){// click is for the button
        playerOptions.push(options);
        craftStory();
        window.scrollTo({top: 0, behavior: 'smooth'});// basically scroll up with smooth transition
});
}

function buildOnStory(text){
    playTimeArea.innerHTML = text;
}

function craftStory(text){
    let CurrentPage = playerOptions[playerOptions.length - 1];
    playTimeArea.innerHTML = ""; // empty play time area
    clickButtonArea.innerHTML = ""; // empty button
    for (let idea of playerOptions){
        craftStory(story[idea].text) // as the button clicked the craftStory is with the text
    }
    for (let idea of story[CurrentPage].options){
        craftButton(idea[1],idea[0]);
}

}

restart.addEventListener("click", function(){
    location.reload(); //reloads current page on click, resetting the story or game
});

restart.style.display = 'none';// hides the restart button once click
m.addEventListener("click", function(){
    craftStory(story.opener.text);
    restart.style.display = ''; // reveal the restart button
});
}
