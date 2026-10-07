// Accessing Process Properties

// Command-line arguments
process.argv;

// Environment variables
process.env;

// Current process ID
process.pid;

// Parent process ID
process.ppid;

// Operating system platform
process.platform;

// Node.js version
process.version;

// Node.js and dependencies versions
process.versions;

// Processor architecture
process.arch;

// Using Process Methods
// Current working directory
process.cwd();

// Change working directory
process.chdir("/tmp");

// Memory usage
process.memoryUsage();

// Process uptime
process.uptime();

// Exiting the process
process.exit(0);

// Kill the process
process.kill(process.pid);
