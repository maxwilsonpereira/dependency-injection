// EXAMPLE DANIJEL:
// USING:     container.get<ILoggerService>('LoggingService', 'CodeBlocks');
// inversify.config will be someting like this:
// container
//   .bind<ICounterService>('counterServiceProvider')
//   .toFactory(
//     (category) => {
//       return new Logger(category)
//     }
//   )
//   .inSingletonScope()

export class LoggingService {
  private static _instances: Map<string, LoggingService> = new Map<
    string,
    LoggingService
  >()

  private _category: string

  private constructor(category: string) {
    this._category = category
  }

  public Log(severity: string, message: string): void {
    //compose the message
    message = 'category: ' + message
  }

  public static GetLoggingService(
    category: string
  ): LoggingService | undefined {
    if (LoggingService._instances.has(category)) {
      return LoggingService._instances.get(category)
    }

    const loggingService = new LoggingService(category)
    LoggingService._instances.set(category, loggingService)

    return loggingService
  }
}
