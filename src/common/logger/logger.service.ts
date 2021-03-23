import config from 'config';
import * as winston from 'winston';
import TransportStream from 'winston-transport';
import { LogLevel, LogType } from './logger.constant';

class BrowserConsole extends TransportStream {
    private namespace: string = config.appName;

    private methods: PartialRecord<string, string> = {
        debug: 'log',
        error: 'error',
        info: 'info',
        warn: 'warn',
    };

    constructor(opts?: TransportStream.TransportStreamOptions) {
        super(opts);

        if (opts && opts.level && LogLevel.hasOwnProperty(opts.level)) {
            this.level = opts.level;
        }
    }

    private preMessage(level: LogType | string) {
        return `[${level.toUpperCase()}]:`;
    }

    public log(logEntry: winston.LogEntry, next: () => void) {
        setImmediate(() => {
            (this as any).emit('logged', logEntry);
        });

        const { message, level } = logEntry;

        const mappedMethod: unknown = this.methods[level] || 'log';
        console.group(`[${this.namespace}] - ${new Date().toISOString()}`);
        if (Object.getOwnPropertySymbols(logEntry).length === 2) {
            // @ts-ignore
            console[mappedMethod](this.preMessage(level), message);
        } else {
            // @ts-ignore
            let args = logEntry[Object.getOwnPropertySymbols(logEntry)[1]];
            args = args.length >= 1 ? args[0] : args;
            if (args)
                // @ts-ignore
                console[mappedMethod](this.preMessage(level), message, args);
            // @ts-ignore
            else console[mappedMethod](this.preMessage(level), message);
        }
        console.groupEnd();
        next();
    }
}

class LoggerInit {
    public logger: winston.Logger;
    constructor() {
        const logger = winston.createLogger({
            level: LogType.Info,
        });

        if (process.env.NODE_ENV !== 'production') {
            logger.add(
                new BrowserConsole({
                    level: LogType.Debug,
                })
            );
        } else {
            logger.add(
                new winston.transports.Console({
                    level: LogType.Info,
                    format: winston.format.simple(),
                })
            );
        }
        this.logger = logger;
    }
}

export const logger = new LoggerInit().logger;
