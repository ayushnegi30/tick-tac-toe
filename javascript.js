let boxes  = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newbtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnX = true;
let count = 0;
const resetGame = () =>{
    let turnX = true; // playerX , player0 
    count = 0;
    enableBoxes();
    msgcontainer.classList.add("hide");
}

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
]
boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("box was clicked");
        if(turnX){
            box.innerText = "X";
            turnX = false;
        }
        else {
            box.innerText = "0";
            turnX = true;
        }
        box.disabled = true;
        count++;
        checkwinner();
    });
});

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) =>{
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}
const showdraw = () =>{
    msg.innerText ="its a draw";
    msgcontainer.classList.remove("hide");
    disableBoxes();
}
const checkwinner =  () => {
    for(let pattern of winPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != "" ){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner", pos1val);
                showWinner(pos1val);
            }
        }
    }
    if(count === 9){
        showdraw();
    }
}
resetbtn.addEventListener("click", resetGame);
newbtn.addEventListener("click", resetGame);