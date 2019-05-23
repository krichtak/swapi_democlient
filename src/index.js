import winston from 'winston';
import config from 'config';

const logger = winston.createLogger({
  level: config.log.level,
  format: winston.format.json(),
  transports: [
    // Write logs to console
    new winston.transports.Console({
      format: winston.format.prettyPrint(),
    }),
    //
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    //
    new winston.transports.File({ filename: config.log.errorFile, level: 'error' }),
    new winston.transports.File({ filename: config.log.combinedFile }),
  ],
});

logger.debug(config);

