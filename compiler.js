const fs = require("fs");
const path = require("path");

class Compiler {
  constructor(provider, sourceName) {
    this.provider = provider;
    this.sourceName = sourceName;
  }

  async compile(sourceName) {
    if (sourceName) {
      this.sourceName = sourceName;
    }

    let source = fs.readFileSync(
      path.resolve(__dirname, this.sourceName),
      "UTF-8"
    );
    let contract = await this.provider.getContractInstance(source);
    return contract;
  }
}

module.exports = Compiler;
