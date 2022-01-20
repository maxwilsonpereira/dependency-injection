export enum LogLevel {
  Fatal = 5,
  Error = 4,
  Warn = 3,
  Info = 2,
  Debug = 1,
  Trace = 0,
}

export class LoggingService {
  private static _minimumLogLevel: LogLevel = LogLevel.Info
  private static _instances: Map<string, LoggingService> = new Map<
    string,
    LoggingService
  >()
  private _category: string
  private _logMessage: string

  private constructor(category: string) {
    this._category = category
  }

  public static getInstance(category: string): LoggingService | undefined {
    if (LoggingService._instances.has(category)) {
      return LoggingService._instances.get(category)
    }
    const loggingService = new LoggingService(category)
    LoggingService._instances.set(category, loggingService)
    return loggingService
  }

  public get logMessage() {
    return this._logMessage
  }

  public log(severityLevel: LogLevel, msg: string, ...args: any[]): void {
    if (severityLevel < LoggingService._minimumLogLevel) return
    const message = `SEVERITY: ${severityLevel} / MESSAGE: ${msg} / ARGS:`
    console.log(
      `%c ${LogLevel[severityLevel]}: `,
      'font-size: 35px; color: darkred',
      message
    )
    console.log(JSON.stringify(args, null, 2))

    this._logMessage = message
  }

  public fatal(msg: string, ...args: any[]): void {
    this.log(LogLevel.Fatal, msg, args)
  }
  public error(msg: string, ...args: any[]): void {
    this.log(LogLevel.Error, msg, args)
  }
  public warn(msg: string, ...args: any[]): void {
    this.log(LogLevel.Warn, msg, args)
  }
  public info(msg: string, ...args: any[]): void {
    this.log(LogLevel.Info, msg, args)
  }
  public debug(msg: string, ...args: any[]): void {
    this.log(LogLevel.Debug, msg, args)
  }
  public trace(msg: string, ...args: any[]): void {
    this.log(LogLevel.Trace, msg, args)
  }
}
