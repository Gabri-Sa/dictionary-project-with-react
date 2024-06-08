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
          This project was coded by
          <a
            href="https://portfolio-gabriela-saftoiu.netlify.app/about"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <em>Gabriela Saftoiu</em>
          </a>
          , is open-sourced on
          <a
            href="https://github.com/Gabri-Sa/dictionary-project-with-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            GitHub
          </a>{" "}
          and hosted on
          <a
            href="https://dictionary-project-with-react.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
