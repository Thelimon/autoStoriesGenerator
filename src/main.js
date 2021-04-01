//1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');
const originalTextRegex = new RegExp('(?:(:insertx:|:inserty:|:insertz:))');
const finalTextStoryRegEx = new RegExp('(?:(Willy theGoblin|Big Daddy|Father Christmas|the soup kitchen|Disneyland' +
    '|the White House|spontaneously combusted|melted into a puddle on the sidewalk|' +
    'turned into a slug and crawled away))');

storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in " +
    "horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 " +
    "pounds, and it was a hot day.";

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

//3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

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

    if(customName.value !== '') {
        let name = customName.value;
    }
    if(document.getElementById("uk").checked) {
        let weight = Math.round(300);
        let temperature =  Math.round(94);
    }
    // ! story.textContent = ;
    story.style.visibility = 'visible';

    generatingRandomStory = () => {
        if (customName === "bob") {
            story.innerHTML=`Hablalo`;
        }else{
            story.innerHTML= `${(newStory.replace(originalTextRegex, xItem).replace(originalTextRegex, yItem))
                .replace(originalTextRegex, zItem).replace(originalTextRegex, xItem)};`
        }
    }
    generatingRandomStory();
}



