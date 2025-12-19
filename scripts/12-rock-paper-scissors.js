
    let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
    };
    updateScoreElement();
    /*

    if (!score) {
        score = {
            wins: 0,
            losses: 0,
            ties: 0
        };
    }
    */
    let isAutoPlaying = false;
    let intervalId;

    //const autoPlay = () => {

    //}

    function autoPlay(){
        if(!isAutoPlaying){
            intervalId = setInterval(() => {
                const playerMove = aquireBotMove();
                playGame(playerMove);
            }, 1000);
            isAutoPlaying = true;
        } else{
            clearInterval(intervalId);
            isAutoPlaying = false;
        }
    }

    document.querySelector('.js-rock-btn').addEventListener('click', () => {
        playGame('rock')
    });
    document.querySelector('.js-paper-btn').addEventListener('click', () => {
        playGame('paper');
    });
    document.querySelector('.js-scissors-btn').addEventListener('click', () => {
        playGame('scissors');
    });

    document.body.addEventListener('keydown', (event) => {
        if (event.key === 'r') {
            playGame('rock');
        } else if (event.key === 'p') {
            playGame('paper')
        } else if (event.key === 's') {
            playGame('scissors')
        } 
    });

    function playGame( playerMove) {
        const botMove = aquireBotMove();
            if (playerMove === 'scissors') {
                if (botMove === 'scissors') {
                    result = `Tie. You're still alive`;
                } else if (botMove === 'rock') {
                    result = 'You lose Sukka!';
                } else if (botMove === 'paper') {
                    result = 'You Win. Ya lucky punk!';
                }
            } else if (playerMove === 'paper') {
                if (botMove === 'paper') {
                    result = `Tie. You're still alive`;
                } else if (botMove === 'scissors') {
                    result = 'You lose Sukka!';
                } else if (botMove === 'rock') {
                    result = 'You Win. Ya lucky punk!';
                }
            } else if (playerMove === 'rock'){
                if (botMove === 'rock') {
                result = `Tie. You're still alive`;
                } else if (botMove === 'paper') {
                    result = 'You lose Sukka!';
                } else if (botMove === 'scissors') {
                    result = 'You Win. Ya lucky punk!';
                }       
            } if ( result === 'You Win. Ya lucky punk!') {
                score.wins += 1;
            } else if( result === `Tie. You're still alive`) {
                score.ties += 1;
            } else if ( result ===  'You lose Sukka!') {
                score.losses += 1;
            }

            localStorage.setItem('score', JSON.stringify(score));

            updateScoreElement();

            document.querySelector('.js-results').innerHTML = result;
            document.querySelector('.js-moves').innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-img"><img src="images/${botMove}-emoji.png" class="move-img"> RO-Bot`;

    }

    function updateScoreElement() {
        document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    }

    function aquireBotMove() {
        let botMove = '';

        const randomNumber = Math.random();
        if ( randomNumber >= 0 && randomNumber < 1 / 3){
            botMove ='rock';
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
            botMove ='paper';
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
            botMove ='scissors';
        }
      

        return botMove;
    }
