// Function to validate command line arguments
function validateArgs(args) {
  if (args.length < 3) {
    console.error('Error: You must provide at least 3 moves.');
    console.error('Example: node rpsGame.js rock paper scissors');
    process.exit(1);
  }
  if (args.length % 2 === 0) {
    console.error('Error: You must provide an odd number of moves.');
    console.error('Example: node rpsGame.js rock paper scissors');
    process.exit(1);
  }
  const uniqueArgs = new Set(args);
  if (uniqueArgs.size !== args.length) {
    console.error('Error: Moves must be unique.');
    console.error('Example: node rpsGame.js rock paper scissors');
    process.exit(1);
  }
}

module.exports = { validateArgs };
