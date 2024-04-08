import { useRef, useState,useEffect } from "react";
import "./App.css"
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function App() {

  const counterRef = useRef(null)
  const [currentValue, setCurrentValue] = useState(0)

  useEffect(()=> {
    startLoader()
  }, [])

  useGSAP(() => {
    gsap.to(".counter", 0.25, {delay:1.75, opacity:0})

    gsap.to(".bar",1.5,{
      delay:1.75,
      height:0,
      stagger:{
        amount:0.5
      },
      ease:"power4.inOut"
    })

    gsap.from(".CodeR", 1.5, {
      delay:1.75,
      y:400, 
      stagger: {
        amount:0.5
      },
      ease:"power4.inOut"
    })

    gsap.from(".hero", 2, {
      delay:2.25,
      y:700,
      ease:"power4.inOut"
    })
  })
  

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
            </div>
            <div>
              <a href="#">CodeRush '24</a>
            </div>
            <div>
              <a href="#">Gurugram University</a>
            </div>
          </nav>

          <header>
            <h1 className="CodeRush">C</h1>
            <h1 className="CodeRush">o</h1>
            <h1 className="CodeRush">d</h1>
            <h1 className="CodeRush">e</h1>
            <h1 className="CodeRush">R</h1>
            <h1 className="CodeRush">u</h1>
            <h1 className="CodeRush">s</h1>
            <h1 className="CodeRush">h</h1>
          </header>

          <div className="hero">
             <img src={require("../src/images/hero.jpeg")}/>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
