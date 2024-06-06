import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header img-fluid">
          <a href="#" className="btn btn-primary shadow">
            Hello
          </a>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">Coded by Gabriela Saftoiu</footer>
      </div>
    </div>
  );
}
