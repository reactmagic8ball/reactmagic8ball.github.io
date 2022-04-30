import './App.css';
import logo from './reactlogo.png'
import magicball from './magicball.png'
function App() {
  return (

    <div className="app">
      <header className="demo">
      <h1>Demo Website</h1>
      <h4>This webpage was made using the React.js framework.</h4>
      <img class="reactlogo" alt="spinning reactjs logo" src={logo}/>
      <img class="magicball" alt="magic 8 ball" src={magicball}/>
  </header>
  <form action="Answer.html" method="get">
  <input class = "questionBox" type="text" name="question" placeholder="Enter A Question For The Magic 8 Ball" autocomplete="off"id="question" required oninvalid="this.setCustomValidity('Please Enter A Question.')" oninput="this.setCustomValidity('a')"/>
  <input class = "inputButton" type="submit" value="Ask"></input>
  </form>
    </div>
  );
  }
export default App;
