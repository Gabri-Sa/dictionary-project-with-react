import logo from "./logo.png";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header img-fluid">
        <img src={logo} className="App-logo " alt="logo" />
        <a href="#" className="btn btn-primary shadow">
          Hello
        </a>
      </header>
    </div>
  );
}
