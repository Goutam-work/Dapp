require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.alchemyapi.io/v2/R0IfKbmCEPuA0DCmJK_hyZBcGlm0MUMR',
      accounts: ['e6d5ccdd2ee977c59bcb5002a0d8f120056fb216536ebac6d6840f46243c5ac6'],
    },
  },
};