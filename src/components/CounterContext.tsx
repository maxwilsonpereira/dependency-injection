// Functional component version updating some state will ONLY WORK with a SINGLETON,
// otherwise, the state will always be created again.
// If you are not updating a state on the injected class, than it doesn't need to be a singleton.

import React, { useState, useContext } from "react";
import { CounterContext } from "../providers/CounterProvider";

const CounterContextFunction: React.FunctionComponent = () => {
  // REACT ONLY ACCEPTS PROPERTY INJECTION! NO CONSTRUCTOR INJECTION!
  const { service } = useContext(CounterContext);
  // The actual calculation will be made by the CounterService, the useState is just
  // to force to re-render:
  const [count, setCount] = useState(service ? service.count : 0);

  return (
    <React.Fragment>
      <h2>Counter Component Using Function AND useContext</h2>
      <p>It's creating a new Singleton!</p>

      <button
        type="button"
        className="buttonMax"
        onClick={() => {
          service && service.increment();
          service && setCount(service.count);
        }}
      >
        INCREMENT
      </button>
      <h3 aria-live="polite">COUNTER: {count}</h3>
    </React.Fragment>
  );
};
export default CounterContextFunction;
