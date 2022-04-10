import React, {useState} from 'react'
import Icons from './Icon/Icon'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {

  let tictacArray = new Array(9).fill("");
  let [winMessage, setWinMessage] = useState("");
  let [isCross, setIsCross] = useState(true);

  // reset game
  function resetGame(){
    tictacArray.fill("");
    setWinMessage("");
    setIsCross(true);
  }

  //check the winner
  function checkWinner(){

    //rows
    if(tictacArray[0] === tictacArray[1] && tictacArray[1] ===tictacArray[2] && tictacArray[0] !== ""){
      setWinMessage(tictacArray[0] + " is the winner")
    }
    else if(tictacArray[3] === tictacArray[4] && tictacArray[4] ===tictacArray[5] && tictacArray[3] !== ""){
      setWinMessage(tictacArray[3] + " is the winner")
    }
    else if(tictacArray[6] === tictacArray[7] && tictacArray[7] ===tictacArray[8] && tictacArray[6] !== ""){
      setWinMessage(tictacArray[6] + " is the winner")
    }

    //columns
    else if(tictacArray[0] === tictacArray[3] && tictacArray[3] ===tictacArray[6] && tictacArray[0] !== ""){
      setWinMessage(tictacArray[0] + " is the winner")
    }
    else if(tictacArray[1] === tictacArray[4] && tictacArray[4] ===tictacArray[7] && tictacArray[1] !== ""){
      setWinMessage(tictacArray[1] + " is the winner")
    }
    else if(tictacArray[2] === tictacArray[5] && tictacArray[5] ===tictacArray[8] && tictacArray[2] !== ""){
      setWinMessage(tictacArray[2] + " is the winner")
    }

    //diaagonals
    else if(tictacArray[0] === tictacArray[4] && tictacArray[4] ===tictacArray[8] && tictacArray[0] !== ""){
      setWinMessage(tictacArray[0] + " is the winner")
    }
    else if(tictacArray[2] === tictacArray[4] && tictacArray[4] ===tictacArray[6] && tictacArray[2] !== ""){
      setWinMessage(tictacArray[2] + " is the winner")
    }
  }

  //fill the array with the choice
  function fillArray(index){
    if(winMessage){
      return toast('Gamee is Already Over', {
        position: "bottom-center",
        autoClose: 5000,
        });
    }else if(tictacArray[index] !== ""){
      return toast('Already Filled', {
        position: "bottom-center",
        autoClose: 5000,
        });
    }
    else if(tictacArray[index] === ""){
      tictacArray[index] = isCross ? "crosss" : "circclee";
      setIsCross(!isCross);
    }
    checkWinner();
    }  

  return (
    //Ui design
   <button  onClick={resetGame}>Reset Game</button>

  )
}

export default App
//FaPen, FaTimes, FaRegCircle