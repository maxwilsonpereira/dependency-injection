import Counter from "../components/Counter";
import CounterFunction from "../components/CounterFunction";
import CounterContextFunction from "../components/CounterContext";

export default function Home() {
  return (
    <div className="root">
      <h1>Dependency Injection with InversifyJS</h1>

      <Counter />
      <hr />
      <CounterFunction />
      <hr />
      <CounterContextFunction />
    </div>
  );
}
