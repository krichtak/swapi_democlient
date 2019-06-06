import winston from 'winston';
import config from 'config';
import prompts from 'prompts';

import crawl from './client';
import parsers from './parsers';
import stopsCalculation from './calculations';
import mapper from './mapper';

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

// load the endpoint from a environment variable; if not defined load from a config
const endpoint = process.env.endpoint || config.endpoint;

// run function
const run = ({ distance }) => crawl(endpoint, mapper(distance, parsers, stopsCalculation), logger)
  .then((result) => logger.info(result))
  .catch((err) => logger.error(err));

// ask user for distance and then calculate
prompts({
  type: 'number',
  name: 'distance',
  message: 'What is a distance in mega lights (MGLT)?',
})
  .then(run)
  .catch((err) => logger.error(err));
