const buttonsStyles = ["rounded", "bg-white", "border-gray-300", "border-4", "h-12", "px-2", "my-4", "mx-2", 
"font-bold", "hover:bg-gray-200"];
const clicksUntilPaintingIsFullyShown = 3;
var circlesIDs = []; // to manage circles that cover the painting
var circlesQty = 0;
var clicksInThisRound = 0; // clicks to show more of the painting
var currentRoundPainting = {};
var alreadyExhibitedPaintings = [];
var thisRoundPotentialScore = 0;
var accumulatedScore = 0;

const renderWelcomePopUp = () => {
  // render blurred background and welcome popup
  const blurredBackground = document.createElement("div");
  blurredBackground.classList.add("fixed", "top-0", "left-0", "bg-black/50", "blur-sm", "backdrop-blur-sm", "w-full", 
  "h-full", "z-10"); // styles
  document.body.appendChild(blurredBackground);
  const popUp = document.createElement("div");
  popUp.classList.add("rounded-sm", "flex", "flex-col", "text-lg", "fixed", "z-10", "p-2", "font-bold", "text-center",
  "h-4/6", "w-4/6", "top-[16.6%]", "left-[16.6%]", "bg-cover", "bg-repeat", "border-2", "border-solid", "border-gray-500",
  "bg-[url('./../assets/rifqi-ali-ridho-VlXlW77swwY-unsplash.jpg')]", "justify-evenly", "align-baseline");
  const welcomeText = document.createElement("div");
  welcomeText.classList.add("bg-slate-50", "opacity-75", "p-2", "rounded-sm");
  welcomeText.innerHTML = `Welcome to the Guess the Painting Game! 
  <br><br> Are you up for a challenge?
  <br><br> Try to discover the names and artists of the hidden paintings. 
  <br><br> Be aware that the more you see of the painting, the fewer points you can score.`;
  popUp.appendChild(welcomeText);
  const startGameButton = document.createElement("button");
  buttonsStyles.forEach(style => startGameButton.classList.add(style)); // standard button styles
  startGameButton.innerHTML = "Start Game";
  startGameButton.addEventListener("click", () => {
    popUp.remove();
    blurredBackground.remove();
  });
  popUp.appendChild(startGameButton);
  document.body.appendChild(popUp);
}

Array.prototype.sample = function() {
  return this[Math.floor(Math.random() * this.length)];
};

const startNewRound = () => {
  // hide solution from last round, if applicable
  const solution = document.getElementById("solution");
  solution.classList.remove("absolute", "right-[0.5%]");
  solution.classList.add("fixed", "right-[-35%]");
  // choose new painting
  let newPaintingWasChosen = false;
  while (newPaintingWasChosen === false) {
    const randomPainting = paintings.sample();
    if (alreadyExhibitedPaintings.indexOf(randomPainting) === -1) {
      currentRoundPainting = randomPainting;
      newPaintingWasChosen = true;
    }
  }
  alreadyExhibitedPaintings.push(currentRoundPainting);
  // set global game variable to 0
  clicksInThisRound = 0;
  // render new round elements
  document.getElementById("paintingContainer").innerHTML = "";
  document.getElementById("options").innerHTML = "";
  renderPainting();
  renderAnswerOptions();
}

const renderAnswerOptions = () => {
  const currentRoundOptions = createAnswerOptionsArray();
  // 6 answer options per round, a) to f)
  for (let optionNumber = 0; optionNumber < 6; optionNumber++) {
    const optionLetter = String.fromCharCode("a".charCodeAt(0) + optionNumber) // a) to f)
    const optionNameAuthor = currentRoundOptions.sample(); // random
    currentRoundOptions.splice(currentRoundOptions.indexOf(optionNameAuthor), 1);
    option = document.createElement("button");
    buttonsStyles.forEach(style => option.classList.add(style));
    option.classList.add("w-2/5"); // width: 40%
    option.innerText = optionLetter + `) ${optionNameAuthor.name} by ${optionNameAuthor.author}`;
    option.addEventListener("click", () => renderSolution(optionNameAuthor));
    document.getElementById("options").appendChild(option);
  }
}

const createAnswerOptionsArray = () => {
  let currentRoundOptions = [currentRoundPainting]; // current round answer options
  answerOptions.splice(answerOptions.indexOf(currentRoundPainting), 1);
  while (currentRoundOptions.length < 6) {
    randomOption = answerOptions.sample();
    if (currentRoundOptions.indexOf(randomOption) === -1) // only unique answer options
      currentRoundOptions.push(randomOption);
  }
  return currentRoundOptions;
}

