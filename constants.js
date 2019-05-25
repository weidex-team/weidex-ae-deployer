module.exports = {
  WALLET_SETTINGS: {
    URL: process.env.SDK_URL || "http://xx.xx.xx.xx:3013",
    INTERNAL_URL: process.env.INTERNAL_URL || "http://xx.xx.xx.xx:3113",
    COMPILER_URL: process.env.COMPILER_URL || "http://xx.xx.xx.xx:3080",
    KEY_PAIR: {
      publicKey:
        process.env.PUBLIC_KEY ||
        "ak_gGLZVDz7kV3PZgc4zvi2xXnuRwGTSJSvUaqdqcfb55GnDUmH5",
      secretKey:
        process.env.SECRET_KEY ||
        "646160d1b5b7413f094864eb41bdcbcce82c2118c442a77fc04e5f0f3ab3f1bc59279aa67ff0fa27cafbd397ba3d02bccbea2ca04d9d09c90d6e07818aa86452"
    }
  },
  CONTRACT: {
    source: "WeiDex.aes",
    args: [
      "ak_gGLZVDz7kV3PZgc4zvi2xXnuRwGTSJSvUaqdqcfb55GnDUmH5",
      10000000000000000,
      10000000000000000
    ]
  }
};
