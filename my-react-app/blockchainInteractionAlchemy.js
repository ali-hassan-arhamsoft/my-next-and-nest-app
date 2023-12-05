const { createAlchemyWeb3 } = require('@alch/alchemy-web3');

const web3 = createAlchemyWeb3('https://eth-goerli.g.alchemy.com/v2/9oGbCCUYQreJG3o4dTPlpHeAhnzXbQXg');

const address = '0xb64a30399f7f6b0c154c2e7af0a3ec7b0a5b131a';

async function getBalance() {
  try {
    // Get the balance in Wei
    const balanceWei = await web3.eth.getBalance(address);

    // Convert Wei to Ether
    const balanceEther = web3.utils.fromWei(balanceWei, 'ether');

    console.log(`Balance of ${address}: ${balanceEther} ETH`);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

getBalance();