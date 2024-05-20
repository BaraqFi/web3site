let isConnected = false;
let accounts = [];

// Get references to the button and modal elements
const connectButton = document.getElementById("connect-button");
const walletModal = document.getElementById("walletModal");
const accountInfo = document.getElementById("account-info");
const walletPanel = document.getElementById("walletPanel");
const closeButton = document.getElementById("closeButton");
const metamaskButton = document.getElementById("metamaskButton");
const trustwalletButton = document.getElementById('trustwalletButton');

// Event listener for the connect button
connectButton.addEventListener('click', () => {
    if (!isConnected) {
        walletPanel.style.display = "block"; // Show the wallet panel
        document.body.classList.add("blur-background"); // Add blur to background
    } else {
        disconnect();
    }
});

closeButton.addEventListener('click', () => {
    walletPanel.style.display = "none"; // Hide the panel
    document.body.classList.remove("blur-background"); // Remove blur from background
});

// MetaMask connection logic
metamaskButton.addEventListener("click", async () => {
    if (typeof window.ethereum !== 'undefined') {
        try {
            accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            const account = accounts[0];

            connectButton.textContent = "LOG OUT";
            accountInfo.textContent = `${formatAddress(account)} (${await getETHBalance(account)} ETH)`;
            isConnected = true;
            walletPanel.style.display = "none"; // Hide the panel after connecting
            document.body.classList.remove("blur-background"); // Remove blur from background

            // Store connection details in localStorage
            localStorage.setItem('isConnected', true);
            localStorage.setItem('account', account);

            // Redirect to another page after successful connection
            window.location.href = "newpage.html"; // Change to the desired URL

        } catch (error) {
            console.error("Error connecting:", error);
            alert("Error connecting to wallet.");
        }
    } else {
        alert("Please install MetaMask!");
    }
});

// Trust Wallet connection logic
walletconnectButton.addEventListener("click", async () => {
    const WalletConnectProvider = window.WalletConnectProvider.default;

    const provider = new WalletConnectProvider({
        rpc: {
            1: "https://ethereum-mainnet.core.chainstack.com/3323fc40150bb7949b740324d13be57e" // Replace with your Infura project ID
        }
    });

    try {
        // Enable session (triggers QR Code modal)
        await provider.enable();
        
        // Get accounts
        accounts = provider.accounts;
        const account = accounts[0];

        walletconnectButton.textContent = "LOG OUT";
        accountInfo.textContent = `${formatAddress(account)} (${await getETHBalanceWithProvider(provider, account)} ETH)`;
        isConnected = true;
        walletPanel.style.display = "none"; // Hide the panel after connecting
        document.body.classList.remove("blur-background"); // Remove blur from background

        // Store connection details in localStorage
        localStorage.setItem('isConnected', true);
        localStorage.setItem('account', account);

        // Redirect to another page after successful connection
        window.location.href = "newpage.html"; // Change to the desired URL

    } catch (error) {
        console.error("Error connecting to WalletConnect:", error);
        alert("Connection Refused.");
    }
});

// Function to get the Ethereum balance of an account using a provider
async function getETHBalanceWithProvider(provider, account) {
    const web3 = new Web3(provider);
    const balanceWei = await web3.eth.getBalance(account);
    const balanceEth = web3.utils.fromWei(balanceWei, 'ether');
    return parseFloat(balanceEth).toFixed(4);
}

// Function to get the Ethereum balance of an account
async function getETHBalance(account) {
    const balanceHex = await ethereum.request({ method: 'eth_getBalance', params: [account, 'latest'] });
    const balanceWei = parseInt(balanceHex, 16);
    const balanceEth = balanceWei / (10 ** 18);
    return balanceEth.toFixed(4);
}

// Function to format the Ethereum address
function formatAddress(address) {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

// Function to disconnect the wallet
function disconnect() {
    // Clear connected account
    accounts = [];
    // Update button text and clear displayed account info
    connectButton.textContent = "LOGIN";
    accountInfo.textContent = "";
    isConnected = false;
    hideModal(); // Hide the modal if disconnecting

    // Remove connection details from localStorage
    localStorage.removeItem('isConnected');
    localStorage.removeItem('account');
}

// Function to show the modal
function showModal() {
    // Position the modal next to the button
    const rect = connectButton.getBoundingClientRect();
    walletModal.style.left = `${rect.right + 10}px`;
    walletModal.style.top = `${rect.top}px`;
    walletModal.style.display = "block";
}

// Function to hide the modal
function hideModal() {
    walletModal.style.display = "none";
}

// Event listeners for hover effect on the connect button
connectButton.addEventListener('mouseenter', () => {
    if (isConnected) { // Only show if connected
        showModal();
    }
});

connectButton.addEventListener('mouseleave', hideModal);

// Also hide modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === walletModal) {
        hideModal();
    }
});

// Check if the user is already connected
window.addEventListener('load', async () => {
    const storedIsConnected = localStorage.getItem('isConnected');
    const storedAccount = localStorage.getItem('account');

    if (storedIsConnected && storedAccount) {
        accounts = [storedAccount];
        isConnected = true;

        connectButton.textContent = "LOG OUT";
        accountInfo.textContent = `${formatAddress(storedAccount)} (${await getETHBalance(storedAccount)} ETH)`;
    }
});
