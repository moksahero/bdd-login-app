module.exports = {
  default: {
    requireModule: ["ts-node/register"],
    require: ["tests/features/steps/**/*.ts"],
    format: ["progress"],
    paths: ["tests/features/**/*.feature"],
    publishQuiet: true,
    timeout: 30000,
  },
};
