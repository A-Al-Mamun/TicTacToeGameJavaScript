let result  = document.getElementsByClassName('result')[0];
let winnerText  = document.getElementsByClassName('winner-show')[0];
let resetBtn  = document.getElementById('reset-btn');
let newBtn  = document.getElementById('new-btn');
let boxes  = document.querySelectorAll('.box');

let isTurnX = true;

let winTurn = [
    [0,1,2],                       //  0  1  2
    [0,4,8],                       //  3  4  5
    [0,3,6],                       //  6  7  8
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

resetGame = () => {
    let isTurnX = true;
    enableBoxes();
    result.classList.add('hide');
}

enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}


boxes.forEach(box => {
    box.addEventListener('click', () => {
        if(isTurnX){  //Turn for 'X'
            box.innerText = 'X';
            isTurnX = false;
        }else{  //Turn for 'O'
            box.innerText = '0';
            isTurnX = true;
        }
        box.disabled = true;
        winCheck();
    })
    

    dissableBoxes = () => {
        for(let box of boxes){
            box.disabled = true;
        }
    }

    winCheck = () => {
        for(let win of winTurn){
            // console.log(
            //     boxes[win[0]].innerText, 
            //     boxes[win[1]].innerText, 
            //     boxes[win[2]].innerText
            // );
            let pos1Val =boxes[win[0]].innerText;
            let pos2Val =boxes[win[1]].innerText;
            let pos3Val =boxes[win[2]].innerText;

            if(pos1Val != "" && pos2Val != "" && pos3Val !=""){
                if(pos1Val === pos2Val && pos2Val === pos3Val){
                    // console.log("Winner : ", pos1Val);
                    result.classList.remove('hide');
                    winnerText.innerHTML = ('Congratulation Winner : ' + pos1Val);
                    dissableBoxes();
                }
            }
            
        }
    }
})  


resetBtn.addEventListener('click', () => {
    resetGame()
})

newBtn.addEventListener('click', () => {
    resetGame()
})

