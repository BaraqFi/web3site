import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5';
import { ethers } from 'ethers';

// 1. Your WalletConnect Cloud project ID
const projectId = '72c01b274028f44820ad38a56692d78a';

// 2. Set chains
const mainnet = {
  chainId: 1,
  name: 'Ethereum',
  currency: 'ETH',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: 'https://cloudflare-eth.com'
};

// 3. Create your application's metadata object
const metadata = {
  name: 'mystiklegacy',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
};

// 4. Create Ethers config
const ethersConfig = defaultConfig({
  metadata,
  enableEIP6963: true,
  enableInjected: true,
  enableCoinbase: true,
  rpcUrl: 'https://cloudflare-eth.com', // used for the Coinbase SDK
  defaultChainId: 1 // used for the Coinbase SDK
});

// 5. Create a Web3Modal instance
const modal = createWeb3Modal({
  ethersConfig,
  chains: [mainnet],
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true // Optional - false as default
});

// Function to handle wallet connection
async function connectWallet() {
  try {
    const provider = await modal.connect();
    const web3Provider = new ethers.providers.Web3Provider(provider);
    const signer = web3Provider.getSigner();
    console.log('Connected!', await signer.getAddress());
  } catch (error) {
    console.error('Connection failed!', error);
  }
}

// Event listener for the button
document.getElementById('walletconnectButton').addEventListener('click', connectWallet);
