const { Universal } = require("@aeternity/aepp-sdk");
const { WALLET_SETTINGS } = require("./constants");

let provider;

class Provider {
  constructor() {
    this.wallet = {
      url: WALLET_SETTINGS.URL,
      internalUrl: WALLET_SETTINGS.INTERNAL_URL,
      compilerUrl: WALLET_SETTINGS.COMPILER_URL,
      keypair: WALLET_SETTINGS.KEY_PAIR
    };
  }

  async init() {
    provider = await Universal(this.wallet);
  }

  getDefaultProvider() {
    return provider;
  }
}

module.exports = Provider;
