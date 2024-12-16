import React from "react"
import './index2.css'
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
    return (
        <main className="container">
            <h1>State Practice</h1>
            <div className="counter">
                <button onClick={dec} className="minus" aria-label="Decrease count">–</button>
                <h2 className="count">{count}</h2>
                <button onClick={()=>setCount(prevCount=>prevCount+1)} className="plus" aria-label="Increase count">+</button>
                {/* this is try code */}
                </div>
            <button onClick={reset} className="reset">reset</button>
            
        </main>
    )
}
