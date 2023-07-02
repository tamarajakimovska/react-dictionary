import "./App.css";
import logo from "./logot.png";
import './App.css';
import Dictionary from "./Dictionary";


function App() {
  return (
    <div className="App">
      <div className="container">
    <header className="App-header">
      <img src={logo}
      className="App-logo img-fluid"
      alt="logo" 
      rel="noreferrer"/>
   </header>
   <main>
    <Dictionary defaultKeyword="stars"/>
   </main>
   <footer className="App-footer">
<small>Coded by <a href="https://www.linkedin.com/in/tamara-jakimovska-869211240/" rel="norefferer" >Tamara Jakimovska </a></small>
   </footer>
    </div>
    </div>
  );
}
export default App;
  