const renderPainting = () => {
  const painting = document.createElement("img");
  painting.src = `./assets/${currentRoundPainting.source}`;
  painting.id = "painting";
  painting.classList.add("hidden", "z-2"); // hide painting until covering circles are rendered
  const paintingContainer = document.getElementById("paintingContainer");
  paintingContainer.appendChild(painting);
  paintingContainer.classList.remove("w-2/3");
  paintingContainer.classList.add("w-full");
  painting.onload = (event) => {
    setTimeout(() => {
      // 2s after painting loaded, show painting and render circles
      painting.classList.remove("hidden");
      document.getElementById("options").classList.remove("hidden");
      // for better game experience, maximize painting fit to screen
      const relativeHeight  = painting.height / window.innerHeight;
      const relativeWidth   = painting.width / window.innerWidth;
      if (relativeHeight > relativeWidth)
        painting.style.height = window.innerHeight * 0.7 + "px";
      else
        painting.style.width = "90%";
      renderCircles();
    }, 2000);
  };
}

const renderCircles = () => {
  // circles should cover whole painting
  const painting = document.getElementById("painting");
  const xCirclesQty = painting.width / 20;
  const yCirclesQty = painting.height / 20;
  circlesQty = Math.ceil(xCirclesQty) * Math.ceil(yCirclesQty);
  const paintingLeft = painting.getBoundingClientRect().left;
  for (var i = 0; i < yCirclesQty; i++) {
    for (var j = 0; j < xCirclesQty; j++) {
      // circles should be able to be easily referenced later for gradual show of the painting
      const circle = document.createElement("div");
      circle.id = `c${i}/${j}`;
      circlesIDs.push(circle.id);
      circle.style.top = i * 20 - 10 + "px";
      circle.style.left = j * 20 - 35 + paintingLeft + "px";
      circle.classList.add("duration-[5000ms]", "z-3", "absolute", "w-10", "h-10", "rounded-full", 
      "bg-black", "circles");
      document.getElementById("paintingContainer").appendChild(circle);
    }
  }
  // when round starts, show 50% of painting, with each click to show more of the painting
  // revealing 1/6 of the painting (since clicksUntilPaintingIsFullyShown = 3)
  graduallyShowPainting((buttonClick = false));
  graduallyShowPainting((buttonClick = false));
  graduallyShowPainting((buttonClick = false));
}

const graduallyShowPainting = (buttonClick = true) => {
  if (buttonClick === true)
    clicksInThisRound++;
  if (clicksInThisRound > clicksUntilPaintingIsFullyShown)
    return;
  buttonClick ? updateScore("red") : updateScore();
  // each click shows 1/6 of the painting (since clicksUntilPaintingIsFullyShown = 3)
  iterations = 0.5 * circlesQty / clicksUntilPaintingIsFullyShown;
  for (var i = 0; i < iterations; i++) {
    // gradually reveal painting by turning random circles invisible
    const id = circlesIDs.sample(); // random
    circlesIDs.splice(circlesIDs.indexOf(id), 1);
    const circle = document.getElementById(id);
    circle.classList.add( "opacity-0", "duration-[2000ms]", "transition");
  }
}

const renderShowMoreOfThePaintingButton = () => {
  const buttonShowMoreOfThePainting = document.getElementById("buttonShowMoreOfThePainting");
  buttonsStyles.forEach(style => buttonShowMoreOfThePainting.classList.add(style));
  buttonShowMoreOfThePainting.innerText = "Show more of the painting";
  buttonShowMoreOfThePainting.addEventListener("click", () => graduallyShowPainting());
}

const renderCirclesDueToScreenResize = () => {
  // remove covering circles
  const circles = document.getElementsByClassName("circles");
  while (circles.length > 0)
    circles[0].remove();
  circlesIDs = [];
  // render circles again, taking into consideration new screen size
  renderCircles();
  // maintain game progress
  for (let i = 0; i < clicksInThisRound; i++)
    graduallyShowPainting((buttonClick = false));
}

const updateScore = (color = null) => {
  thisRoundPotentialScore = 1000 - Math.min(clicksInThisRound, clicksUntilPaintingIsFullyShown) * 250;
  score = document.getElementById("score");
  score.innerText = `Potencial score for this round: ${thisRoundPotentialScore}
  Your score so far: ${accumulatedScore}`;
  // temporarily highlight score, if applicable
  if (color === null) return;
  score.style.background = color;
  setTimeout(() => score.style.background = "#ffdf7d", 2000);
}

