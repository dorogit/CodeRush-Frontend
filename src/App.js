import Home from "./components/Home";
import { useRef, useState,useEffect } from "react";
import "./App.css"

function App() {

  const counterRef = useRef(null)
  const [currentValue, setCurrentValue] = useState(0)

  useEffect(()=> {
    startLoader()
  }, [])

  const startLoader = () => {
    const intervalId = setInterval(() => {
      const randomIncrement = Math.floor(Math.random() * 10) + 1; // Generate random increment between 1 and 10
      setCurrentValue(prevValue => {
        const newValue = prevValue + randomIncrement;
        return newValue > 100 ? 100 : newValue; // Cap the value at 100
      });
    }, 100); // Update every 0.1 second (100 milliseconds)

    // Stop the interval once currentValue reaches 100
    if (currentValue >= 100) {
      clearInterval(intervalId);
    }
  };

  return (
    <div className="App">
      <div>

        <h1 ref={counterRef} className="counter">{currentValue}%</h1>

        <div className="overlay">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        
        <div className="container">

          <nav>
            <div>
              <a href="#">About</a>
              <a href="#">Gurugram University</a>
            </div>
            <div>
              <a href="#">CodeRush '24</a>
            </div>
          </nav>

          <header>
            <h1>C</h1>
            <h1>o</h1>
            <h1>d</h1>
            <h1>e</h1>
            <h1>R</h1>
            <h1>u</h1>
            <h1>s</h1>
            <h1>h</h1>
          </header>

          <div className="hero">
             <img src={require("../src/images/hero.jpeg")}/>
          </div>

        </div>

      </div>
      <Home/>
    </div>
  );
}

export default App;
