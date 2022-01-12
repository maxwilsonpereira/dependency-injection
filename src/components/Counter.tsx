import React from 'react';
import { resolve } from 'inversify-react';
import { CounterService } from '../services/CounterService';

export default class Counter extends React.PureComponent<
  {},
  { count: number }
> {
  // REACT ONLY ACCEPTS PROPERTY INJECTION! NO CONSTRUCTOR INJECTION!
  @resolve(CounterService)
  private _conterService: CounterService;

  constructor(props: any) {
    // The super keyword is used to access and call functions on an object's parent:
    super(props);
    this.state = { count: 0 };
  }

  private onIncrement() {
    this._conterService.increment();
    this.setState({ count: this._conterService.count });
  }

  public render() {
    this.setState({ count: this._conterService.count });

    return (
      <React.Fragment>
        <button
          type="button"
          className="btn btn-primary btn-lg"
          onClick={() => {
            this.onIncrement();
          }}
        >
          Increment
        </button>

        <h3 aria-live="polite">COUNTER: {this.state.count}</h3>
      </React.Fragment>
    );
  }
}
