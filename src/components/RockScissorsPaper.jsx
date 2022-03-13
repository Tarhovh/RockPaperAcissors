import React, { useState } from "react";
import Paper from "../paper.png";
import Rock from "../rock.png";
import Scissors from "../scissors.png";

const choices = [
  { id: 1, name: "rock", image: Rock, losesTo: 2, winsTo: 3 },
  { id: 2, name: "paper", image: Paper, losesTo: 3, winsTo: 1 },
  { id: 3, name: "scissors", image: Scissors, losesTo: 1, winsTo: 2 },
];

function RockScissorsPaper() {
  const [userChoice, setUserChoice] = useState([]);
  const [computerChoice, setComputerChoice] = useState([]);
  const [userScore, setUserScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [gameState, setGameState] = useState("");
  const [finalState, setFinalState] = useState("");

  function reStartGame() {
    setUserChoice([]);
    setComputerChoice([]);
    setCompScore(0);
    setUserScore(0);
    setGameState("");
  }

  const handleUserChoice = (value) => {
    const computerCurrentChoice =
      choices[Math.floor(Math.random() * choices.length)];

    setComputerChoice(computerCurrentChoice);

    const userCurrentChoice = choices.find((e) => e.id === value);
    setUserChoice(userCurrentChoice);

    console.log(computerCurrentChoice);

    if (userCurrentChoice.losesTo === computerCurrentChoice.id) {
      setCompScore((score) => score + 1);
      setGameState("lose");
    } else if (userCurrentChoice.winsTo === computerCurrentChoice.id) {
      setUserScore((score) => score + 1);
      setGameState("win");
    } else if (computerCurrentChoice.id === userCurrentChoice.id) {
      setGameState("draw");
    }

    if (compScore === 10 || userScore === 10) {
      if (compScore === 10) {
        setFinalState(`You lost, but you can play again!`);
      } else if (userScore === 10) {
        setFinalState(`You won! Congratulations!`);
      }
      reStartGame();
    }
  };

  return (
    <>
      <header>
        <h1>The winner is the one who scores 10 points</h1>
      </header>
      <div className="finalState">
        <h2>{finalState}</h2>
      </div>
      <div className="container">
        <div className="scoreZone">
          <div>
            <h2>Computer Score: {compScore} </h2>
          </div>
          <div>
            <h2>Your Score: {userScore} </h2>
          </div>
          <div>
            <h2>Game State: {gameState}</h2>
          </div>
          <button onClick={reStartGame}>Restart the game</button>
        </div>

        <div className="gameZone">
          <div className="info">
            <h2>Your Choice: {userChoice.name}</h2>
          </div>

          <div className="info2">
            <h2>Computer Choice: {computerChoice.name}</h2>
          </div>

          <div className="gamerZone">
            <img
              src={Rock}
              className="gamer-choice"
              alt="rock"
              onClick={() => {
                handleUserChoice(1);
              }}
            />
            <img
              src={Paper}
              className="gamer-choice"
              alt="paper"
              onClick={() => {
                handleUserChoice(2);
                <h2>{userChoice}</h2>;
              }}
            />
            <img
              src={Scissors}
              className="gamer-choice"
              alt="scissors"
              onClick={() => {
                handleUserChoice(3);
              }}
            />
          </div>

          <div className="compZone">
            <img
              src={computerChoice.image}
              className="comp-choice"
              alt={computerChoice.name}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default RockScissorsPaper;
