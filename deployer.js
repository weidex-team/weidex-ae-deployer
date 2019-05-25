class Deployer {
  constructor(compiler, args) {
    this.compiler = compiler;
    this.deployArgs = args;
  }

  async deploy() {
    try {
      const compiled = await this.compiler.compile();
      const deployed = await compiled.deploy(this.deployArgs);
      return deployed;
    } catch (err) {
      console.error(`Deploying error: ${err}`);
    }
  }
}

module.exports = Deployer;
