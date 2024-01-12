import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello React World</p>
        <Weather city="Kisumu" />
      </header>
    </div>
  );
}

export default App;
