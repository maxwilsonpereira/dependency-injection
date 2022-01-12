import React from "react";
import { resolve } from "inversify-react";
import { ICounterService } from "../Interfaces/ICounterService";

export default class Counter extends React.PureComponent<
  {},
  { count: number }
> {
  // REACT ONLY ACCEPTS PROPERTY INJECTION! NO CONSTRUCTOR INJECTION!
  @resolve("counterServiceProvider")
  private _counterService: ICounterService;

  constructor(props: any) {
    // The super keyword is used to access and call functions on an object's parent:
    super(props);
    this.state = { count: 0 };
  }

  private onIncrement() {
    this._counterService.increment();
    this.setState({ count: this._counterService.count });
  }

  public render() {
    return (
      <React.Fragment>
        <h2>Counter Component Using Class</h2>

        <button
          type="button"
          className="buttonMax"
          onClick={() => {
            this.onIncrement();
          }}
        >
          INCREMENT
        </button>
        <h3 aria-live="polite">COUNTER: {this.state.count}</h3>
      </React.Fragment>
    );
  }
}
