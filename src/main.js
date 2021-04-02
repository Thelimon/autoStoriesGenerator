//* 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS
const weight = 300;
const temperature = 94 ;
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

// *Regex for patterns
/*const originalTextRegex = new RegExp('((:insert[x,y,z]:))', 'g');*/
const originalTextRegex = /(:insert[x,y,z]:)/g;


//Original text & array containers
storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in " +
    "horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds," +
    "and it was a hot day.";

insertX = [
    "Willy the Goblin",
    "Big Daddy",
    "Father Christmas"
];

insertY = [
  "the soup kitchen",
  "Disneyland",
  "the White House"
];

insertZ = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away"
];

function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
}

// *3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result); // !Preguntar este poliformismo raro.

randomize.addEventListener('click', (randomizeEvent)=>{
    return randomizeEvent.value;
});

function result(randomizeEvent) {
  /**
   * newStory: is just a container for the main text
   * (x,y,z)Item it a container for arrays that contains random texts *
  */
    newStory = storyText;
    xItem = randomValueFromArray(insertX);
    yItem = randomValueFromArray(insertY);
    zItem = randomValueFromArray(insertZ);

    if(document.getElementById("uk").checked) {
        generatingRandomStoryFromStartText();
    }else{
        story.innerHTML = `${(newStory.replace(originalTextRegex, xItem).replace(originalTextRegex, yItem))
            .replace(originalTextRegex, zItem)};`
    }
    story.style.visibility = 'visible';
}

generatingRandomStoryFromStartText = () => {
    if (customName.value.toLowerCase() !== "Bob") {
        let customNameAux = customName.value;
        story.innerHTML = `${newStory.replace(`"94 fahrenheit"`, `${parseInt(((temperature*5)/9))} 
            centigrades`).replace(originalTextRegex, xItem)
            .replace(originalTextRegex, yItem).replace(originalTextRegex, yItem)
            .replace(originalTextRegex, zItem).replace(originalTextRegex, zItem)
            .replace("Bob", customNameAux)
            .replace("300 pounds", `${parseInt(weight * 0.0714286)} stones`)
        }`;
    }
}




