
import App1 from "./components/state"
import App2 from "./components/statePractice"
import App3 from "./components/complexState"
import App4 from "./components/complexStateObject"
import './App.css'
export default function App() {

    return (
        <main>
            <div className="first">
        <App1 />
        <App4 />
        </div>
        <div className="second">
        <App2 />
        </div>
        <div className="third">
        <App3 />
        </div>
        </main>
        
    )
}