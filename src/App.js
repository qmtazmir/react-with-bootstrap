import logo from "./logo.ico";
import "./App.css";
import { Button, Spinner } from "react-bootstrap";
import CardGroup2 from "./Components/CardGroup2/CardGroup2";

function App() {
  return (
    <div className="App">
      <h1>using bootstrap</h1>
      <Button variant="secondary">My buttooooooon</Button>

      <br />

      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      <CardGroup2></CardGroup2>
    </div>
  );
}

export default App;
