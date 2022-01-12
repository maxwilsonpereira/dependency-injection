import { useState } from 'react';
import Counter from './components/Counter';
import About from './components/About';

export default function App() {
  const [render, setRender] = useState<JSX.Element>(<Counter />);

  return (
    <div className="App">
      <h1>Dependency Injection with InversifyJS</h1>

      {render}

      <button
        onClick={() =>
          setRender(<About renderCounter={() => setRender(<Counter />)} />)
        }
      >
        ABOUT
      </button>
    </div>
  );
}
