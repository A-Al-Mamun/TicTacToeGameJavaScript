let resetBtn  = document.getElementById('reset-btn');
let boxes  = document.querySelectorAll('.box');

let isTurn0 = true;

let winCheck = [
    [0,1,2],                       //  0  1  2
    [0,4,8],                       //  3  4  5
    [0,3,6],                       //  6  7  8
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

boxes.forEach(box => {
    box.addEventListener('click', () => {
        if(isTurn0){
            box.innerText = 'X';
            isTurn0 = false;
            
        }else{
            box.innerText = '0';
            isTurn0 = true
        }
    })    
})                            