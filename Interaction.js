const {ethers} =require("ethers");
const provider=new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/859dba97a85f4b758b171e787e4e346d`);
const walletAddress="0x9bca23f8a46583cdb7c135cebc131bb972e66ef0";
const walletAbi=[
	{
		"inputs": [],
		"name": "sendEthContract",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "sendEthUser",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_num",
				"type": "uint256"
			}
		],
		"name": "setValue",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "accountBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contrcatBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getValue",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const contractInteraction=async()=>{
    const walletContract=new ethers.Contract(walletAddress,walletAbi,provider);
    const contractName=await walletContract.name();
    console.log("contractName is:",contractName);

    const num=await walletContract.getValue();
    console.log("Number value:",num);
    // To convert a BigInt to normal Number
    console.log("number value in normal form:",ethers.utils.formatUnits(num));

    const contractBalance= await walletContract.contrcatBalance();
    console.log("contract Balance is:",contractBalance);
    console.log("contrcat balance in normal form:",ethers.utils.formatEther(contractBalance));
    
    const userBalance= await walletContract.accountBalance("0x270144F0898408Ef205B6f7B334a7aB420dFE33C");
    console.log("my balance is:",userBalance);
    console.log("my wallet address in normal form:",ethers.utils.formatEther(userBalance));
}


contractInteraction();