import { createRoot } from "react-dom/client";


let root = createRoot(document.querySelector("#root"))



import Basket from "./Basket";
import Button from  "./Button"
import  "../style.css"

export default function Container() {

  const totalValue =10;

  let rightValue = 0; //0
  let leftValue = totalValue -rightValue //10

  const leftBtnFunction =()=>{
      if(leftValue >0){
          leftValue --
          rightValue ++
          

          console.log(`Left Value ${leftValue}`)
          console.log(`Right Value ${rightValue}`);
      }
  }

    const rightBtnFunction =()=>{
      if(rightValue< totalValue){
          leftValue --
          rightValue ++

          console.log(`Right Value ${rightValue}`);      
          console.log(`Left Value ${leftValue}`)
      }
    }
  
  return (
    <div className="counterContainer">
        <div>
            <Basket countValue={leftValue} basketClass="count1" />
            <Button btnText={"+"} btnClass="leftBtn" eventHandler={leftBtnFunction} />
        </div>
        <div>
            <Basket countValue={rightValue} basketClass="count2" />
            <Button btnText={"-"} btnClass="rightBtn" eventHandler={rightBtnFunction}   />
        </div>
      

    </div>
  )
}