const renderSolution = (option) => {
  const solution = document.getElementById("solution");
  solution.classList.remove("fixed", "right-[-35%]");
  solution.classList.add("absolute", "right-[0.5%]");
  setTimeout(() => document.getElementById("painting").classList.add("max-w-fit", "max-h-fit"), 2000);
  document.getElementById("paintingContainer").classList.add("w-2/3"); // give space to solution
  document.getElementById("options").classList.add("hidden");
  solution.innerText = "";
  if (option.name === currentRoundPainting.name) {
    // Render 'Correct Answer!' and update score
    const correctAnswer = document.createElement("h2");
    correctAnswer.classList.add("text-center", "text-green-600", "font-bold", "text-lg");
    correctAnswer.innerText = `Correct Answer!`;
    solution.appendChild(correctAnswer);
    accumulatedScore += thisRoundPotentialScore;
    updateScore("lightgreen");
  } else {
    // Render 'Wrong Answer! The correct answer is:'
    const wrongAnswer = document.createElement("h2");
    wrongAnswer.classList.add("text-center", "font-bold", "text-lg", "flex", "justify-center", "m-2", "gap-2");
    wrongAnswer.innerHTML = '<span class="text-red-500">Wrong Answer!</span>The correct Answer is:';
    solution.appendChild(wrongAnswer);
    updateScore("red");
  }
  // Show name and history of painting
  const paintingTitle = document.createElement("h2");
  paintingTitle.classList.add("text-center", "font-bold", "text-lg");
  paintingTitle.innerHTML = `"${currentRoundPainting.name}"<br> by ${currentRoundPainting.author}`;
  solution.appendChild(paintingTitle);
  const solutionContent = document.createElement("p");
  solutionContent.innerHTML += `<br> Painted in ${currentRoundPainting.year}. <br><br>
  ${currentRoundPainting.description} <br><br>
  For more information, visit the Wikipedia article at: <br>
  <a href="${currentRoundPainting.wikipediaLink}" class="underline">${currentRoundPainting.wikipediaLink}</a>`;
  solution.appendChild(solutionContent);
  clicksInThisRound = clicksUntilPaintingIsFullyShown;
  // remove covering circles from the painting
  const circles = document.getElementsByClassName("circles");
  while (circles.length > 0)
    circles[0].remove();
  circlesIDs = [];
  renderNextRoundButton();
}

const renderNextRoundButton = () => {
  const nextRoundButton = document.createElement("button");
  nextRoundButton.classList.add("mt-7");
  buttonsStyles.forEach(style => nextRoundButton.classList.add(style));
  document.getElementById("solution").appendChild(nextRoundButton);
  if (alreadyExhibitedPaintings.length === paintings.length) {
    nextRoundButton.innerText = "End Game";
    nextRoundButton.addEventListener("click", renderEndGamePopUp);
    return;
  }
  nextRoundButton.innerText = "Next round →";
  nextRoundButton.addEventListener("click", startNewRound);
};

const renderEndGamePopUp = () => {
  const popUp = document.createElement("div");
  popUp.classList.add("rounded-sm", "flex", "flex-col", "text-lg", "fixed", "z-10", "p-2", "font-bold", "text-center",
  "h-4/6", "w-4/6", "top-[16.6%]", "left-[16.6%]", "bg-cover", "bg-repeat", "border-2", "border-solid", "border-gray-500",
  "bg-[url('./../assets/rifqi-ali-ridho-VlXlW77swwY-unsplash.jpg')]", "justify-evenly", "align-baseline");
  document.body.appendChild(popUp);
  const congratulations = document.createElement("div");
  congratulations.classList.add("bg-slate-50", "opacity-75", "p-2", "rounded-sm");
  congratulations.innerText = `Congratulations! You finished the game!
  Your total score was:`;
  popUp.appendChild(congratulations);
  const finalScore = document.createElement("div");
  finalScore.classList.add("text-xl", "bg-slate-50", "opacity-75", "p-2", "rounded-sm");
  finalScore.innerText = `${accumulatedScore} points out of 12000 possible points!`;
  popUp.appendChild(finalScore);
  const shareYourScore = document.createElement("div");
  shareYourScore.classList.add("bg-slate-50", "opacity-75", "p-2", "rounded-sm");
  shareYourScore.innerText = `Take a printscreen of this screen to show off your art knowledge to your friends.`;
  popUp.appendChild(shareYourScore);
};

renderWelcomePopUp();
startNewRound();
renderShowMoreOfThePaintingButton();
window.addEventListener("resize", renderCirclesDueToScreenResize);