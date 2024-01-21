import './App.css';
import {useEffect} from "react";
const {ethers} =require ("ethers");
function App() {
  const walletAddress="0x9bca23f8a46583cdb7c135cebc131bb972e66ef0";

 useEffect(()=>{
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
  ];
  const writeContract =async()=>{
    const provider=new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts",[]);
    const signer=provider.getSigner();
    const contract=new ethers.Contract(walletAddress,walletAbi,signer);
    // await contract.setValue(2);

    // send eth to contract
    // await contract .sendEthContract({value: ethers.utils.parseEther("0.1")});

    //  send Eth from contract to a address
    await contract.sendEthUser("0x9fC4782e34B67B2C1acD4b48f44Fd09f58a5d19d",{
      value:ethers.utils.parseEther("0.1"),
    })

   }


   writeContract();

 },[]);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
