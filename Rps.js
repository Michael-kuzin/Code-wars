const rps = (p1, p2) => {
    let scissors = 'scissors';
    let paper = 'paper';
    let rock = 'rock';
    switch (p1) {
        case scissors:
            if (p2 === scissors) {
                return 'Draw!'
            } else if (p2 === paper) {
                return 'Player 1 won!'
            } else if (p2 === rock) {
                return 'Player 2 won!'
            }
            break;

        case paper:
            if (p2 === paper) {
                return 'Draw!'
            } else if (p2 === rock) {
                return 'Player 1 won!'
            } else if (p2 === scissors) {
                return 'Player 2 won!'
            }
            break;
        case rock:
            if (p2 === rock) {
                return 'Draw!'
            } else if (p2 === scissors) {
                return 'Player 1 won!'
            } else if (p2 === paper) {
                return 'Player 2 won!'
            }
            break;
    }
};
console.log(rps('scissors', 'rock'));