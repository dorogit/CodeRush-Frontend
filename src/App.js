import Home from "./components/Home";
import "./App.css"

function App() {
  return (
    <div className="App">
      <div>

        <h1 className="counter">0</h1>

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
