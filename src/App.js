import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header img-fluid">Dictionary</header>
        <main>
          <Dictionary />
        </main>
        <br />
        <footer className="text-center">
          This project was coded by <em>Gabriela Saftoiu</em> and is
          open-sourced
        </footer>
      </div>
    </div>
  );
}
