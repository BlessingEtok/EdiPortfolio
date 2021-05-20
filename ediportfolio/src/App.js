import logo from './logo.svg';
import './App.css';
import { ButtonComponent, Button1 } from './button'
import { RectangleComponent, CircleComponent } from './trustedBusinesses'
import {PromptComponent, CounterComponent} from './counter'
function App() {
  return (
    <div className="App">
      <RectangleComponent />
      <CircleComponent />

      <ButtonComponent />
      <PromptComponent />
      <CounterComponent />
      <Button1 />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ButtonComponent />

    </div>
  );
}

export default App;
