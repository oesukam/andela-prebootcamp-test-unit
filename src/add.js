const add = (...args) => {
  if (!args) return undefined;
  if (args.length < 2) return undefined;
  if (args.some(val => typeof val !== 'number')) return undefined;
  return args.reduce((a, b) => {
    return a + b;
  });
};

module.exports = {
  add
}