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
        <footer className="text-center">
          Coded by <em>Gabriela Saftoiu </em>
        </footer>
      </div>
    </div>
  );
}
