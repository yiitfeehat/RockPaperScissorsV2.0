



const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
}; function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement()

    alert('Score successfully reset!')
}

updateScoreElement()
function pickComputerMove() {
    let randomNumber = Math.random();
    let computerMove = '';

    if (randomNumber < 1 / 3 && randomNumber >= 0) {
        computerMove = 'rock';
    } else if (randomNumber < 2 / 3 && randomNumber >= 1 / 3) {
        computerMove = 'paper';
    } else {
        computerMove = 'scissors';
    }

    return computerMove;
}
function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = ''


    if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            result = 'tie'
        } else if (computerMove === 'paper') {
            result = 'you lose'
        } else {
            result = 'you win'
        }
    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            result = 'you win'
        } else if (computerMove === 'paper') {
            result = 'tie'
        } else {
            result = 'you lose'
        }
    } else {
        if (computerMove === 'rock') {
            result = 'you lose'
        } else if (computerMove === 'paper') {
            result = 'you win'
        } else {
            result = 'tie'
        }

    }

    if (result === 'you win') {
        score.wins += 1;
    } else if (result === 'you lose') {
        score.losses += 1;
    } else {
        score.ties += 1;
    }


    document.querySelector('.js-result').innerHTML = `<span class="result-span">${result}</span>`;
    document.querySelector('.js-moves').innerHTML = `You : <img class="paper-img move-img"
                    src="img/${playerMove}-move.png" alt=""> <span class="vs-span">VS</span> <img class="paper-img move-img"
                    src="img/${computerMove}-move.png" alt=""> : PC`
    updateScoreElement();
    localStorage.setItem('score', JSON.stringify(score));

}





function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = `Score= Wins: ${score.wins} | Losses:${score.losses} | Ties: ${score.ties}`;
}


