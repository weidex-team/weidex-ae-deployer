const Provider = require("./provider");
const Compiler = require("./compiler");
const Deployer = require("./deployer");
const { CONTRACT } = require("./constants");

async function run() {
  const provider = new Provider();

  provider.init().then(() => {
    const compiler = new Compiler(
      provider.getDefaultProvider(),
      CONTRACT.source
    );

    const deployer = new Deployer(compiler, CONTRACT.args);

    deployer.deploy().then(result => {
      console.log(result.deployInfo.address);
    });
  });
}

run();
