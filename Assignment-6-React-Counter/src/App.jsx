import { useState } from "react";
import "./App.css";

function App() {

    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    function reset() {
        setCount(0);
    }

    return (
        <div className="page">

            <div className="counter-card">

                <h1>React Counter</h1>

                <div className="count">
                    {count}
                </div>

                <div className="buttons">

                    <button onClick={decrement} className="decrease">
                        −
                    </button>

                    <button onClick={reset} className="reset">
                        Reset
                    </button>

                    <button onClick={increment} className="increase">
                        +
                    </button>

                </div>

            </div>

        </div>
    );
}

export default App;