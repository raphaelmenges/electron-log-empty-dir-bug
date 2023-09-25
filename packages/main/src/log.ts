import log from 'electron-log';
import { join } from 'path';

// Setup log.
log.transports.file.resolvePathFn = (vars) => {
  return join(
    vars.libraryTemplate.replace('{appName}', 'new-app-name'),
    vars.fileName!,
  );
};
log.transports.file.maxSize = 1024 * 1024 * 10; // Set log file limit to 10 mb.
log.transports.file.level = 'info';
