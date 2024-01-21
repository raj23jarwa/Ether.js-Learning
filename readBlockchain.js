const { ethers } = require("ethers");
const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/859dba97a85f4b758b171e787e4e346d`);

const queryBlockchain = async () => {
    try {
        const block = await provider.getBlockNumber();
        // console.log("current block number :", block);
        
        const balance = await provider.getBalance("0x270144F0898408Ef205B6f7B334a7aB420dFE33C");
        
        // Use formatEther directly from ethers.utils
        const etherBalance = ethers.utils.formatEther(balance);
        console.log("Balance is:", etherBalance);
        const weiBalance= ethers.utils.parseEther(etherBalance)
        console.log("weiBalance is: ",weiBalance);
    } catch (error) {
        console.error("Error querying blockchain:", error.message);
    }
}

queryBlockchain();
