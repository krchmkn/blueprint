import FancyLogger from "./FancyLogger"
import Logger from "./Logger"

const logger = new Logger()
logger.print('logger message')

const fancyLogger = new FancyLogger(logger)
fancyLogger.print('fancyLogger message')
