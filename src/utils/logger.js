import path from 'path';

export const logger = {
  log: (...args) => {
    const filename = getCallerFile();
    console.log(`\n${colors.green}[LOG] [${filename}]`, ...formatArgs(args));
  },

  info: (...args) => {
    const filename = getCallerFile();
    console.info(`\n${colors.blue}[INFO] [${filename}]`, ...formatArgs(args));
  },

  warn: (...args) => {
    const filename = getCallerFile();
    console.warn(`\n${colors.yellow}[WARN] [${filename}]`, ...formatArgs(args));
  },

  error: (...args) => {
    const filename = getCallerFile();
    console.error(`\n${colors.red}[ERROR] [${filename}]`, ...formatArgs(args));
  }
};

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[38;2;128;255;128m',
  yellow: '\x1b[38;2;255;227;57m',
  blue: '\x1b[38;2;128;255;255m',
  red: '\x1b[1;38;2;255;128;128m',
  cyan: '\x1b[38;2;102;217;239m',
  magenta: '\x1b[38;2;174;129;255m',
  gray: '\x1b[38;2;180;180;180m'
};

/**
 * Safely stringifies objects, handling circular references.
 */
const safeStringify = (obj, indent = 2) => {
  const seen = new WeakSet();
  return JSON.stringify(
    obj,
    (key, value) => {
      if (typeof value === 'object' && value !== null) {
        if (seen.has(value)) return '[Circular]';
        seen.add(value);
      }
      return value;
    },
    indent
  );
};

const highlightJson = jsonStr => {
  return jsonStr
    .replace(/"([^"]+)":/g, `${colors.cyan}"$1"${colors.reset}:`)
    .replace(/: "([^"]+)"/g, `: ${colors.green}"$1"${colors.reset}`)
    .replace(/: (\d+(\.\d+)?)/g, `: ${colors.magenta}$1${colors.reset}`)
    .replace(/: (true|false)/g, `: ${colors.yellow}$1${colors.reset}`)
    .replace(/: null/g, `: ${colors.gray}null${colors.reset}`);
};

const formatArgs = args =>
  args.map(arg => {
    if (arg instanceof Error) {
      return `[${arg.name}] ${arg.message}\nStack: ${arg.stack}`;
    }

    if (typeof arg === 'object') {
      const raw = safeStringify(arg, 2);
      return '\n' + highlightJson(raw);
    }

    return arg;
  });

const getCallerFile = () => {
  const stack = new Error().stack?.split('\n') || [];
  const callerLine = stack[3] || '';
  const match = callerLine.match(/\((.*):(\d+):(\d+)\)$/);

  if (match) {
    const filePath = match[1];
    const lineNumber = match[2];
    return path.basename(`${filePath}:${lineNumber}`);
  }

  return 'unknown';
};

export default logger;
