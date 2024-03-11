// Iteration 1: Making the play button in the index.html functional.
// Description: When the play button is clicked the game.html page should be opened


//join it with game.html
const play = document.getElementById("play-button");
play.onclick = () =>
{
    location.href = "./game.html";
}