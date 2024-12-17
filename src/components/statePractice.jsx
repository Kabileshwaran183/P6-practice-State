import React from "react"
import './statePractice.css'
export default function App() {
    let[count,setCount] = React.useState(0)
    function dec(){
        /* 
        1.  setCount(count-1)
                    |
        2.  setCount(function(){
                return count-1
            })
                    |
        3.  setCount(function(prevCount){
                return prevCount-1
            })
        */
        setCount(prevCount=> prevCount-1)
    }
    /*---we use in inside of html
    function inc(){
        setCount(count+1)
    }
    */
    function reset(){
        setCount(count=0)
    }

    const [isGoingOut, setIsGoingOut] = React.useState(false)
    
    function changeMind() {
        setIsGoingOut(prev => !prev)
    }

    return (
        <main className="state-practice-main">
            <h1>State Practice</h1>
            <div className="counter">
                <button onClick={dec} className="minus" aria-label="Decrease count">–</button>
                <h2 className="count">{count}</h2>
                <button onClick={()=>setCount(prevCount=>prevCount+1)} className="plus" aria-label="Increase count">+</button>
                {/* this is try code */}
                </div>
            <button onClick={reset} className="reset">reset</button>
        <br />
            <h1 className="title">Do I feel like going out tonight?</h1>
            <button
                onClick={changeMind}
                className="value"
                aria-label={`Current answer is ${isGoingOut ? "Yes" : "No"}. Click to change it.`}
            >{isGoingOut ? "Yes" : "No"}</button>
        </main>
    )
}
