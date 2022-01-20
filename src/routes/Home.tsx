import Counter from '../components/Counter'
import CounterFunction from '../components/CounterFunction'
import CounterContextFunction from '../components/CounterContext'
import { LoggingService } from '../services/LoggingService'

const loggingService = LoggingService.getInstance('HomeComponent')

export default function Home() {
  const argumentsExample = { name: 'Max', City: 'Vienna' }
  loggingService?.info('Component Home', argumentsExample)

  return (
    <div className="root">
      <h1>Dependency Injection with InversifyJS</h1>
      <Counter />
      <hr />
      <CounterFunction />
      <hr />
      <CounterContextFunction />
    </div>
  )
}
