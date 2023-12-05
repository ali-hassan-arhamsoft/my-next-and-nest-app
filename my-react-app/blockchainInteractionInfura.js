const {Web3} = require('web3')

const web3 = new Web3(new Web3.providers.HttpProvider('https://goerli.infura.io/v3/0652d74dff5440a78ae96c953c8d9ee2'));

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