// Functional component version updating some state will ONLY WORK with a SINGLETON,
// otherwise, the state will always be created again.
// If you are not updating a state on the injected class, than it doesn't need to be a singleton.

import React, { useState } from 'react'
import { container } from '../inversify.config'
import { ICounterService } from '../interfaces/ICounterService'

const CounterFunction: React.FunctionComponent = () => {
  // REACT ONLY ACCEPTS PROPERTY INJECTION! NO CONSTRUCTOR INJECTION!
  const _counterService: ICounterService = container.get<ICounterService>(
    'counterServiceProvider'
  )
  // The actual calculation will be made by the CounterService, the useState is just
  // to force to re-render:
  const [count, setCount] = useState(_counterService.count)

  return (
    <React.Fragment>
      <h2>Counter Component Using Function</h2>

      <button
        type="button"
        className="buttonMax"
        onClick={() => {
          _counterService.increment()
          setCount(_counterService.count)
        }}
      >
        INCREMENT
      </button>
      <h3 aria-live="polite">COUNTER: {count}</h3>
    </React.Fragment>
  )
}
export default CounterFunction
